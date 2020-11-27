/**
 *
 * @param arr
 * @param fn
 * Groups the elements of an array based on the given function and returns the count of elements in each group.
 * Use Array.prototype.map() to map the values of an array to a function or property name.
 * Use Array.prototype.reduce() to create an object, where the keys are produced from the mapped results.
 * ----------
 * EXAMPLES
 * countBy([6.1, 4.2, 6.3], Math.floor); // {4: 1, 6: 2}
 * countBy(['one', 'two', 'three'], 'length'); // {3: 2, 5: 1}
 * countBy([{ count: 5 }, { count: 10 }, { count: 5 }], x => x.count) // {5: 2, 10: 1}
 */

const countBy = (arr: any, fn: Function) =>
  arr.map(typeof fn === 'function' ? fn : (val: any) => val[fn]).reduce((acc: any, val: any) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

export default countBy;
