/**
 * @param obj
 * @param fn
 * Creates an object composed of the properties the given function returns truthy for. The function is invoked with two arguments: (value, key).
 * Use Object.keys(obj) and Array.prototype.filter()to remove the keys for which fn returns a falsy value.
 * Use Array.prototype.reduce() to convert the filtered keys back to an object with the corresponding key-value pairs.
 * --------------------
 * EXAMPLES
 * pickBy({ a: 1, b: '2', c: 3 }, x => typeof x === 'number'); // { 'a': 1, 'c': 3 }
 */

const pickBy = (obj: any, fn: Function) =>
  Object.keys(obj)
    .filter((k: string) => fn(obj[k], k))
    .reduce((acc: any, key: string) => {
      return {
        ...acc,
        [key]: obj[key],
      };
    }, {});

export default pickBy;
