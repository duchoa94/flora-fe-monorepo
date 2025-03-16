import { z } from 'zod';

// Base Candidate Type
export type Candidate = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  latestPosition?: string;
  latestProject?: string;
  currentPosition?: string;
  yearOfExperience?: number;
  skills?: string[];
  summary?: string;
  resumeUrl?: string;
  resumeFullContent?: string;
  linkedinUrl?: string;
  notes?: string;
  expectedSalary?: number;
  currency?: string;
  createdByUserId: number;
  organizationId?: number;
  status: 'active' | 'archived' | 'deleted';
  createdAt: string;
  updatedAt: string;
};

// Create Candidate Schema and Type
export const createCandidateSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  latestPosition: z.string().optional(),
  latestProject: z.string().optional(),
  skills: z.array(z.string()).optional(),
  summary: z.string().optional(),
  resumeUrl: z.string().url().optional(),
  linkedinUrl: z.string().url().optional(),
  notes: z.string().optional(),
  expectedSalary: z.number().optional(),
  currency: z.string().optional(),
  createdByUserId: z.number(),
  organizationId: z.number().optional(),
});

export type CreateCandidateRequest = z.infer<typeof createCandidateSchema>;

export interface CreateCandidateResponse {
  candidate: Candidate;
}

// Update Candidate Schema and Type
export const updateCandidateSchema = z.object({
  firstName: z.string().min(1, 'First name is required').optional(),
  lastName: z.string().min(1, 'Last name is required').optional(),
  email: z.string().email('Invalid email address').optional(),
  phone: z.string().optional(),
  currentPosition: z.string().optional(),
  yearOfExperience: z.number().optional(),
  skills: z.array(z.string()).optional(),
  resumeFullContent: z.string().optional(),
  resumeUrl: z.string().url().optional(),
  linkedinUrl: z.string().url().optional(),
  notes: z.string().optional(),
  expectedSalary: z.number().optional(),
  currency: z.string().optional(),
  createdByUserId: z.number().optional(),
  organizationId: z.number().optional(),
});

export type UpdateCandidateRequest = z.infer<typeof updateCandidateSchema>;

export interface UpdateCandidateResponse {
  candidate: Candidate;
}

// Get Candidates Request and Response
export interface GetCandidatesRequest {
  q?: string;
  skills?: string[];
  experienceMin?: number;
  experienceMax?: number;
  salaryMin?: number;
  salaryMax?: number;
  status?: 'active' | 'archived' | 'deleted';
  offset?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface GetCandidatesResponse {
  candidates: Candidate[];
  limit: number;
  offset: number;
  totalCandidates: number;
}

// Get Single Candidate Request and Response
export interface GetCandidateRequest {
  candidateId: number;
}

export interface GetCandidateResponse {
  candidate: Candidate;
}

// Archive/Delete Candidate Request and Response
export interface ArchiveCandidateRequest {
  candidateId: number;
}

export interface ArchiveCandidateResponse {
  candidate: Candidate;
}

export interface DeleteCandidateRequest {
  candidateId: number;
}

export interface DeleteCandidateResponse {
  success: boolean;
  message: string;
}

// Bulk Actions
export interface BulkArchiveCandidatesRequest {
  candidateIds: number[];
}

export interface BulkArchiveCandidatesResponse {
  candidates: Candidate[];
  successCount: number;
  failureCount: number;
}

// Search/Filter Schema
export const candidateFilterSchema = z.object({
  skills: z.array(z.string()).optional(),
  experienceRange: z
    .object({
      min: z.number().optional(),
      max: z.number().optional(),
    })
    .optional(),
  salaryRange: z
    .object({
      min: z.number().optional(),
      max: z.number().optional(),
      currency: z.string().optional(),
    })
    .optional(),
  locations: z.array(z.string()).optional(),
  status: z.enum(['active', 'archived', 'deleted']).optional(),
});

export type CandidateFilter = z.infer<typeof candidateFilterSchema>;

// Resume Upload
export interface UploadResumeRequest {
  candidateId: number;
  file: File;
}

export interface UploadResumeResponse {
  resumeUrl: string;
  resumeFullContent?: string;
  candidate: Candidate;
}
