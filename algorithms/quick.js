import { sleep, renderArray, highlightBars, clearHighlights, markSorted } from '../utils.js';

export default async function quickSort(array, delay) {
  await quickSortHelper(array, 0, array.length - 1, delay);
  markSorted();
}

async function quickSortHelper(arr, low, high, delay) {
  if (low < high) {
    const pi = await partition(arr, low, high, delay);
    await quickSortHelper(arr, low, pi - 1, delay);
    await quickSortHelper(arr, pi + 1, high, delay);
  }
}

async function partition(arr, low, high, delay) {
  const pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    highlightBars(j, high, 'comparing');
    await sleep(delay);
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
      renderArray(arr);
      await sleep(delay);
    }
    clearHighlights(j, high);
  }

  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  renderArray(arr);
  await sleep(delay);
  return i + 1;
}
