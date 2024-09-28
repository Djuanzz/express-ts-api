import { NextFunction, Response } from "express";
import {
  toUserResponse,
  UserRegisterRequest,
  UserResponse,
} from "../dtos/userDto";
import { UserRepo } from "../repositories/userRepo";

export const UserService = {
  async create(req: UserRegisterRequest): Promise<UserResponse> {
    const userReq = req;
    const user = await UserRepo.create(userReq);
    return toUserResponse(user);
  },
};
