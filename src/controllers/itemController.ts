import { Request, Response } from "express";

export const ItemController = {
  async create(req: Request, res: Response) {
    try {
      res.status(200).json({
        msg: "Item berhasil ditambahkan",
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({
        msg: "Internal Server Error",
      });
    }
  },
};
