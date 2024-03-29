function factoria_iter(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}

function factorial_recur(num) {
  if (num === 1) return 1;
  return num * factorial_recur(num - 1);
}
