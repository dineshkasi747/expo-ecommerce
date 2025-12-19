import mongoose from "mongoose";
import { Product } from "../models/product.model.js";
import { ENV } from "../config/env.js";

const products = [
  {
    name: "Wireless Bluetooth Headphones",
    description:
      "Premium over-ear headphones with active noise cancellation, 30-hour battery life, and premium sound quality. Perfect for music lovers and travelers.",
    price: 149.99,
    stock: 50,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    ],
    averageRating: 4.5,
    totalReviews: 128,
  },
  {
    name: "Smart Watch Series 5",
    description:
      "Advanced fitness tracking, heart rate monitor, GPS, and water-resistant design. Stay connected with notifications and apps on your wrist.",
    price: 299.99,
    stock: 35,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
    ],
    averageRating: 4.7,
    totalReviews: 256,
  },
  {
    name: "Leather Crossbody Bag",
    description:
      "Handcrafted genuine leather bag with adjustable strap. Features multiple compartments and elegant design perfect for daily use.",
    price: 89.99,
    stock: 25,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500",
      "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
    ],
    averageRating: 4.3,
    totalReviews: 89,
  },
  {
    name: "Running Shoes - Pro Edition",
    description:
      "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for performance and comfort during long runs.",
    price: 129.99,
    stock: 60,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
    ],
    averageRating: 4.6,
    totalReviews: 342,
  },
  {
    name: "Bestselling Mystery Novel",
    description:
      "A gripping psychological thriller that will keep you on the edge of your seat. New York Times bestseller with over 1 million copies sold.",
    price: 24.99,
    stock: 100,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    ],
    averageRating: 4.8,
    totalReviews: 1243,
  },
  {
    name: "Portable Bluetooth Speaker",
    description:
      "Waterproof wireless speaker with 360-degree sound, 12-hour battery life, and durable design. Perfect for outdoor adventures.",
    price: 79.99,
    stock: 45,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    ],
    averageRating: 4.4,
    totalReviews: 167,
  },
  {
    name: "Classic Denim Jacket",
    description:
      "Timeless denim jacket with vintage wash and comfortable fit. A wardrobe essential that pairs perfectly with any outfit.",
    price: 69.99,
    stock: 40,
    category: "Fashion",
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500",
    ],
    averageRating: 4.2,
    totalReviews: 95,
  },
  {
    name: "Yoga Mat Pro",
    description:
      "Extra-thick non-slip yoga mat with carrying strap. Eco-friendly material provides excellent cushioning and grip for all yoga styles.",
    price: 49.99,
    stock: 75,
    category: "Sports",
    images: [
      "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    ],
    averageRating: 4.5,
    totalReviews: 203,
  },
  {
    name: "Mechanical Keyboard RGB",
    description:
      "Gaming keyboard with customizable RGB lighting, mechanical switches, and programmable keys. Built for gamers and typing enthusiasts.",
    price: 119.99,
    stock: 30,
    category: "Electronics",
    images: [
      "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    ],
    averageRating: 4.7,
    totalReviews: 421,
  },
  {
    name: "Coffee Table Book Collection",
    description:
      "Stunning photography book featuring architecture and design from around the world. Hardcover edition with 300+ pages of inspiration.",
    price: 39.99,
    stock: 55,
    category: "Books",
    images: [
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
    ],
    averageRating: 4.6,
    totalReviews: 134,
  },
  {
  name: "Noise Cancelling Earbuds Pro",
  description:
    "True wireless earbuds with active noise cancellation, fast charging, and crystal-clear calls. Compact design with premium sound.",
  price: 99.99,
  stock: 70,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    "https://images.unsplash.com/photo-1585386959984-a415522c5d5c?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 312,
},
{
  name: "Gaming Mouse Ultra Precision",
  description:
    "High-performance gaming mouse with adjustable DPI, ergonomic design, and programmable buttons for competitive gaming.",
  price: 59.99,
  stock: 80,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1613141412501-9012977f1969?w=500",
    "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 540,
},
{
  name: "Men's Casual Sneakers",
  description:
    "Stylish everyday sneakers with cushioned sole and breathable fabric. Perfect for casual wear and light walking.",
  price: 74.99,
  stock: 65,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 221,
},
{
  name: "Women's Summer Dress",
  description:
    "Lightweight floral summer dress made with breathable fabric. Comfortable fit ideal for daily wear and outings.",
  price: 54.99,
  stock: 40,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
    "https://images.unsplash.com/photo-1542060748-10c28b62716c?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 178,
},
{
  name: "Adjustable Dumbbell Set",
  description:
    "Durable adjustable dumbbell set for home workouts. Ideal for strength training and muscle building.",
  price: 199.99,
  stock: 20,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=500",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 98,
},
{
  name: "Stainless Steel Water Bottle",
  description:
    "Insulated water bottle that keeps drinks cold for 24 hours and hot for 12 hours. Leak-proof and eco-friendly.",
  price: 29.99,
  stock: 120,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1526401485004-2aa7f3b25d85?w=500",
    "https://images.unsplash.com/photo-1556228720-421b6bbcd5b5?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 415,
},
{
  name: "Cookware Set 10-Piece",
  description:
    "Non-stick cookware set with heat-resistant handles. Compatible with gas and induction stoves.",
  price: 249.99,
  stock: 15,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1616627988434-95b9c6c02b64?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 187,
},
{
  name: "Luxury Scented Candle",
  description:
    "Hand-poured scented candle with calming lavender aroma. Burns cleanly for up to 40 hours.",
  price: 34.99,
  stock: 90,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=500",
    "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 264,
},
{
  name: "Laptop Backpack Waterproof",
  description:
    "Spacious backpack with padded laptop compartment and water-resistant material. Ideal for students and professionals.",
  price: 64.99,
  stock: 55,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 389,
},
{
  name: "Hardcover Science Fiction Novel",
  description:
    "Award-winning sci-fi novel exploring futuristic technology and humanity. A must-read for sci-fi lovers.",
  price: 27.99,
  stock: 85,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
  ],
  averageRating: 4.8,
  totalReviews: 642,
},
{
  name: "Office Chair Ergonomic",
  description:
    "Comfortable ergonomic office chair with lumbar support, adjustable height, and breathable mesh back.",
  price: 179.99,
  stock: 25,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    "https://images.unsplash.com/photo-1567016544098-6a41b36e6b30?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 214,
},
{
  name: "LED Desk Lamp",
  description:
    "Modern LED desk lamp with adjustable brightness and color temperature. Energy-efficient and eye-friendly.",
  price: 49.99,
  stock: 70,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 198,
},
{
  name: "Fitness Tracker Band",
  description:
    "Slim fitness tracker with step counter, sleep monitoring, and heart rate tracking. Lightweight and stylish.",
  price: 59.99,
  stock: 95,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500",
    "https://images.unsplash.com/photo-1526403223-2a8d4b59cb27?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 356,
},
{
  name: "Wireless Charging Pad",
  description:
    "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek and minimal design.",
  price: 39.99,
  stock: 110,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1616440347437-1a32b6d29b06?w=500",
    "https://images.unsplash.com/photo-1616594039964-ae9021a1f06d?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 289,
},
{
  name: "Kids Educational Puzzle Set",
  description:
    "Colorful educational puzzle set that enhances problem-solving and motor skills for kids.",
  price: 19.99,
  stock: 150,
  category: "Toys",
  images: [
    "https://images.unsplash.com/photo-1601758064131-8358b8d88e17?w=500",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 512,
},
{
  name: "Action Camera 4K",
  description:
    "Compact action camera with 4K recording, waterproof casing, and image stabilization for adventures.",
  price: 219.99,
  stock: 28,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1519183071298-a2962be96c94?w=500",
    "https://images.unsplash.com/photo-1508898578281-774ac4893c0c?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 174,
},
{
  name: "Bedside Alarm Clock",
  description:
    "Minimalist digital alarm clock with LED display, snooze function, and USB charging port.",
  price: 34.99,
  stock: 60,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=500",
    "https://images.unsplash.com/photo-1481277542470-605612bd2d61?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 141,
},
{
  name: "Travel Neck Pillow",
  description:
    "Memory foam travel neck pillow for comfortable long journeys. Comes with washable cover.",
  price: 24.99,
  stock: 130,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1529906920574-628dc1e49f38?w=500",
    "https://images.unsplash.com/photo-1544986581-efac024faf62?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 267,
},
{
  name: "Electric Kettle 1.5L",
  description:
    "Fast-boiling electric kettle with auto shut-off and stainless steel body. Ideal for tea and coffee.",
  price: 59.99,
  stock: 45,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375754-1421e5c4e6d5?w=500",
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 323,
},
{
  name: "Classic Wall Clock",
  description:
    "Elegant wall clock with silent movement and modern design. Perfect for home and office decor.",
  price: 44.99,
  stock: 50,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
  ],
  averageRating: 4.2,
  totalReviews: 109,
},
{
  name: "Smart LED TV 43 Inch",
  description:
    "Full HD smart LED TV with built-in streaming apps, vibrant display, and immersive sound quality for home entertainment.",
  price: 399.99,
  stock: 22,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    "https://images.unsplash.com/photo-1572314493295-09c6d5ecb6b5?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 487,
},
{
  name: "Men's Analog Wrist Watch",
  description:
    "Classic analog wrist watch with leather strap and stainless steel case. Elegant design suitable for all occasions.",
  price: 119.99,
  stock: 48,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=500",
    "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 214,
},
{
  name: "Electric Hair Trimmer",
  description:
    "Rechargeable hair trimmer with precision blades and multiple length settings for smooth and easy grooming.",
  price: 49.99,
  stock: 85,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1585386959984-a415522c5d5c?w=500",
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 361,
},
{
  name: "Wooden Study Table",
  description:
    "Compact wooden study table with spacious surface and sturdy build. Ideal for students and home offices.",
  price: 189.99,
  stock: 18,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    "https://images.unsplash.com/photo-1583845112239-97efc3a1a9e0?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 156,
},
{
  name: "Non-Stick Frying Pan",
  description:
    "Premium non-stick frying pan with even heat distribution and ergonomic handle. Easy to clean and durable.",
  price: 34.99,
  stock: 110,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1616627988434-95b9c6c02b64?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 297,
},
{
  name: "Backpack Travel Edition",
  description:
    "Multi-compartment travel backpack with USB charging port and padded laptop sleeve. Perfect for travel and college.",
  price: 79.99,
  stock: 60,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 344,
},
{
  name: "Resistance Bands Set",
  description:
    "Set of high-quality resistance bands for full-body workouts, stretching, and strength training at home.",
  price: 29.99,
  stock: 140,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1594737625785-cf2a91c9b8c4?w=500",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 509,
},
{
  name: "Desk Organizer Set",
  description:
    "Modern desk organizer set to keep your workspace tidy. Includes compartments for stationery and accessories.",
  price: 24.99,
  stock: 95,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1587614382346-acb07edce82d?w=500",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 183,
},
{
  name: "Inspirational Self-Help Book",
  description:
    "Motivational self-help book focused on personal growth, productivity, and building positive habits.",
  price: 21.99,
  stock: 120,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  ],
  averageRating: 4.8,
  totalReviews: 861,
},
{
  name: "Wireless Router Dual Band",
  description:
    "High-speed dual-band wireless router with wide coverage and enhanced security. Ideal for home and small offices.",
  price: 109.99,
  stock: 35,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1600379671861-49f1c4d9ab98?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 276,
},
{
  name: "Smartphone 5G Pro Max",
  description:
    "Powerful 5G smartphone with AMOLED display, long-lasting battery, and high-performance processor for multitasking.",
  price: 699.99,
  stock: 40,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 1240,
},
{
  name: "Tablet 10 Inch WiFi",
  description:
    "Lightweight tablet with high-resolution display, perfect for studying, browsing, and entertainment.",
  price: 349.99,
  stock: 35,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
    "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 512,
},
{
  name: "Laptop 15.6 Inch i5",
  description:
    "High-performance laptop with Intel i5 processor, SSD storage, and full HD display for work and study.",
  price: 899.99,
  stock: 25,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 834,
},
{
  name: "Bluetooth Neckband Earphones",
  description:
    "Lightweight wireless neckband with deep bass, fast charging, and sweat resistance.",
  price: 39.99,
  stock: 120,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1585386959984-a415522c5d5c?w=500",
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 678,
},
{
  name: "Men's Formal Shirt",
  description:
    "Slim-fit formal shirt made with premium cotton fabric, suitable for office and formal occasions.",
  price: 44.99,
  stock: 90,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
    "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 321,
},
{
  name: "Women's Handbag Premium",
  description:
    "Stylish premium handbag with spacious compartments and elegant design.",
  price: 99.99,
  stock: 30,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 184,
},
{
  name: "Men's Leather Wallet",
  description:
    "Genuine leather wallet with RFID protection and multiple card slots.",
  price: 29.99,
  stock: 150,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
    "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 402,
},
{
  name: "Running Shorts",
  description:
    "Breathable and lightweight running shorts designed for maximum comfort during workouts.",
  price: 24.99,
  stock: 100,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 198,
},
{
  name: "Cricket Bat English Willow",
  description:
    "Professional-grade English willow cricket bat with excellent balance and stroke power.",
  price: 249.99,
  stock: 15,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1593766827228-8737b4534aa6?w=500",
    "https://images.unsplash.com/photo-1625070036029-7c48b1bba6f3?w=500",
  ],
  averageRating: 4.8,
  totalReviews: 156,
},
{
  name: "Football Match Quality",
  description:
    "Durable match-quality football with superior grip and long-lasting air retention.",
  price: 34.99,
  stock: 85,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?w=500",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 287,
},
{
  name: "Bookshelf Wooden",
  description:
    "Modern wooden bookshelf with multiple storage compartments for books and decor.",
  price: 199.99,
  stock: 20,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 143,
},
{
  name: "Microwave Oven 20L",
  description:
    "Compact microwave oven with multiple cooking modes and quick heating technology.",
  price: 179.99,
  stock: 28,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 356,
},
{
  name: "Vacuum Cleaner Bagless",
  description:
    "High-suction bagless vacuum cleaner with HEPA filter for deep cleaning.",
  price: 229.99,
  stock: 22,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500",
    "https://images.unsplash.com/photo-1600607688617-6b9e5cb4e0e5?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 411,
},
{
  name: "Cookbook Indian Recipes",
  description:
    "Comprehensive Indian cookbook featuring traditional and modern recipes with step-by-step instructions.",
  price: 32.99,
  stock: 75,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500",
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 529,
},
{
  name: "Notebook Set A5",
  description:
    "Set of premium A5 notebooks with thick pages, ideal for notes and journaling.",
  price: 14.99,
  stock: 200,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 318,
},
{
  name: "Office Desk Wooden",
  description:
    "Minimalist wooden office desk with sturdy build and spacious work surface.",
  price: 249.99,
  stock: 18,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
    "https://images.unsplash.com/photo-1583845112239-97efc3a1a9e0?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 201,
},
{
  name: "Portable Power Bank 20000mAh",
  description:
    "High-capacity power bank with fast charging support and dual USB output.",
  price: 49.99,
  stock: 95,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=500",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 689,
},
{
  name: "Wireless Keyboard & Mouse Combo",
  description:
    "Silent wireless keyboard and mouse combo with long battery life.",
  price: 59.99,
  stock: 70,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 344,
},
{
  name: "Yoga Block Set",
  description:
    "Set of two high-density yoga blocks for stability and balance during poses.",
  price: 19.99,
  stock: 140,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=500",
    "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 257,
},
{
  name: "Travel Suitcase Medium",
  description:
    "Durable hard-shell suitcase with smooth wheels and TSA lock.",
  price: 159.99,
  stock: 26,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 192,
},
{
  name: "Smart Air Conditioner 1.5 Ton",
  description:
    "Energy-efficient smart air conditioner with fast cooling, WiFi control, and low noise operation.",
  price: 599.99,
  stock: 18,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 289,
},
{
  name: "Refrigerator Double Door",
  description:
    "Spacious double-door refrigerator with frost-free technology and energy-saving compressor.",
  price: 749.99,
  stock: 14,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1590638080899-bb5cdd5bba07?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 341,
},
{
  name: "Washing Machine Front Load",
  description:
    "Fully automatic front-load washing machine with multiple wash programs and low water consumption.",
  price: 649.99,
  stock: 16,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 275,
},
{
  name: "Men's Sports Tracksuit",
  description:
    "Comfortable and breathable sports tracksuit suitable for workouts and casual wear.",
  price: 69.99,
  stock: 60,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 198,
},
{
  name: "Women's Running Shoes",
  description:
    "Lightweight running shoes with excellent grip and cushioning for long-distance runs.",
  price: 119.99,
  stock: 45,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 324,
},
{
  name: "Badminton Racket Carbon Fiber",
  description:
    "Professional carbon fiber badminton racket with excellent control and power.",
  price: 149.99,
  stock: 35,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1623148675902-d81a3a2bb9c4?w=500",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 216,
},
{
  name: "Desk Chair Adjustable",
  description:
    "Comfortable adjustable desk chair with lumbar support and smooth-rolling wheels.",
  price: 139.99,
  stock: 28,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1567016544098-6a41b36e6b30?w=500",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 187,
},
{
  name: "Table Lamp Modern",
  description:
    "Modern table lamp with soft ambient lighting, perfect for bedrooms and living rooms.",
  price: 39.99,
  stock: 85,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
    "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 142,
},
{
  name: "Bluetooth Soundbar",
  description:
    "Powerful Bluetooth soundbar with immersive surround sound and multiple connectivity options.",
  price: 229.99,
  stock: 24,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    "https://images.unsplash.com/photo-1572314493295-09c6d5ecb6b5?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 358,
},
{
  name: "Digital Camera Mirrorless",
  description:
    "Compact mirrorless camera with interchangeable lenses and high-resolution image quality.",
  price: 999.99,
  stock: 12,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1519183071298-a2962be96c94?w=500",
    "https://images.unsplash.com/photo-1508898578281-774ac4893c0c?w=500",
  ],
  averageRating: 4.8,
  totalReviews: 412,
},
{
  name: "Men's Casual T-Shirt",
  description:
    "Soft cotton casual t-shirt with modern fit, suitable for everyday wear.",
  price: 19.99,
  stock: 150,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
    "https://images.unsplash.com/photo-1583743814966-8936f5b8d25e?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 501,
},
{
  name: "Women's Winter Jacket",
  description:
    "Warm insulated winter jacket with stylish design and wind-resistant material.",
  price: 159.99,
  stock: 32,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1542060748-10c28b62716c?w=500",
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 214,
},
{
  name: "Children's Story Book Set",
  description:
    "Illustrated story book set designed to improve reading habits and imagination in children.",
  price: 29.99,
  stock: 120,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
  ],
  averageRating: 4.8,
  totalReviews: 637,
},
{
  name: "Notebook Spiral Pack",
  description:
    "Pack of spiral notebooks with smooth pages for writing and sketching.",
  price: 12.99,
  stock: 250,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 289,
},
{
  name: "Electric Iron Steam",
  description:
    "Powerful steam iron with non-stick soleplate and adjustable temperature control.",
  price: 49.99,
  stock: 90,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 341,
},
{
  name: "Rice Cooker Electric",
  description:
    "Automatic electric rice cooker with keep-warm function and durable inner pot.",
  price: 79.99,
  stock: 55,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 418,
},
{
  name: "Smart Door Lock",
  description:
    "Keyless smart door lock with fingerprint access and mobile app control.",
  price: 249.99,
  stock: 20,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 176,
},
{
  name: "Car Dash Camera",
  description:
    "Full HD dash camera with night vision and loop recording for vehicle safety.",
  price: 89.99,
  stock: 65,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1600379671861-49f1c4d9ab98?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 233,
},
{
  name: "Travel Duffel Bag",
  description:
    "Spacious and durable travel duffel bag suitable for gym and short trips.",
  price: 54.99,
  stock: 70,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 196,
},
{
  name: "Camping Tent 4 Person",
  description:
    "Waterproof camping tent suitable for up to four people, easy to set up and lightweight.",
  price: 179.99,
  stock: 22,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    "https://images.unsplash.com/photo-1523987355523-c7b5b84a7c0f?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 254,
},
{
  name: "Smart Ceiling Fan",
  description:
    "Energy-efficient smart ceiling fan with remote control and silent operation.",
  price: 179.99,
  stock: 26,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 214,
},
{
  name: "Induction Cooktop",
  description:
    "Portable induction cooktop with touch controls and multiple cooking modes.",
  price: 99.99,
  stock: 48,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 376,
},
{
  name: "Men's Denim Jeans",
  description:
    "Classic fit denim jeans made from durable fabric for everyday comfort.",
  price: 59.99,
  stock: 85,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 492,
},
{
  name: "Women's Casual Sandals",
  description:
    "Comfortable flat sandals with stylish straps for daily wear.",
  price: 34.99,
  stock: 70,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
    "https://images.unsplash.com/photo-1542060748-10c28b62716c?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 267,
},
{
  name: "Gym Gloves Grip Fit",
  description:
    "Breathable gym gloves with strong grip support for weight training.",
  price: 19.99,
  stock: 140,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 312,
},
{
  name: "Treadmill Home Fitness",
  description:
    "Foldable treadmill with multiple speed levels and digital display.",
  price: 899.99,
  stock: 10,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 189,
},
{
  name: "Wall Mounted Bookshelf",
  description:
    "Modern wall-mounted bookshelf with minimalist design for compact spaces.",
  price: 129.99,
  stock: 35,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 168,
},
{
  name: "Bedside Wooden Table",
  description:
    "Compact wooden bedside table with drawer and storage shelf.",
  price: 99.99,
  stock: 42,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1583845112239-97efc3a1a9e0?w=500",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 193,
},
{
  name: "Wireless Presentation Remote",
  description:
    "Wireless presenter with laser pointer, ideal for meetings and presentations.",
  price: 39.99,
  stock: 95,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 241,
},
{
  name: "External Hard Drive 2TB",
  description:
    "Portable 2TB external hard drive with fast data transfer speeds.",
  price: 119.99,
  stock: 50,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 532,
},
{
  name: "Smart WiFi Plug",
  description:
    "WiFi-enabled smart plug to control appliances remotely via mobile app.",
  price: 24.99,
  stock: 130,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 319,
},
{
  name: "Electric Toothbrush",
  description:
    "Rechargeable electric toothbrush with multiple brushing modes.",
  price: 69.99,
  stock: 65,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1600379671861-49f1c4d9ab98?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 448,
},
{
  name: "Cotton Bath Towel Set",
  description:
    "Soft and absorbent cotton towel set suitable for daily use.",
  price: 39.99,
  stock: 120,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 287,
},
{
  name: "Laundry Storage Basket",
  description:
    "Foldable laundry basket with durable fabric and handles.",
  price: 29.99,
  stock: 90,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 156,
},
{
  name: "Educational Wall Map",
  description:
    "Large laminated world map suitable for students and classrooms.",
  price: 19.99,
  stock: 110,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500",
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 223,
},
{
  name: "Sketching Pencil Set",
  description:
    "Professional sketching pencil set ideal for artists and beginners.",
  price: 14.99,
  stock: 200,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 402,
},
{
  name: "Laptop Cooling Pad",
  description:
    "Cooling pad with multiple fans to prevent laptop overheating.",
  price: 29.99,
  stock: 75,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 267,
},
{
  name: "Car Vacuum Cleaner",
  description:
    "Compact car vacuum cleaner with strong suction and washable filter.",
  price: 49.99,
  stock: 60,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1600379671861-49f1c4d9ab98?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 198,
},
{
  name: "Travel Neck Wallet",
  description:
    "Secure travel neck wallet for passports, cash, and cards.",
  price: 19.99,
  stock: 140,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 176,
},
{
  name: "Portable Camping Chair",
  description:
    "Foldable camping chair with strong frame and carry bag.",
  price: 44.99,
  stock: 55,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    "https://images.unsplash.com/photo-1523987355523-c7b5b84a7c0f?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 221,
},
{
  name: "Smart Water Purifier",
  description:
    "Advanced RO+UV water purifier with multi-stage filtration for safe drinking water.",
  price: 329.99,
  stock: 22,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 412,
},
{
  name: "Gas Stove 3 Burner",
  description:
    "Stainless steel 3-burner gas stove with high efficiency and elegant design.",
  price: 159.99,
  stock: 35,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 287,
},
{
  name: "Men's Sports Shoes",
  description:
    "Durable sports shoes with cushioned sole and breathable upper.",
  price: 99.99,
  stock: 65,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 498,
},
{
  name: "Women's Yoga Pants",
  description:
    "Stretchable yoga pants with moisture-wicking fabric for comfort.",
  price: 39.99,
  stock: 90,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
    "https://images.unsplash.com/photo-1550345332-09e3ac987658?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 331,
},
{
  name: "Smart Baby Monitor",
  description:
    "WiFi baby monitor with night vision, two-way audio, and motion alerts.",
  price: 189.99,
  stock: 28,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 174,
},
{
  name: "Wireless Security Camera",
  description:
    "Smart wireless security camera with motion detection and cloud storage support.",
  price: 129.99,
  stock: 45,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 389,
},
{
  name: "Men's Hoodie Sweatshirt",
  description:
    "Warm and comfortable hoodie sweatshirt suitable for casual wear.",
  price: 49.99,
  stock: 85,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
    "https://images.unsplash.com/photo-1583743814966-8936f5b8d25e?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 267,
},
{
  name: "Women's Winter Boots",
  description:
    "Insulated winter boots with anti-slip sole for cold conditions.",
  price: 129.99,
  stock: 38,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1542060748-10c28b62716c?w=500",
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 193,
},
{
  name: "Adjustable Skipping Rope",
  description:
    "Lightweight adjustable skipping rope for cardio workouts.",
  price: 14.99,
  stock: 180,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 412,
},
{
  name: "Camping Backpack 60L",
  description:
    "Large-capacity camping backpack with ergonomic support and waterproof material.",
  price: 139.99,
  stock: 30,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 258,
},
{
  name: "Electric Hand Blender",
  description:
    "Powerful hand blender for smoothies, soups, and sauces.",
  price: 59.99,
  stock: 75,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 291,
},
{
  name: "Smart Digital Thermometer",
  description:
    "Fast and accurate digital thermometer with LCD display.",
  price: 24.99,
  stock: 130,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1600379671861-49f1c4d9ab98?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 204,
},
{
  name: "Men's Formal Shoes",
  description:
    "Classic formal leather shoes suitable for office and events.",
  price: 109.99,
  stock: 40,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500",
    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 319,
},
{
  name: "Women's Shoulder Bag",
  description:
    "Stylish shoulder bag with spacious compartments and premium finish.",
  price: 89.99,
  stock: 34,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500",
    "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 176,
},
{
  name: "Children's School Backpack",
  description:
    "Lightweight and durable school backpack for kids.",
  price: 34.99,
  stock: 110,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 298,
},
{
  name: "Smart Alarm Clock",
  description:
    "Digital alarm clock with temperature display and snooze feature.",
  price: 29.99,
  stock: 90,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500",
    "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 167,
},
{
  name: "Wall Art Canvas Set",
  description:
    "Decorative canvas wall art set for modern interiors.",
  price: 79.99,
  stock: 55,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
    "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 213,
},
{
  name: "Smart Light Bulb RGB",
  description:
    "WiFi-enabled RGB smart bulb with voice assistant support.",
  price: 19.99,
  stock: 160,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 482,
},
{
  name: "Portable Bluetooth FM Radio",
  description:
    "Compact FM radio with Bluetooth support and rechargeable battery.",
  price: 49.99,
  stock: 70,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    "https://images.unsplash.com/photo-1572314493295-09c6d5ecb6b5?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 229,
},
{
  name: "Travel Shoe Organizer",
  description:
    "Compact travel shoe organizer to keep footwear clean and organized.",
  price: 19.99,
  stock: 120,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 158,
},
{
  name: "Camping Sleeping Bag",
  description:
    "Warm and lightweight sleeping bag suitable for outdoor camping.",
  price: 89.99,
  stock: 42,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    "https://images.unsplash.com/photo-1523987355523-c7b5b84a7c0f?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 241,
},
{
  name: "Fiction Bestseller Novel",
  description:
    "Award-winning fiction novel with engaging storytelling.",
  price: 22.99,
  stock: 140,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
  ],
  averageRating: 4.8,
  totalReviews: 862,
},
{
  name: "Exam Preparation Guide",
  description:
    "Comprehensive exam preparation book with practice questions.",
  price: 34.99,
  stock: 95,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 417,
},
{
  name: "Kids Drawing Kit",
  description:
    "Creative drawing kit with colors, sketch pens, and accessories.",
  price: 24.99,
  stock: 160,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=500",
    "https://images.unsplash.com/photo-1601758064131-8358b8d88e17?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 536,
},
{
  name: "Noise Reduction Ear Muffs",
  description:
    "Comfortable ear muffs designed to reduce noise during travel or work.",
  price: 29.99,
  stock: 110,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500",
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 199,
},
{
  name: "Portable Folding Table",
  description:
    "Lightweight folding table suitable for travel and outdoor use.",
  price: 69.99,
  stock: 48,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    "https://images.unsplash.com/photo-1523987355523-c7b5b84a7c0f?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 182,
},

{
  name: "Smart Electric Kettle",
  description:
    "Fast-boiling electric kettle with auto shut-off and stainless steel body.",
  price: 69.99,
  stock: 60,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=500",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 318,
},
{
  name: "Air Fryer 5L",
  description:
    "Oil-free air fryer with digital controls for healthy cooking.",
  price: 179.99,
  stock: 34,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1616627988434-95b9c6c02b64?w=500",
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 429,
},
{
  name: "Men's Polo T-Shirt",
  description:
    "Premium cotton polo t-shirt with classic fit and breathable fabric.",
  price: 29.99,
  stock: 140,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?w=500",
    "https://images.unsplash.com/photo-1583743814966-8936f5b8d25e?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 512,
},
{
  name: "Women's Ethnic Kurti",
  description:
    "Stylish ethnic kurti with traditional prints and comfortable fabric.",
  price: 49.99,
  stock: 80,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1542060748-10c28b62716c?w=500",
    "https://images.unsplash.com/photo-1520975682031-ae6b78dfc14b?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 376,
},
{
  name: "Resistance Tube Set",
  description:
    "Set of resistance tubes with handles for full-body workouts.",
  price: 24.99,
  stock: 170,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=500",
    "https://images.unsplash.com/photo-1599058917212-d750089bc07c?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 441,
},
{
  name: "Basketball Indoor/Outdoor",
  description:
    "Durable basketball suitable for both indoor and outdoor play.",
  price: 34.99,
  stock: 95,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=500",
    "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 287,
},
{
  name: "Smart Doorbell Camera",
  description:
    "WiFi doorbell camera with motion detection and two-way audio.",
  price: 149.99,
  stock: 38,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 261,
},
{
  name: "USB-C Hub Multiport",
  description:
    "Multiport USB-C hub with HDMI, USB, and SD card slots.",
  price: 49.99,
  stock: 110,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=500",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 398,
},
{
  name: "Gaming Chair Ergonomic",
  description:
    "Ergonomic gaming chair with adjustable armrests and lumbar support.",
  price: 249.99,
  stock: 22,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1598300058071-7f63d21b5f30?w=500",
    "https://images.unsplash.com/photo-1567016544098-6a41b36e6b30?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 314,
},
{
  name: "Memory Foam Pillow",
  description:
    "Orthopedic memory foam pillow for neck and spine support.",
  price: 39.99,
  stock: 130,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=500",
    "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 487,
},
{
  name: "Noise Cancelling Headphones Pro",
  description:
    "Over-ear noise cancelling headphones with immersive sound.",
  price: 199.99,
  stock: 44,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
  ],
  averageRating: 4.8,
  totalReviews: 721,
},
{
  name: "Tablet Stand Adjustable",
  description:
    "Adjustable stand for tablets and phones, ideal for desks.",
  price: 19.99,
  stock: 200,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500",
    "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 266,
},
{
  name: "Women's Fitness Tracker",
  description:
    "Slim fitness tracker with heart rate and sleep monitoring.",
  price: 79.99,
  stock: 70,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1526403223-2a8d4b59cb27?w=500",
    "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 359,
},
{
  name: "Men's Leather Belt",
  description:
    "Genuine leather belt with classic buckle design.",
  price: 24.99,
  stock: 160,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?w=500",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 281,
},
{
  name: "Women's Sunglasses UV",
  description:
    "Stylish UV-protected sunglasses with lightweight frame.",
  price: 29.99,
  stock: 95,
  category: "Fashion",
  images: [
    "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500",
    "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 337,
},
{
  name: "Kids Bicycle 16 Inch",
  description:
    "Sturdy kids bicycle with training wheels and safety brakes.",
  price: 129.99,
  stock: 28,
  category: "Sports",
  images: [
    "https://images.unsplash.com/photo-1508975553365-38b6f45b4d97?w=500",
    "https://images.unsplash.com/photo-1520974735194-6cfa1f8a7a35?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 214,
},
{
  name: "Electric Shaver",
  description:
    "Rechargeable electric shaver with precision blades.",
  price: 59.99,
  stock: 85,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1600379671861-49f1c4d9ab98?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 302,
},
{
  name: "Desk Cable Organizer",
  description:
    "Silicone cable organizer to keep wires neat and tidy.",
  price: 12.99,
  stock: 240,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1587614382346-acb07edce82d?w=500",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
  ],
  averageRating: 4.3,
  totalReviews: 191,
},
{
  name: "Wall Mounted TV Stand",
  description:
    "Strong wall-mounted TV stand with adjustable viewing angles.",
  price: 99.99,
  stock: 46,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    "https://images.unsplash.com/photo-1572314493295-09c6d5ecb6b5?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 228,
},
{
  name: "Travel Toiletry Bag",
  description:
    "Water-resistant toiletry bag with multiple compartments.",
  price: 24.99,
  stock: 150,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 243,
},
{
  name: "Portable Travel Iron",
  description:
    "Compact travel iron with dual voltage support.",
  price: 49.99,
  stock: 68,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=500",
    "https://images.unsplash.com/photo-1606813909355-bd3c8c4e0ed7?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 167,
},
{
  name: "Inspirational Quote Journal",
  description:
    "Daily journal with inspirational quotes and writing prompts.",
  price: 18.99,
  stock: 180,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500",
  ],
  averageRating: 4.7,
  totalReviews: 529,
},
{
  name: "Advanced Grammar Book",
  description:
    "Comprehensive grammar book for competitive exam preparation.",
  price: 27.99,
  stock: 120,
  category: "Books",
  images: [
    "https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 386,
},
{
  name: "Kids Learning Tablet",
  description:
    "Educational tablet designed for kids with learning apps.",
  price: 119.99,
  stock: 52,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500",
    "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 271,
},
{
  name: "Portable Power Strip",
  description:
    "Extension power strip with USB ports and surge protection.",
  price: 34.99,
  stock: 98,
  category: "Electronics",
  images: [
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?w=500",
    "https://images.unsplash.com/photo-1587574293340-e0011c4c7d42?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 309,
},
{
  name: "Foldable Travel Backpack",
  description:
    "Lightweight foldable backpack ideal for travel and day trips.",
  price: 39.99,
  stock: 125,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1509762774605-f07235a08f1f?w=500",
    "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?w=500",
  ],
  averageRating: 4.6,
  totalReviews: 258,
},
{
  name: "Camping Gas Stove",
  description:
    "Portable camping gas stove suitable for outdoor cooking.",
  price: 59.99,
  stock: 47,
  category: "Travel",
  images: [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=500",
    "https://images.unsplash.com/photo-1523987355523-c7b5b84a7c0f?w=500",
  ],
  averageRating: 4.5,
  totalReviews: 196,
},
{
  name: "Modern Wall Clock",
  description:
    "Minimalist wall clock with silent movement mechanism.",
  price: 44.99,
  stock: 82,
  category: "Home",
  images: [
    "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=500",
    "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500",
  ],
  averageRating: 4.4,
  totalReviews: 211,
},





];

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(ENV.DB_URL);
    console.log("✅ Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("🗑️  Cleared existing products");

    // Insert seed products
    await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${products.length} products`);

    // Display summary
    const categories = [...new Set(products.map((p) => p.category))];
    console.log("\n📊 Seeded Products Summary:");
    console.log(`Total Products: ${products.length}`);
    console.log(`Categories: ${categories.join(", ")}`);

    // Close connection
    await mongoose.connection.close();
    console.log("\n✅ Database seeding completed and connection closed");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();