import { sleep, renderArray, highlightBars, clearHighlights, markSorted } from '../utils.js';

export default async function mergeSort(array, delay) {
  await mergeSortHelper(array, 0, array.length - 1, delay);
  markSorted();
}

async function mergeSortHelper(arr, start, end, delay) {
  if (start >= end) return;

  const mid = Math.floor((start + end) / 2);
  await mergeSortHelper(arr, start, mid, delay);
  await mergeSortHelper(arr, mid + 1, end, delay);
  await merge(arr, start, mid, end, delay);
}

async function merge(arr, start, mid, end, delay) {
  let left = arr.slice(start, mid + 1);
  let right = arr.slice(mid + 1, end + 1);

  let i = 0, j = 0, k = start;

  while (i < left.length && j < right.length) {
    highlightBars(k, k, 'comparing');
    await sleep(delay);

    if (left[i] <= right[j]) {
      arr[k] = left[i];
      i++;
    } else {
      arr[k] = right[j];
      j++;
    }

    renderArray(arr);
    await sleep(delay);
    clearHighlights(k, k);
    k++;
  }

  while (i < left.length) {
    arr[k] = left[i];
    i++;
    k++;
    renderArray(arr);
    await sleep(delay);
  }

  while (j < right.length) {
    arr[k] = right[j];
    j++;
    k++;
    renderArray(arr);
    await sleep(delay);
  }
}
