import { axiosInstance, setBaseUrl } from '../api/APIConfig';
import { BaseResponse } from '../types/base-response';
import { handleResponseData, handleResponseError } from '../utils/errors';

class ClientAPI {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    setBaseUrl(baseUrl);
  }

  async get<T>(url: string, options?: any): Promise<BaseResponse<T>> {
    try {
      const response = await axiosInstance.get(url, { params: options });
      return handleResponseData(response);
    } catch (error) {
      return handleResponseError(error);
    }
  }

  async post<T>(
    url: string,
    data: any,
    options?: any
  ): Promise<BaseResponse<T>> {
    try {
      const response = await axiosInstance.post(url, data, options);
      return handleResponseData(response);
    } catch (error) {
      return handleResponseError(error);
    }
  }

  async put<T>(
    url: string,
    data: any,
    options?: any
  ): Promise<BaseResponse<T>> {
    try {
      const response = await axiosInstance.put(url, data, options);
      return handleResponseData(response);
    } catch (error) {
      return handleResponseError(error);
    }
  }

  async delete<T>(url: string, options?: any): Promise<BaseResponse<T>> {
    try {
      const response = await axiosInstance.delete(url, options);
      return handleResponseData(response);
    } catch (error) {
      return handleResponseError(error);
    }
  }
}

export default ClientAPI;
