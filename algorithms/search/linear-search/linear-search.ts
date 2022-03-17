function linearSearch<T>(haystack: T[], needle: T): string | null {
  let iterations = 0;
  for (let i = 0; i < haystack.length; i++) {
    iterations += 1;
    if (haystack[i] === needle) {
      return `Found ${needle} with iterations: ${iterations}`;
    }
  }

  return null;
}

// const arr = [1, 10, 5, 6, 11, 1234, 1231, 2, 3, 9, 90, 622, 2727];
// console.log(linearSearch(arr, 5));
