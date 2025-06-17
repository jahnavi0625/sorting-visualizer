import { algorithmMap } from './data.js';
import { sleep, renderArray, highlightBars, clearHighlights } from './utils.js';
let array = [];
let arraySize = 30;
let delay = 50;
const arrayContainer = document.getElementById('array');
const sizeSlider = document.getElementById('arraySize');
const speedSlider = document.getElementById('speed');
const algorithmSelect = document.getElementById('algorithm');
sizeSlider.addEventListener('input', () => {
  arraySize = parseInt(sizeSlider.value);
  generateArray();
});
speedSlider.addEventListener('input', () => {
  delay = 105 - parseInt(speedSlider.value);
});
algorithmSelect.addEventListener('change', () => {
  clearInfo();
});
export function generateArray() {
  array = Array.from({ length: arraySize }, () => Math.floor(Math.random() * 300) + 10);
  renderArray(array);
  clearInfo();
}
window.generateArray = generateArray;
export async function startSort() {
  const selected = algorithmSelect.value;
  const sortFunction = await import(`./algorithms/${selected}.js`).then(mod => mod.default);
  await sortFunction(array, delay);
}
window.startSort = startSort;
function clearInfo() {
  const info = algorithmMap[algorithmSelect.value];
  if (!info) return;
  document.getElementById('advantages').innerHTML = `
    <h3>✅ Advantages</h3>
    <ul>${info.advantages.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
  document.getElementById('disadvantages').innerHTML = `
    <h3>❌ Disadvantages</h3>
    <ul>${info.disadvantages.map(item => `<li>${item}</li>`).join('')}</ul>
  `;
  document.getElementById('complexity').innerHTML = `
    <h3>⏱️ Time Complexity</h3>
    <ul>${info.time.map(t => `<li>${t}</li>`).join('')}</ul>
  `;
}
function addListItem(id, text) {
  const li = document.createElement('li');
  li.textContent = text;
  document.getElementById(id).appendChild(li);
}
generateArray();
