/**
 *
 * @param keysMap
 * @param obj
 *
 * Replaces the names of multiple object keys with the values provided.
 * Use Object.keys() in combination with Array.prototype.reduce() and the spread operator (...) to get the object's keys and rename them according to keysMap.
 * ----
 * EXAMPLES
 * const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
 * renameKeys({ name: 'firstName', job: 'passion' }, obj); // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
 */

const renameKeys: any = (keysMap: any, obj: any) =>
  Object.keys(obj).reduce(
    (acc: any, key: string) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] },
    }),
    {},
  );

export default renameKeys;
