import type { IMetaAction } from '@store/ducks/types';

export interface ILoaderRaw {}
export interface ILoaderState {}

export interface IDispatchToProps {
  fetchLoader: () => IMetaAction;
}
