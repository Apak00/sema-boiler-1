import { generateDynamicTypes } from '@utils/index';

export const AUTH_ACTION_TYPES = {
  ...generateDynamicTypes(
    ['LOGIN_REQUESTED', 'LOGIN_SUCCESS', 'LOGIN_FAILURE', 'LOGOUT_REQUESTED', 'LOGOUT_SUCCESS', 'LOGOUT_FAILURE'],
    '@@auth/',
  ),
};
