import express from "express";
import { ItemController } from "../controllers/itemController";

export const itemRouter = express.Router();

itemRouter.post("/", ItemController.create);
