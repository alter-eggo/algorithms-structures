export function bubbleSort(array: number[]): number[] {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[i]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }

  return array;
}

// console.log(bubbleSort([5, 5, 6, 10, 14, 1, 50, 100, 1121, 4, 5]));
