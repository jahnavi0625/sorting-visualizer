import { sleep, renderArray, highlightBars, clearHighlights, markSorted } from '../utils.js';

export default async function insertionSort(array, delay) {
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let key = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > key) {
      highlightBars(j, j + 1, 'comparing');
      array[j + 1] = array[j];
      renderArray(array);
      await sleep(delay);
      clearHighlights(j, j + 1);
      j--;
    }

    array[j + 1] = key;
    renderArray(array);
    await sleep(delay);
  }

  markSorted();
}
