import type { IMetaAction } from '@store/ducks/types';

export interface IMessagesRaw {
  id: number | string;
  title?: string;
  description: string;
  severity?: 'error' | 'info' | 'success' | 'warning';
}

export interface IMessagesState {}

export interface IDispatchToProps {
  fetchMessage: () => IMetaAction;
}
