// 첫번째 배열에 루프를 적용해 두번째 배열의 하위 루프에서 각 값을 확인하는 대신
// 각 배열에 한번씩 개별적으로 루프를 적용한다

const same = (arr1: number[], arr2: number[]) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let freqCnt1 = {};
  let freqCnt2 = {};

  for (let val of arr1) {
    freqCnt1[val] = (freqCnt1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCnt2[val] = (freqCnt2[val] || 0) + 1;
  }

  // freqCnt1 = { '1': 1, '2': 2, '3': 1 }
  // freqCnt2 = { '1': 1, '4': 2, '9': 1 }

  for (let key in freqCnt1) {
    // freqCnt1['2'] 의 제곱 '4' 가 freqCnt2 에 존재 하지 않는가?
    if (!(Number(key) ** 2 in freqCnt2)) {
      return false;
    }

    // freqCnt2[2] 의 제곱 4 의 value 가 freqCnt1[2] 의 value 와 같은가?
    if (freqCnt2[Number(key) ** 2] !== freqCnt1[key]) {
      return false;
    }
  }

  return true;
};

console.log(same([1, 2, 3, 2], [9, 1, 4, 4])); // true
