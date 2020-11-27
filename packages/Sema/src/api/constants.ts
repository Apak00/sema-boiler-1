import { generateDynamicTypes } from '@utils/index';

export const REQUEST_METHODS = generateDynamicTypes([
  'GET',
  'DELETE',
  'HEAD',
  'OPTIONS',
  'POST',
  'PUT',
  'PURGE',
  'LINK',
  'UNLINK',
]);

export const HTTP_STATUSES = {
  UNAUTHORIZED: '401',
  FORBIDDEN: '403',
};
