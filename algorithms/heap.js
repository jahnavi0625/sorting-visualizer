import { sleep, renderArray, highlightBars, clearHighlights, markSorted } from '../utils.js';

export default async function heapSort(array, delay) {
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(array, n, i, delay);
  }

  for (let i = n - 1; i > 0; i--) {
    [array[0], array[i]] = [array[i], array[0]];
    renderArray(array);
    await sleep(delay);
    await heapify(array, i, 0, delay);
  }

  markSorted();
}

async function heapify(arr, n, i, delay) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n && arr[left] > arr[largest]) {
    largest = left;
  }

  if (right < n && arr[right] > arr[largest]) {
    largest = right;
  }

  if (largest !== i) {
    highlightBars(i, largest, 'comparing');
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    renderArray(arr);
    await sleep(delay);
    clearHighlights(i, largest);
    await heapify(arr, n, largest, delay);
  }
}
