import { sleep, renderArray, markSorted } from '../utils.js';

export default async function radixSort(array, delay) {
  const max = Math.max(...array);
  let exp = 1;

  while (Math.floor(max / exp) > 0) {
    await countingSortByDigit(array, exp, delay);
    exp *= 10;
  }

  markSorted();
}

async function countingSortByDigit(arr, exp, delay) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);
  for (let i = 0; i < n; i++) {
    const index = Math.floor(arr[i] / exp) % 10;
    count[index]++;
    await sleep(delay / 3);
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
    await sleep(delay / 4);
  }

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(arr[i] / exp) % 10;
    output[--count[index]] = arr[i];
    await sleep(delay / 4);
  }

  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
    renderArray(arr);
    await sleep(delay);
  }
}
