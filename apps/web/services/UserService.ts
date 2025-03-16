import {
  GetUserResponse,
  GetUsersRequest,
  GetUsersResponse,
  UpdateUserRequest,
  UpdateUserResponse,
} from '@flora/common/src/types/user';
import { clientAPI } from 'config/APIConfig';

const LOGIN_URL = '/users/login';
const REGISTER_URL = '/users/register';
const GET_ME_URL = '/users/me';
const GET_USERS_URL = '/users/list';
const GET_USER_URL = '/users';

class UserService {
  async getMe() {
    return clientAPI.get(GET_ME_URL);
  }

  async updateUserById(userId: number, req: UpdateUserRequest) {
    return clientAPI.put<UpdateUserResponse>(`${GET_USERS_URL}/${userId}`, req);
  }

  async getUserById(userId: number) {
    return clientAPI.get<GetUserResponse>(`${GET_USER_URL}/${userId}`);
  }

  async getUserList(req: GetUsersRequest) {
    return clientAPI.get<GetUsersResponse>(GET_USERS_URL, req);
  }
}

export const userService = new UserService();
