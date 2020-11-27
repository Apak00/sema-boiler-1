import { ISemaServiceError } from '@api/types/service-error';

export const generateErrorMessage = (err: ISemaServiceError | any) => {
  return err?.message || 'An unknown error occured.';
};
