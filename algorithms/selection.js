import { sleep, renderArray, highlightBars, clearHighlights, markSorted } from '../utils.js';

export default async function selectionSort(array, delay) {
  const n = array.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
      highlightBars(minIndex, j, 'comparing');
      await sleep(delay);
      if (array[j] < array[minIndex]) {
        clearHighlights(minIndex, j);
        minIndex = j;
      }
      clearHighlights(minIndex, j);
    }

    if (minIndex !== i) {
      [array[i], array[minIndex]] = [array[minIndex], array[i]];
      renderArray(array);
      await sleep(delay);
    }
  }

  markSorted();
}
