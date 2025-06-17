const arrayContainer = document.getElementById('array');
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
export function renderArray(array) {
  arrayContainer.innerHTML = '';
  const width = Math.floor(arrayContainer.clientWidth / array.length) - 2;
  array.forEach(value => {
    const bar = document.createElement('div');
    bar.classList.add('bar');
    bar.style.height = `${value}px`;
    bar.style.width = `${width}px`;
    arrayContainer.appendChild(bar);
  });
}
export async function swap(array, i, j, delay) {
  highlightBars(i, j, 'swapping');
  [array[i], array[j]] = [array[j], array[i]];
  renderArray(array);
  await sleep(delay);
  clearHighlights(i, j);
}
export function highlightBars(i, j, type) {
  const bars = document.getElementsByClassName('bar');
  if (bars[i]) bars[i].classList.add(type);
  if (bars[j]) bars[j].classList.add(type);
}
export function clearHighlights(i, j) {
  const bars = document.getElementsByClassName('bar');
  if (bars[i]) bars[i].classList.remove('comparing', 'swapping');
  if (bars[j]) bars[j].classList.remove('comparing', 'swapping');
}
export function markSorted() {
  const bars = document.getElementsByClassName('bar');
  for (let bar of bars) {
    bar.classList.add('sorted');
  }
}
