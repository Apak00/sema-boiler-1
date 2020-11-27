import StorageHelper from '@adesso-modules/common/dist/storageHelper';
import generateDynamicTypes from '@utils/generateDynamicTypes';

export const STORAGE_IDS = generateDynamicTypes(['currentUserStorage'], 'sema');

export const currentUserStorage = new StorageHelper({ id: STORAGE_IDS.currentUserStorage });
