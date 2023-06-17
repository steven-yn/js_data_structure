function factorial(input: number) {
  if (input === 0) return 1;

  return input * factorial(input - 1);
}
