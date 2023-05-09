function areThereDuplicates(...args: number[] | string[]) {
  let freqObj: { [key: string]: number } = {};
  let result = false;

  for (const value of args) {
    if (!freqObj[value]) {
      freqObj[value] = 1;
    } else if (freqObj[value]) {
      return (result = true);
    }
  }

  return result;
}

console.log(areThereDuplicates("a", "b", "c", "a"));

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true
// areThereDuplicates('a', 'b', 'c', 'a') // true
