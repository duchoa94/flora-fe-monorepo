import { authService } from '@/services/AuthService';
import { LoginRequest } from '@flora/common/src/types/user';
import router from 'next/router';
import { useState } from 'react';

export interface SignInFormData {
  email: string;
  password: string;
}

export function useSignInLogic() {
  const [formData, setFormData] = useState<SignInFormData>({
    email: '',
    password: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const loginRequest: LoginRequest = {
        email: formData.email,
        password: formData.password,
      };

      const response = await authService.login(loginRequest);

      if (response?.status && response.data) {
        // Store token in localStorage
        localStorage.setItem('token', response.data.user.token);
        // Redirect to dashboard or home page
        router.push('/dashboard');
      } else {
        setError(response?.error?.message || 'Login failed. Please try again.');
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    formData,
    error,
    isLoading,
    handleChange,
    handleSubmit,
  };
}
