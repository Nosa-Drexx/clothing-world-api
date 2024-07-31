import { Router } from "express";
import { userExist } from "../controllers/user.js";

const router = Router();

router.get("/user-exist/:username", userExist);

export { router };
