import { FieldError } from 'react-hook-form';

export type TextInputProps = {
  name: string;
  type?: string;
  label: string;
  required: boolean;
  defaultValue?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  size?: 'small';
  value?: string;
  touched?: boolean;
  error?: FieldError | undefined;
  disabled?: boolean;
  tabIndex?: number;
};
