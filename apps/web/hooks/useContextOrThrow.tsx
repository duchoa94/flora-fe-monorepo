import { Context, useContext } from 'react';

export default function useContextOrThrow<T>(context: Context<T>): NonNullable<T> {
  const result = useContext(context);
  if (!result) {
    throw new Error('Context must be provided.');
  }
  return result;
}