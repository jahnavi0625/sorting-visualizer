import { sleep, renderArray, highlightBars, clearHighlights, markSorted } from '../utils.js';

export default async function bubbleSort(array, delay) {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      highlightBars(j, j + 1, 'comparing');
      await sleep(delay);
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        renderArray(array);
        await sleep(delay);
      }
      clearHighlights(j, j + 1);
    }
  }
  markSorted();
}
