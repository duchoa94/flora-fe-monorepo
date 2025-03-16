import { authService } from '@/services/AuthService';
import { RegisterRequest } from '@flora/common/src/types/user';
import router from 'next/router';
import { useState } from 'react';

export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function useSignUpLogic() {
  const [formData, setFormData] = useState<SignUpFormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
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

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    if (formData.password.length < 8) {
      setError('Password must be at least 8 characters long');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    setError(null);

    try {
      const registerRequest: RegisterRequest = {
        email: formData.email,
        password: formData.password,
        name: `${formData.firstName} ${formData.lastName}`,
      };

      const response = await authService.register(registerRequest);

      if (response?.status && response.data) {
        // Store token in localStorage
        localStorage.setItem('token', response.data.user.token);
        // Redirect to dashboard or home page
        router.push('/dashboard');
      } else {
        setError(
          response?.error?.message || 'Registration failed. Please try again.'
        );
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
