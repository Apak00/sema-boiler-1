/**
 * @param a
 * @param b
 * Performs a deep comparison between two values to determine if they are equivalent.
 * Check if the two values are identical, if they are both Date objects with the same time, using Date.getTime() or if they are both non-object values with an equivalent value (strict comparison).
 * Check if only one value is null or undefined or if their prototypes differ.
 * If none of the above conditions are met, use Object.keys() to check if both values have the same number of keys, then use Array.prototype.every() to check
 * if every key in the first value exists in the second one and if they are equivalent by calling this method recursively.
 * ---------
 * EXAMPLES
 * equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }); // true
 * equals([1, 2, 3], { 0: 1, 1: 2, 2: 3 }); // true
 */

const isEqual: (a: any, b: any) => boolean = (a: any, b: any) => {
  if (a === b) return true;
  if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
  if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
  if (a.prototype !== b.prototype) return false;
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every(k => isEqual(a[k], b[k]));
};

export default isEqual;
