export const algorithmMap = {
  bubble: {
    name: "Bubble Sort",
    advantages: [
      "Simple to implement",
      "Good for nearly sorted arrays"
    ],
    disadvantages: [
      "Very inefficient for large data",
      "Many unnecessary swaps"
    ],
    time: [
      "Best: O(n)",
      "Average: O(n²)",
      "Worst: O(n²)"
    ]
  },
  selection: {
    name: "Selection Sort",
    advantages: [
      "Reduces swaps compared to bubble sort",
      "Easy to understand"
    ],
    disadvantages: [
      "Inefficient for large datasets",
      "Not adaptive (no early exit)"
    ],
    time: [
      "Best: O(n²)",
      "Average: O(n²)",
      "Worst: O(n²)"
    ]
  },
  insertion: {
    name: "Insertion Sort",
    advantages: [
      "Efficient for small or nearly sorted data",
      "In-place and stable"
    ],
    disadvantages: [
      "Inefficient for large unsorted arrays"
    ],
    time: [
      "Best: O(n)",
      "Average: O(n²)",
      "Worst: O(n²)"
    ]
  },
  merge: {
    name: "Merge Sort",
    advantages: [
      "Very efficient and stable",
      "Guaranteed O(n log n) time"
    ],
    disadvantages: [
      "Uses extra memory",
      "Not in-place"
    ],
    time: [
      "Best: O(n log n)",
      "Average: O(n log n)",
      "Worst: O(n log n)"
    ]
  },
  quick: {
    name: "Quick Sort",
    advantages: [
      "Very fast in practice",
      "In-place and efficient"
    ],
    disadvantages: [
      "Worst-case O(n²) time",
      "Not stable"
    ],
    time: [
      "Best: O(n log n)",
      "Average: O(n log n)",
      "Worst: O(n²)"
    ]
  },
  heap: {
    name: "Heap Sort",
    advantages: [
      "Consistent O(n log n) performance",
      "In-place"
    ],
    disadvantages: [
      "Not stable",
      "Slightly slower than quicksort in practice"
    ],
    time: [
      "Best: O(n log n)",
      "Average: O(n log n)",
      "Worst: O(n log n)"
    ]
  },
  counting: {
    name: "Counting Sort",
    advantages: [
      "Linear time for small integer ranges",
      "Very fast and stable"
    ],
    disadvantages: [
      "Only works with integers",
      "Uses extra memory"
    ],
    time: [
      "Best: O(n + k)",
      "Average: O(n + k)",
      "Worst: O(n + k)"
    ]
  },
  radix: {
    name: "Radix Sort",
    advantages: [
      "Linear time for fixed-size keys",
      "Stable"
    ],
    disadvantages: [
      "Only works with integers",
      "Requires counting sort as a subroutine"
    ],
    time: [
      "Best: O(nk)",
      "Average: O(nk)",
      "Worst: O(nk)"
    ]
  },
  bucket: {
    name: "Bucket Sort",
    advantages: [
      "Good for uniformly distributed data",
      "Can be very fast"
    ],
    disadvantages: [
      "Requires uniform distribution",
      "Performance depends on bucket strategy"
    ],
    time: [
      "Best: O(n + k)",
      "Average: O(n + k)",
      "Worst: O(n²)"
    ]
  },
  shell: {
    name: "Shell Sort",
    advantages: [
      "Improved version of insertion sort",
      "Efficient for medium arrays"
    ],
    disadvantages: [
      "Hard to analyze time complexity",
      "Not stable"
    ],
    time: [
      "Best: O(n log n)",
      "Average: O(n^1.5)",
      "Worst: O(n²)"
    ]
  }
};
