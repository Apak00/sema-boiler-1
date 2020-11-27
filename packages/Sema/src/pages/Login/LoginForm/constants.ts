import { object, string } from 'yup';
import { generateDynamicTypes } from '@utils/index';

export const LOGIN_FORM_FIELDS = generateDynamicTypes(['username', 'password']);

export const LOGIN_FORM_VALIDATION_SCHEMA = object().shape({
  [LOGIN_FORM_FIELDS.username]: string().required(),
  [LOGIN_FORM_FIELDS.password]: string().required(),
});
