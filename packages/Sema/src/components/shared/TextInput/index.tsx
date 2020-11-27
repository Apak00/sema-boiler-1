import React from 'react';
import { useFormContext, Controller } from 'react-hook-form';
import TextField from '@material-ui/core/TextField';
import clsx from 'clsx';
import { TextInputProps } from '@components/shared/TextInput/types';
import { useStyles } from './styles';

// for more info & examples:
// 1 -https://material-ui.com/components/text-fields/
// 2- https://dev.to/ammartinwala52/forms-in-react-react-hook-forms-with-material-ui-and-yup-4gfb

export const TextInput = ({
  name,
  label,
  required,
  defaultValue = '',
  value,
  touched,
  error,
  disabled,
  tabIndex,
  ...rest
}: TextInputProps) => {
  const { control } = useFormContext();
  const classes = useStyles();

  const inputProps = {
    className: clsx({
      [classes.dirty]: !disabled && touched,
      [classes.empty]: !disabled && !touched && !!value,
      [classes.error]: !disabled && !!error,
    }),
    tabIndex,
  };

  return (
    <Controller
      as={TextField}
      name={name}
      className={classes.root}
      control={control}
      defaultValue={defaultValue}
      inputProps={inputProps}
      label={label}
      fullWidth={true}
      InputLabelProps={{
        className: required ? 'required-label' : '',
        required: required || false,
      }}
      helperText={error?.message}
      disabled={disabled}
      error={!!error}
      {...rest}
    />
  );
};
