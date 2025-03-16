import {
  CreateUserRequest,
  CreateUserResponse,
  LoginRequest,
  LoginResponse,
} from '@flora/common/src/types/user';
import { clientAPI } from 'config/APIConfig';

const LOGIN_URL = '/users/login';
const REGISTER_URL = '/users/register';
const LOGOUT_URL = '/users/logout';
const FORGOT_PASSWORD_URL = '/users/forgot-password';
const RESET_PASSWORD_URL = '/users/reset-password';

class AuthService {
  async login(req: LoginRequest) {
    return clientAPI.post<LoginResponse>(LOGIN_URL, req);
  }

  async register(req: CreateUserRequest) {
    return clientAPI.post<CreateUserResponse>(REGISTER_URL, req);
  }
}

export const authService = new AuthService();
