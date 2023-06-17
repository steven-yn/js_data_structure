//
//
// // 16

function power(base: number, exponent: number) {
  let result = 1;

  const run = (base: number, exponent: number) => {
    if (exponent === 0) return result;
    result = result * base;
    return run(base, exponent - 1);
  };

  return run(base, exponent);
}

console.log(power(7, 3));
// Expected output: 343
console.log(power(2, 0));
console.log(power(2, 2));
console.log(power(2, 4));
// console.log(power(4, 0.5));
// Expected output: 2

// console.log(power(7, -2));
// Expected output: 0.02040816326530612
//                  (1/49)

// console.log(power(-7, 0.5));
// Expected output: NaN
