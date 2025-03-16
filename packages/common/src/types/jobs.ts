import { z } from 'zod';

export interface Job {
  id: number;
  uuid: string;
  title: string;
  description: string;
  salary: string;
  currency: string;
  skills: string[];
  benefits: string[];
  startDate: Date;
  expirationDate: Date;
  status: string;
  pineconeVectorId: string;
  createdByUserId: number;
  organizationId: number;
  createdAt: Date;
  updatedAt: Date;
}

export const createJobSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Job title is required'),
    description: z.string().min(1, 'Job description is required'),
    salary: z.string().min(1, 'Salary is required'),
    currency: z.string().optional(),
    skills: z.array(z.string()).min(1, 'At least one skill is required'),
    benefits: z.array(z.string()).optional(),
    startDate: z.string().optional(), // Will be converted to Date
    expirationDate: z.string().optional(), // Will be converted to Date
    status: z.enum(['ACTIVE', 'INACTIVE', 'CLOSED']).optional(),
    createdByUserId: z.number().optional(),
    organizationId: z.number().optional(),
  }),
});

export type CreateJobRequest = z.infer<typeof createJobSchema>;

export const getJobsSchema = z.object({
  q: z.string().optional(),
  page: z.number().optional(),
  limit: z.number().optional(),
});

export type GetJobsRequest = z.infer<typeof getJobsSchema>;

export const getJobSchema = z.object({
  jobId: z.number().min(1, 'Job ID is required'),
});

export type GetJobRequest = z.infer<typeof getJobSchema>;

export const updateJobSchema = z.object({
  body: z.object({
    title: z.string().min(1, 'Job title is required').optional(),
    description: z.string().min(1, 'Job description is required').optional(),
    salary: z.string().min(1, 'Salary is required').optional(),
    currency: z.string().optional(),
    skills: z
      .array(z.string())
      .min(1, 'At least one skill is required')
      .optional(),
    benefits: z.array(z.string()).optional(),
    startDate: z.string().optional(), // Will be converted to Date
    expirationDate: z.string().optional(), // Will be converted to Date
    status: z.enum(['ACTIVE', 'INACTIVE', 'CLOSED']).optional(),
    createdByUserId: z.number().optional(),
    organizationId: z.number().optional(),
  }),
});

export type UpdateJobRequest = z.infer<typeof updateJobSchema>;

export interface JobResponse {
  job: Job;
}

export interface GetJobsResponse {
  jobs: Job[];
  total: number;
  page: number;
  limit: number;
}
