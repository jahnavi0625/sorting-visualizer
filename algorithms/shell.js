import { sleep, renderArray, highlightBars, clearHighlights, markSorted } from '../utils.js';
export default async function shellSort(array, delay) {
  const n = array.length;
  for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < n; i++) {
      let temp = array[i];
      let j = i;

      while (j >= gap && array[j - gap] > temp) {
        highlightBars(j, j - gap, 'comparing');
        array[j] = array[j - gap];
        renderArray(array);
        await sleep(delay);
        clearHighlights(j, j - gap);
        j -= gap;
      }

      array[j] = temp;
      renderArray(array);
      await sleep(delay);
    }
  }

  markSorted();
}
