import { z } from "zod";

export interface Customer {
  id: number;
  name: string;
  slug: string;
  taxCode: string;
  description: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export const createCustomerSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  taxCode: z.string({ message: 'Tax Code is required' }),
  address: z.string({ message: 'Address is required' }),
  description: z.string().optional(),
});

export type CreateCustomerRequest = z.infer<typeof createCustomerSchema>;

export interface CreateCustomerResponse {
  customer: Customer;
}

export interface GetCustomersRequest {
  q?: string;
  offset?: number;
  limit?: number;
}

export interface GetCustomersResponse {
  customers: Customer[];
  limit: number;
  offset: number;
  totalCustomers: number;
}

export interface GetCustomerRequest {
  customerId: number;
}

export interface GetCustomerResponse {
  customer: Customer;
}

export const updateCustomerSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  taxCode: z.string({ message: 'Tax Code is required' }),
  address: z.string({ message: 'Address is required' }),
  description: z.string().optional(),
});

export type UpdateCustomerRequest = z.infer<typeof updateCustomerSchema>;
export interface UpdateCustomerResponse {
  customer: Customer;
}
