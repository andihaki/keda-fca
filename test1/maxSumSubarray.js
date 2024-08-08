export function maxSumSubarray(input, maxLength) {
  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first subarray of length maxLength
  for (let i = 0; i < maxLength; i++) {
    currentSum += input[i];
  }

  // Initialize maxSum with the sum of the first subarray
  maxSum = currentSum;

  // Slide the window over the array
  for (let i = maxLength; i < input.length; i++) {
    currentSum += input[i] - input[i - maxLength];
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

// console.log(maxSumSubarray([100, 200, 300, 400], 2)); // 700
// console.log(maxSumSubarray([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
