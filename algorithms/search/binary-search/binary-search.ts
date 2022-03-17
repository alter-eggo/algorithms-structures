export function binarySearch<T>(
  haystack: T[],
  needle: T,
  start: number = 0,
  end: number = haystack.length - 1
): number {
  let middle: number;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);

    if (haystack[middle] === needle) {
      return middle;
    }

    if (needle < haystack[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
}

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// console.log(binarySearch(arr, 13));
