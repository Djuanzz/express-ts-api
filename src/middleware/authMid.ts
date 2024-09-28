import { NextFunction, Request, Response } from "express";

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.header("Authorization");
    if (!token) {
      res.status(401).json({
        msg: "Unauthorized",
      });
    }
  } catch (err) {
    next(err);
  }
};
