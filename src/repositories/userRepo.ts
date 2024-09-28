import { User } from "@prisma/client";
import { UserRegisterRequest } from "../dtos/userDto";
import { prisma } from "../config/database";

export const UserRepo = {
  async create(user: UserRegisterRequest): Promise<User> {
    return await prisma.user.create({
      data: user,
    });
  },
};
