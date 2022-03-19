export function quickSort(array: number[]): number[] {
  if (array.length <= 1) {
    return array;
  }

  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let lesser = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue;
    }

    if (array[i] < pivot) {
      lesser.push(pivot);
      continue;
    }

    greater.push(pivot);
  }

  return [...quickSort(lesser), pivot, ...quickSort(greater)];
}

// console.log(quickSort([5, 5, 6, 10, 14, 1, 50, 100, 1121, 4, 5]));
