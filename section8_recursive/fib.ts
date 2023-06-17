// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465
function fib(input) {
  const get = (value) => {
    if (value.length === input) return value[value.length - 1];
    value.push(value[value.length - 2] + value[value.length - 1]);
    return get(value);
  };
  return get([1, 1]);
}
console.log(fib(35));

// function fib(n){
//   if (n <= 2) return 1;
//   return fib(n-1) + fib(n-2);
// }
