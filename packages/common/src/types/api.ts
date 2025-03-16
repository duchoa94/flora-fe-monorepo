import { z } from 'zod';

export const PaginationSchema = z.object({
  page: z.number().int().min(1).default(1),
  limit: z.number().int().min(1).max(100).default(10),
  total: z.number().int().min(0),
  totalPages: z.number().int().min(0),
});

export type Pagination = z.infer<typeof PaginationSchema>;

export interface ApiResponse<T> {
  data: T;
  message?: string;
  status: 'success' | 'error';
}

export interface PaginatedApiResponse<T> extends ApiResponse<T[]> {
  pagination: Pagination;
}

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
}
