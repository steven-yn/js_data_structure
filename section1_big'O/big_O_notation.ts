// O(1) : 실행시간에 변화가 없다
const addUpToConstant = (n: number) => {
  return (n * (n + 1)) / 2;
};

// O(n) : n 값이 커질수록 선형적으로 연산이 늘어난다.
const addUpToLinear = (n: number) => {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

// O(n) : 2n 이 아닌 n 임을 기억해야함. 전체적인 그림에서는 선형이다.
const countUpAndDown = (n: number) => {
  // O(n)
  for (let i = 0; i < n; i++) {
    console.log(i);
  }

  // O(n)
  for (let j = n - 1; j >= 0; j--) {
    console.log(j);
  }
};

// O(n^2) : O(n) 안에 O(n) 이 있다!
const printAllPairs = (n: number) => {
  // O(n)
  for (let i = 0; i < n; i++) {
    // O(n)
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
};
