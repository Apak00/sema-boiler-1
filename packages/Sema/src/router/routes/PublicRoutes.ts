import RouteBase from '@router/routes/RouteBase';

const Login = new RouteBase({
  name: 'Login',
  path: '/',
  isPublic: true,
});

export default {
  Login,
};
