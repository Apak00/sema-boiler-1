import React from 'react';
import { useDispatch } from 'react-redux';
import { useForm, SubmitHandler, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { IUserLogin } from '@store/ducks/auth/types';
import { fetchLoginRequest } from '@store/ducks/auth/actions';
import { LOGIN_FORM_FIELDS, LOGIN_FORM_VALIDATION_SCHEMA } from '@pages/Login/LoginForm/constants';
import withAuthorization from '@components/containers/hoc/withAuthorization';
import { Box, Button, Grid } from '@material-ui/core';
import { TextInput } from '@components/shared/TextInput';
import { Dispatch } from 'redux';

type FormValueTypes = {
  username: string;
  password: string;
};

type LoginFormPropTypes = {};

const LoginForm: React.FC<LoginFormPropTypes> = () => {
  const form = useForm<FormValueTypes>({
    resolver: yupResolver(LOGIN_FORM_VALIDATION_SCHEMA),
  });

  const dispatch: Dispatch = useDispatch();
  const { errors, touched } = form.formState;

  const onSubmit: SubmitHandler<FormValueTypes> = (params: IUserLogin) => {
    const { username, password } = params;

    dispatch(fetchLoginRequest({ username, password }));
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <Grid container>
          <Grid item xs={12}>
            <Box pb={4}>
              <TextInput
                name={LOGIN_FORM_FIELDS.username}
                label="Username"
                required={true}
                defaultValue="adesso_admin"
                error={errors.username}
                touched={touched.username}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box pb={4}>
              <TextInput
                name={LOGIN_FORM_FIELDS.password}
                label="Password"
                required={true}
                type="password"
                defaultValue="Cosmos123"
                error={errors.password}
                touched={touched.password}
              />
            </Box>
          </Grid>
          <Box ml="auto">
            <Button variant="contained" color="primary" size="small" type="submit">
              Login
            </Button>
          </Box>
        </Grid>
      </form>
    </FormProvider>
  );
};

export default withAuthorization({
  allowedRights: [],
})(LoginForm);
