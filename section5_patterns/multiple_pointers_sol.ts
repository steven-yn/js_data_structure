// 주어진 값이 오름차순으로 정렬된 숫자 배열이고,
// 어떠한 쌍을 찾는 것 이므로, 다중 포인터 패턴을 적용할수 있다.

const sumZeroSol = (arr: number[]) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];

    if (sum === 0) {
      // 값이 0이되면 페어를 반환
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      // 값이 0 보다 크면, 오른쪽의 포인터를 감소시킴
      right--;
    } else {
      // 값이 0 보다 작으면, 왼쪽의 포인터를 증가시킴

      left++;
    }
  }
};

console.log(sumZeroSol([-4, -3, -2, -1, 0, 1, 2, 5])); // [-2, 2]
