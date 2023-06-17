// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
// recursiveRange(10) // 55

function recursiveRange(input: number) {
  if (input === 0) return 0;

  return input + recursiveRange(input - 1);
}

console.log(recursiveRange(10));
