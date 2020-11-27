interface IStorageHelper {
  id: string;
  storage: any;
  set: (data: any) => void;
  get: (fallback: any, full: boolean) => any;
  remove: () => void;
  isValid: (time: number) => boolean;
}

interface IStorageItem {
  id: string;
  session?: boolean;
}

class StorageHelper implements IStorageHelper {
  id: string;

  storage: any;

  /**
   * Setup the constructor
   * @param {String} id   The Storage Id
   * @param {Boolean} session   If true use sessionStorage instead of localStorage [optional]
   */
  constructor({ id, session = false }: IStorageItem) {
    this.id = id;
    this.storage = session ? sessionStorage : localStorage;
  }

  /**
   * Save an item to storage
   * @param {Object|Array|String|Number|Boolean} data   The data to save
   */
  set(data: any) {
    this.storage.setItem(
      this.id,
      JSON.stringify({
        timestamp: new Date().getTime(),
        data,
      }),
    );
  }

  /**
   * Get item from storage
   * @param {Object|Array|String|Number|Boolean} fallback   A fallback to use if no data is found [optional]
   * @param {Boolean} full   If true returns full data object otherwise just the user data [optional]
   * @returns {Object|Array|String|Number} storage data
   */
  get(fallback?: any, full?: boolean) {
    const storageData = this.storage.getItem(this.id);
    const data = storageData ? JSON.parse(storageData) : null;
    if (!data && fallback) {
      return fallback || data;
    }

    return full ? data : data.data;
  }

  /**
   * Remove an item from storage
   */
  remove() {
    this.storage.removeItem(this.id);
  }

  /**
   * Check if the data is still valid
   * @param {Number} time   The amount of time data is valid for
   * @returns {Boolean} data validity
   */
  isValid(time: number) {
    const storageData = this.get(null, true);

    if (!storageData) {
      return false;
    }

    const timeDiff = new Date().getTime() - storageData.timestamp;

    return timeDiff >= time;
  }
}

export default StorageHelper;
