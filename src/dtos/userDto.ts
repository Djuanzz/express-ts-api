import { User } from "@prisma/client";

export type UserResponse = {};

export type UserRegisterRequest = {
  username: string;
  email: string;
  password: string;
};

export type UserLoginRequest = {
  email: string;
  password: string;
};

export function toUserResponse(user: User): UserResponse {
  return {
    email: user.email,
    username: user.username,
  };
}
