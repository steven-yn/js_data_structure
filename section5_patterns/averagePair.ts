// inputList 의 두 쌍중, 입력 받은 avrg 와 같은 평균값을 가진 페어가 있는지 찾는 문제
// 항상 오름차순 정렬, 음수도 있음
function averagePair(inputList: number[], avrg: number) {
  let pointer1 = 0;
  let j = inputList.length - 1;

  let result = false;

  if (inputList.length === 0) {
    return result;
  }

  for (let i = 0; i < inputList.length - 1; i++) {
    if ((inputList[i] + inputList[j]) / 2 === avrg) {
      return (result = true);
    }

    if ((inputList[i] + inputList[j]) / 2 > avrg) {
      j -= 1;
    }

    if ((inputList[i] + inputList[j]) / 2 === avrg) {
      return (result = true);
    }
  }

  return result;
}
console.log(averagePair([1, 2, 3], 2.5));

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false
