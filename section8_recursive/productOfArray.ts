// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(input: number[]) {
  if (!input.length) return 1;

  return input[0] * productOfArray(input.slice(1));
}

console.log(productOfArray([1, 2, 3, 10]), 'productOfArray([1,2,3])');
