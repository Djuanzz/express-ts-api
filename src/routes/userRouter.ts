import express from "express";
import { UserController } from "../controllers/userController";
export const userRouter = express.Router();

userRouter.post("/register", UserController.create);
