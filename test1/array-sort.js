const arraySort = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    for (let j = 0; j <= arr.length - i - 1; j++) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const input = [1, 2, 4, 3, 5, 3, 2, 1];
console.log(arraySort(input));
