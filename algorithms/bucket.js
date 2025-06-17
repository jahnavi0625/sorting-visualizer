import { sleep, renderArray, markSorted } from '../utils.js';

export default async function bucketSort(array, delay) {
  const n = array.length;
  if (n <= 0) return;

  let min = Math.min(...array);
  let max = Math.max(...array);
  let bucketCount = Math.floor(Math.sqrt(n));
  let bucketSize = Math.floor((max - min) / bucketCount) + 1;

  let buckets = Array.from({ length: bucketCount }, () => []);
  for (let i = 0; i < n; i++) {
    const bucketIndex = Math.floor((array[i] - min) / bucketSize);
    buckets[bucketIndex].push(array[i]);
    await sleep(delay / 2);
  }
  let index = 0;
  for (let bucket of buckets) {
    bucket.sort((a, b) => a - b);
    for (let val of bucket) {
      array[index++] = val;
      renderArray(array);
      await sleep(delay);
    }
  }

  markSorted();
}
