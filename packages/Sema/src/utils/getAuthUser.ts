import { IUserRaw } from '@store/ducks/auth/types';
import { currentUserStorage } from '@utils/storage';

const getAuthUser: () => IUserRaw | null = ()  => {
  if (currentUserStorage) {
    return currentUserStorage.get(() => null);
  }
  return null;
};

export default getAuthUser;