/**
 * return An unique array from the array you send as parameter
 *
 * @param array the array you want to make it unique.
 * @param uniqueObject The unique Object of array you want to remove duplicate by (OPTIONAL).
 *
 * @return An `Array` of the unique array.
 */
export function removeDuplicateFromArray(array: any[], uniqueObject?: any): any[] {
  if (uniqueObject) {
    return array.filter((v, i, a) => a.findIndex(t => (t[uniqueObject] === v[uniqueObject])) === i)
  }
  return Array.from(new Set(array));
}
