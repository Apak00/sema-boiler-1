/* eslint-disable */
type CREATETYPE<K extends string, NS extends string> = `${NS}${K}`;

/**
 * @description
 * Generates action names with intellisence support
 * @param keys
 * @param namespace
 * @examples
 * generateDynamicTypes([ 'USER_REQUESTED', 'USER_SUCCESS', 'USER_FAILURE'], 'user'),
 * generateDynamicTypes([ 'USER_REQUESTED', 'USER_SUCCESS', 'USER_FAILURE']),
 */
function generateDynamicTypes<T extends string, NS extends string>(keys: T[], namespace?: NS): {[K in T] : CREATETYPE<K,NS>} {
  
  return keys.reduce((res, key) => {
    res[key] = `${namespace || ''}${key}`;
    return res;
  }, Object.create(null));

}

export default generateDynamicTypes;