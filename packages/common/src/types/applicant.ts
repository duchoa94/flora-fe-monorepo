import { z } from 'zod';

// Applicant Status Type
export const ApplicantStatus = {
  APPLIED: 'APPLIED',
  REVIEWING: 'REVIEWING',
  INTERVIEWING: 'INTERVIEWING',
  HIRED: 'HIRED',
  REJECTED: 'REJECTED',
} as const;

export type ApplicantStatus =
  (typeof ApplicantStatus)[keyof typeof ApplicantStatus];

export type Applicant = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetter?: string;
  description?: string;
  jobId: number;
  candidateId?: number;
  organizationId?: number;
  status: ApplicantStatus;
  createdAt: string;
  updatedAt: string;
};

// Create Applicant Schema and Type
export const createApplicantSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(1, 'Phone number is required'),
  resumeUrl: z.string().url('Invalid resume URL'),
  coverLetter: z.string().optional(),
  description: z.string().optional(),
  jobId: z.number(),
  candidateId: z.number().optional(),
  organizationId: z.number().optional(),
});

export type CreateApplicantRequest = z.infer<typeof createApplicantSchema>;

export interface CreateApplicantResponse {
  applicant: Applicant;
}

// Update Applicant Schema and Type
export const updateApplicantSchema = z.object({
  coverLetter: z.string().optional(),
  description: z.string().optional(),
  candidateId: z.number().optional(),
  jobId: z.number().optional(),
  organizationId: z.number().optional(),
  status: z
    .enum(['APPLIED', 'REVIEWING', 'INTERVIEWING', 'HIRED', 'REJECTED'])
    .optional(),
});

export type UpdateApplicantRequest = z.infer<typeof updateApplicantSchema>;

export interface UpdateApplicantResponse {
  applicant: Applicant;
}

// Get Applicants Request and Response
export interface GetApplicantsRequest {
  q?: string;
  jobId?: number;
  status?: ApplicantStatus;
  organizationId?: number;
  offset?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
  fromDate?: string;
  toDate?: string;
}

export interface GetApplicantsResponse {
  applicants: Applicant[];
  limit: number;
  offset: number;
  totalApplicants: number;
}

// Get Single Applicant Request and Response
export interface GetApplicantRequest {
  applicantId: number;
}

export interface ApplicantResponse {
  applicant: Applicant;
}

// Change Status Request and Response
export interface ChangeApplicantStatusRequest {
  applicantId: number;
  status: ApplicantStatus;
  note?: string;
}

export interface ChangeApplicantStatusResponse {
  applicant: Applicant;
  statusHistory: ApplicantStatusHistory[];
}

// Status History Type
export type ApplicantStatusHistory = {
  id: number;
  applicantId: number;
  status: ApplicantStatus;
  note?: string;
  createdByUserId: number;
  createdAt: string;
};

// Search/Filter Schema
export const applicantFilterSchema = z.object({
  jobIds: z.array(z.number()).optional(),
  statuses: z
    .array(
      z.enum(['APPLIED', 'REVIEWING', 'INTERVIEWING', 'HIRED', 'REJECTED'])
    )
    .optional(),
  dateRange: z
    .object({
      from: z.string().optional(),
      to: z.string().optional(),
    })
    .optional(),
  organizationId: z.number().optional(),
});

export type ApplicantFilter = z.infer<typeof applicantFilterSchema>;

// Statistics
export interface ApplicantStatisticsRequest {
  jobId?: number;
  organizationId?: number;
  fromDate?: string;
  toDate?: string;
}

export interface ApplicantStatistics {
  total: number;
  byStatus: Record<ApplicantStatus, number>;
  byJob: Array<{
    jobId: number;
    jobTitle: string;
    count: number;
  }>;
  conversionRate: {
    applied: number;
    interviewed: number;
    hired: number;
  };
  timeToHire: {
    average: number;
    min: number;
    max: number;
  };
}

export interface ApplicantStatisticsResponse {
  statistics: ApplicantStatistics;
}

// Notes and Comments
export type ApplicantNote = {
  id: number;
  applicantId: number;
  content: string;
  createdByUserId: number;
  createdAt: string;
  updatedAt: string;
};

export interface AddApplicantNoteRequest {
  applicantId: number;
  content: string;
}

export interface AddApplicantNoteResponse {
  note: ApplicantNote;
}

// Resume Upload
export interface UpdateApplicantResumeRequest {
  applicantId: number;
  file: File;
}

export interface UpdateApplicantResumeResponse {
  applicant: Applicant;
  resumeUrl: string;
}
