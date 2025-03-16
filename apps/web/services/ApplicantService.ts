import {
  ApplicantResponse,
  CreateApplicantRequest,
  GetApplicantRequest,
  GetApplicantsRequest,
  GetApplicantsResponse,
} from '@flora/common/src/types/applicant';
import { clientAPI } from 'config/APIConfig';

const APPLICANTS_URL = '/applicants';

class ApplicantService {
  createApplicant(req: CreateApplicantRequest) {
    return clientAPI.post<ApplicantResponse>(APPLICANTS_URL, req);
  }

  async getApplicants(req: GetApplicantsRequest) {
    return clientAPI.get<GetApplicantsResponse>(APPLICANTS_URL, req);
  }

  async getApplicantById(req: GetApplicantRequest) {
    return clientAPI.get<ApplicantResponse>(
      `${APPLICANTS_URL}/${req.applicantId}`
    );
  }
}

export const applicantService = new ApplicantService();
