// 코드 실행에 걸리는 시간을 측정 하기위한 예제
// 숫자 n 이 주어질때, 0 ~ n 까지 모든 수를 더하는 알고리즘을 작성하라
// 아래는 순진한 방법이다.

const addUpToNaive = (n: number) => {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

console.log(addUpToNaive(1000000000)); // 1.559 sec
