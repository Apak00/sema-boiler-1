import type { IMetaAction } from '@store/ducks/types';

export interface IUserRaw {
  readonly username?: string;
  readonly email?: string;
  readonly token?: string;
  readonly rights?: string[];
}

export interface IUserLogin {
  username: string;
  password: string;
}

export interface IUserState {
  readonly user: IUserRaw;
}

export interface IDispatchToProps {
  fetchUser: () => IMetaAction;
}
