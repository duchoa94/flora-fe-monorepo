import {
  CreateJobRequest,
  GetJobRequest,
  GetJobsRequest,
  GetJobsResponse,
  JobResponse,
} from '@flora/common/src/types/jobs';
import { clientAPI } from 'config/APIConfig';

const JOBS_URL = '/jobs';

class JobService {
  createJob(req: CreateJobRequest) {
    return clientAPI.post<JobResponse>(JOBS_URL, req);
  }

  async getJobs(req: GetJobsRequest) {
    return clientAPI.get<GetJobsResponse>(JOBS_URL, req);
  }

  async getJobById(req: GetJobRequest) {
    return clientAPI.get<JobResponse>(`${JOBS_URL}/${req.jobId}`);
  }
}

export const jobService = new JobService();
