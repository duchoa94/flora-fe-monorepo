import { AxiosError, AxiosResponse } from 'axios';

export function handleResponseError(e: unknown) {
  if (e instanceof AxiosError) {
    const errorResponse = e.response;
    return {
      status: false,
      error: {
        code: errorResponse?.status || 500,
        message: errorResponse?.data?.error?.message || 'Unknown error',
      },
    };
  }

  return { status: false, error: { code: 500, message: JSON.stringify(e) } };
}

export function handleResponseData(e: AxiosResponse) {
  if (!(e instanceof AxiosError) && e.data) {
    return e.data;
  }

  return { status: false, error: { code: 400, message: JSON.stringify(e) } };
}
