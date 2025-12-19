import { Router } from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getProductById, getProducts } from "../controllers/product.controller.js";

const router = Router();

router.get("/",protectRoute,getProducts);
router.get("/:id", protectRoute, getProductById);


export default router;

