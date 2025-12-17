import Stripe from "stripe";
import { ENV } from "../config/env.js";
import { User } from "../models/user.model.js";
import { Product } from "../models/product.model.js";
import { Order } from "../models/order.model.js";

const stripe = new Stripe(ENV.STRIPE_SECRET_KEY);

export async function createPaymentIntent(req, res) {
  try {
    const { cartItems, shippingAddress } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ error: "Unauthorized" });
    }

    if (!cartItems || cartItems.length === 0) {
      return res.status(400).json({ error: "Cart is empty" });
    }

    let subtotal = 0;
    const validatedItems = [];

    for (const item of cartItems) {
      if (!item.product) {
        return res.status(400).json({
          error: "Invalid cart item (missing product)",
        });
      }

      const productId =
        typeof item.product === "string"
          ? item.product
          : item.product?._id;

      if (!productId) {
        return res.status(400).json({
          error: "Invalid product reference in cart",
        });
      }

      const product = await Product.findById(productId);

      if (!product) {
        return res.status(404).json({
          error: "Product not found. It may have been removed.",
        });
      }

      if (product.stock < item.quantity) {
        return res.status(400).json({
          error: `Insufficient stock for ${product.name}`,
        });
      }

      subtotal += product.price * item.quantity;

      validatedItems.push({
        product: product._id.toString(),
        name: product.name,
        price: product.price,
        quantity: item.quantity,
        image: product.images?.[0] || "",
      });
    }

    const shipping = 10;
    const tax = subtotal * 0.08;
    const total = subtotal + shipping + tax;

    if (total <= 0) {
      return res.status(400).json({ error: "Invalid order total" });
    }

    let customer = null;

    if (user.stripeCustomerId) {
      try {
        customer = await stripe.customers.retrieve(user.stripeCustomerId);
      } catch {
        customer = null;
      }
    }

    if (!customer) {
      customer = await stripe.customers.create({
        email: user.email,
        name: user.name || user.email,
        metadata: {
          clerkId: user.clerkId,
          userId: user._id.toString(),
        },
      });

      await User.findByIdAndUpdate(user._id, {
        stripeCustomerId: customer.id,
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(total * 100), // cents
      currency: "usd",
      customer: customer.id,
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        clerkId: user.clerkId,
        userId: user._id.toString(),
        orderItems: JSON.stringify(validatedItems),
        shippingAddress: JSON.stringify(shippingAddress),
        totalPrice: total.toFixed(2),
      },
    });

    return res.status(200).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("❌ Stripe Payment Error:", error);

    return res.status(500).json({
      error: error.message || "Stripe payment failed",
    });
  }
}


export async function handleWebhook(req, res) {
  const sig = req.headers["stripe-signature"];
  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      ENV.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("Webhook verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;

    try {
      const { userId, clerkId, orderItems, shippingAddress, totalPrice } = paymentIntent.metadata;

      const existingOrder = await Order.findOne({
        "paymentResult.id": paymentIntent.id,
      });

      if (existingOrder) {
        return res.json({ received: true });
      }

      const parsedItems = JSON.parse(orderItems);

      const order = await Order.create({
        user: userId,
        clerkId,
        orderItems: parsedItems,
        shippingAddress: JSON.parse(shippingAddress),
        paymentResult: {
          id: paymentIntent.id,
          status: "succeeded",
        },
        totalPrice: parseFloat(totalPrice),
      });

      // 🔻 Reduce stock
      for (const item of parsedItems) {
        await Product.findByIdAndUpdate(item.product, {
          $inc: { stock: -item.quantity },
        });
      }

      console.log("✅ Order created:", order._id);
    } catch (error) {
      console.error("❌ Webhook order creation error:", error);
    }
  }

  res.json({ received: true });
}
