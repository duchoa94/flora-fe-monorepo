import {
  CreateCustomerRequest,
  CreateCustomerResponse,
  GetCustomerRequest,
  GetCustomerResponse,
  GetCustomersRequest,
  GetCustomersResponse,
  UpdateCustomerRequest,
  UpdateCustomerResponse,
} from '@flora/common/src/types/customer';
import { clientAPI } from 'config/APIConfig';

const CUSTOMERS_URL = '/customers';

class CustomerService {
  createCustomer(req: CreateCustomerRequest) {
    return clientAPI.post<CreateCustomerResponse>(CUSTOMERS_URL, req);
  }

  updateCustomer(customerId: number, req: UpdateCustomerRequest) {
    return clientAPI.put<UpdateCustomerResponse>(
      `${CUSTOMERS_URL}/${customerId}`,
      req
    );
  }

  async getCustomers(req: GetCustomersRequest) {
    return clientAPI.get<GetCustomersResponse>(CUSTOMERS_URL, req);
  }

  async getCustomerById(req: GetCustomerRequest) {
    return clientAPI.get<GetCustomerResponse>(
      `${CUSTOMERS_URL}/${req.customerId}`
    );
  }
}

export const customerService = new CustomerService();
