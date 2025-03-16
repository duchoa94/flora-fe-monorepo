export interface BaseResponse<T> {
    status: boolean;
    data?: T;
    error?: {
        code: number;
        message: string;
    };
}