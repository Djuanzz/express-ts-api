import { Request, Response, NextFunction } from "express";

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
};
