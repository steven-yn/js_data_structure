function maxSubarraySum(inputList: number[], slideLength: number) {
  if (inputList.length < slideLength) return null;

  let total = 0;
  for (let i = 0; i < slideLength; i++) {
    total += inputList[i];
  }
  let currentTotal = total;
  for (let i = slideLength; i < inputList.length; i++) {
    currentTotal += inputList[i] - inputList[i - slideLength];
    total = Math.max(total, currentTotal);
  }

  return total;
}

console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null
