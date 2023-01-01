// 주어지는 값에서 합계가 0인 첫번째 페어
// 한 숫자를 가져와 다른 숫자에 더하면 0 이되는 쌍을 찾는 함수를 작성하라

// 단순한 해결책 : 중첩 for 루프를 이용한 해결
// 이 방법의 빅오는 O(n^2) 이다.
const sumZeroNaive = (arr: number[]) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
};

console.log(sumZeroNaive([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
