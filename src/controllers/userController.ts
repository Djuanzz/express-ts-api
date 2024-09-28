import { Request, Response, NextFunction } from "express";
import { UserRegisterRequest } from "../dtos/userDto";
import { UserService } from "../services/userService";

export const UserController = {
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({
        msg: "sipsipoke berhasil",
      });
    } catch (err) {
      next(err);
    }
  },

  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const userReq: UserRegisterRequest = req.body as UserRegisterRequest;
      const userRes = await UserService.create(userReq);
      res.status(201).json({
        status: true,
        message: "Register berhasil",
        data: userRes,
      });
    } catch (err) {
      next(err);
    }
  },
};
