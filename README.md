# Sorting Visualizer

A web-based interactive sorting visualizer demonstrating 10 different sorting algorithms with dynamic input size and speed control.

---

## Features

- Visualizes 10 sorting algorithms:
  - Bubble Sort
  - Selection Sort
  - Insertion Sort
  - Merge Sort
  - Quick Sort
  - Heap Sort
  - Counting Sort
  - Radix Sort
  - Bucket Sort
  - Shell Sort

- Dynamic array size and speed control
- Displays advantages, disadvantages, and time complexity for each algorithm
- Visual and intuitive representation of sorting process
- Easy to use controls for generating arrays and starting the sorting

---

## How to Use

1. Open `index.html` in your web browser.
2. Adjust the array size and speed sliders as needed.
3. Select a sorting algorithm from the dropdown menu.
4. Click **Generate Array** to create a new random array.
5. Click **Sort** to start the visualization.

---

## Project Structure
```
sorting-visualizer/
├── index.html # Main HTML page
├── style.css # Styles for the visualizer
├── script.js # Main JavaScript logic
├── data.js # Algorithm info (advantages, disadvantages, complexity)
├── utils.js # Utility functions (rendering, delays, highlights)
├── algorithms/ # Folder containing sorting algorithm scripts
│ ├── bubble.js
│ ├── selection.js
│ ├── insertion.js
│ ├── merge.js
│ ├── quick.js
│ ├── heap.js
│ ├── counting.js
│ ├── radix.js
│ ├── bucket.js
│ └── shell.js
└── README.md # This readme file
```
---

## Technologies Used

- HTML
- CSS
- JavaScript (ES6 Modules)

---

## Notes

- The visualizer does **not** include pause/resume or real-time timer features
- The time complexity displayed is theoretical, not measured during runtime.

---

## License

This project is open source and free to use.

---

Feel free to contribute or raise issues!

