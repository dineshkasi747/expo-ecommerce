import { Router } from "express";
import { addAddress, addToWishlist, deleteAddress, getAddresses, getWishlist, removeFromWishlist, updateAddress,savePushToken} from "../controllers/user.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getNotifications, markNotificationRead } from "../controllers/user.controller.js";

const router = Router();

router.use(protectRoute);

// address routes
router.post("/addresses", addAddress);
router.get("/addresses", getAddresses);
router.put("/addresses/:addressId", updateAddress);
router.delete("/addresses/:addressId", deleteAddress);

// wishlist routes
router.post("/wishlist", addToWishlist);
router.delete("/wishlist/:productId", removeFromWishlist);
router.get("/wishlist", getWishlist);

router.post("/push-token", savePushToken);

router.get("/notifications", getNotifications);
router.patch("/notifications/:id/read", markNotificationRead);

export default router;