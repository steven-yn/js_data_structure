function flatten(input: any[]) {
  // console.log(input);
  const newArr = [...input];
  console.log(newArr, 'newArr');

  const run = (arr: any[]) => {
    if (!arr.length) {
      return [];
    }

    return [arr[0]].concat(run(arr.slice(1)));
  };

  let temp = run(newArr);

  const check = (target: any[]) => {
    for (let i = 0; i < target.length; i++) {
      if (Array.isArray(target[i])) {
        return run(target);
      }
    }
  };

  temp = check(temp);

  return temp;
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten() // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

console.log(flatten([1, [2, [3, 4], [[5]]]]));
