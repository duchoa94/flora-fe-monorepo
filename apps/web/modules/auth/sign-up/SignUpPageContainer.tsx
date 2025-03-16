import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { Label } from '@workspace/ui/components/label';
import Link from 'next/link';
import { useSignUpLogic } from './SignUpLogicHandler';

export const SignUpPageContainer = () => {
  const { formData, error, isLoading, handleChange, handleSubmit } =
    useSignUpLogic();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link
              href="/auth/sign-in"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign in to your account
            </Link>
          </p>
        </div>

        <form className="mt-4 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="text-sm text-red-700">{error}</div>
            </div>
          )}

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  autoComplete="given-name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  autoComplete="family-name"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300"
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email">Email address</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border-gray-300"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full rounded-md border-gray-300"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="mt-1 block w-full rounded-md border-gray-300"
                value={formData.confirmPassword}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Button
              type="submit"
              disabled={isLoading}
              size={'lg'}
              className="group relative flex w-full justify-center rounded-md py-2 px-3 text-sm font-semibold text-white focus-visible:outline-offset-2"
            >
              {isLoading ? 'Creating account...' : 'Sign up'}
            </Button>
          </div>

          <div className="text-center text-sm text-gray-600">
            By signing up, you agree to our{' '}
            <Link
              href="/terms"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Privacy Policy
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPageContainer;
