// SAMPLE INPUT / OUTPUT
const isOdd = (val) => val % 2 !== 0;

// someRecursive([1,2,3,4], isOdd) // true
// someRecursive([4,6,8,9], isOdd) // true
// someRecursive([4,6,8], isOdd) // false
// someRecursive([4,6,8], val => val > 10); // false

function someRecursive(list: number[], callback: (val: number) => boolean) {
  if (list.length <= 1) return callback(list[0]);
  return callback(list[0]) || someRecursive(list.slice(1), callback);
}

console.log(someRecursive([4, 6, 8, 9], isOdd));
