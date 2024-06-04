/* eslint-disable array-callback-return */
export default function hasValuesFromArray(set, array) {
  let value = true;
  array.map((x) => {
    if (!set.has(x)) {
      value = false;
    }
  });

  return value;
}
