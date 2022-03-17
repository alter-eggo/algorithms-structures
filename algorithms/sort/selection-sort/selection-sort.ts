export function selectionSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;

    for (let j = i + 1; j < array.length; j++) {
      // Find new min index
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }

    // Swap
    if (indexMin !== i) {
      [array[i], array[indexMin]] = [array[indexMin], array[i]];
    }
  }

  return array;
}

// const arr = [
//   0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
//   32,
// ];
// console.log(selectionSort(arr));
