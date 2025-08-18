export function maxOrNull(arr) {
  let max = arr[0];
  for (const x of arr) if (x > max) max = x;
  return arr.length ? max : null;
}
