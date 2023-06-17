function isSubsequence(input: string, targetValue: string) {
  let pointer = 0;
  let result = false;
  for (const elem of targetValue) {
    if (elem === input[pointer]) {
      pointer += 1;
    }

    if (pointer >= input.length) {
      return (result = true);
    }
  }

  return result;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)
