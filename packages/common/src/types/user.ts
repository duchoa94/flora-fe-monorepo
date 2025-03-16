import { z } from "zod";
import { UserRole } from "./role";

export type User = {
  id: number;
  email: string;
  name: string;
  roles: UserRole[];
  permissionList: string[];
  status: string;
  token: string;
  createdAt: string;
  updatedAt: string;
};

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
}

export type RegisterRequest = {
  email: string;
  password: string;
  name: string;
}

export const createUserSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Email format is invalid' }),
  password: z.string({ message: 'Password is required' }),
  name: z.string({ message: 'Name is required' }),
  roleIds: z.array(z.number()).optional(),
});

export type CreateUserRequest = z.infer<typeof createUserSchema>;

export interface CreateUserResponse {
  user: User;
}

export interface GetUsersRequest {
  q?: string;
  offset?: number;
  limit?: number;
}

export interface GetUsersResponse {
  users: User[];
  limit: number;
  offset: number;
  totalUsers: number;
}

export const updateUserSchema = z.object({
  email: z.string({ required_error: 'Email is required' }).email({ message: 'Email format is invalid' }),
  password: z.string({ message: 'Password is required' }),
  name: z.string({ message: 'Name is required' }),
  roleIds: z.array(z.number()).optional(),
});

export type UpdateUserRequest = z.infer<typeof updateUserSchema>;

export interface UpdateUserResponse {
  user: User;
}

export interface GetUserRequest {
  userId: number;
}

export interface GetUserResponse {
  user: User;
}