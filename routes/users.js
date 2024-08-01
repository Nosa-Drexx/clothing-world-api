import { Router } from "express";
import {
  addProductToCart,
  getCart,
  removeProductFromCart,
  updateProductAmount,
  userExist,
} from "../controllers/user.js";
import { requireLogin } from "../middleware/auth.js";

const router = Router();

router.get("/user-exist/:username", userExist);
router.put("/user/cart/add", requireLogin, addProductToCart);
router.delete("/user/cart/remove", requireLogin, removeProductFromCart);
router.put("/user/cart/update", requireLogin, updateProductAmount);
router.get("/user/cart", requireLogin, getCart);

export { router };
