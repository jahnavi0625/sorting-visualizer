import { sleep, renderArray, markSorted } from '../utils.js';

export default async function countingSort(array, delay) {
  const n = array.length;
  if (n === 0) return;

  const max = Math.max(...array);
  const min = Math.min(...array);
  const range = max - min + 1;

  const count = new Array(range).fill(0);
  const output = new Array(n).fill(0);

  for (let i = 0; i < n; i++) {
    count[array[i] - min]++;
    await sleep(delay / 2);
  }

  for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
    await sleep(delay / 2);
  }
  for (let i = n - 1; i >= 0; i--) {
    output[--count[array[i] - min]] = array[i];
    await sleep(delay / 2);
  }
  for (let i = 0; i < n; i++) {
    array[i] = output[i];
    renderArray(array);
    await sleep(delay);
  }

  markSorted();
}
