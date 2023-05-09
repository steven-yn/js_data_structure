// 두 숫자가 두개이상 같을때 참을 반환하는 빈도수 구하기 문제
function sameFrequency(num1: number, num2: number) {
  let cnt = 0;

  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  let num1Freq: { [key: string]: number } = {};
  let num2Freq: { [key: string]: number } = {};

  for (const str1 of strNum1) {
    if (!num1Freq[str1]) {
      num1Freq[str1] = 1;
    } else {
      num1Freq[str1] = num1Freq[str1] + 1;
    }
  }

  for (const str2 of strNum2) {
    if (!num2Freq[str2]) {
      num2Freq[str2] = 1;
    } else {
      num2Freq[str2] = num2Freq[str2] + 1;
    }
  }

  for (const key in num1Freq) {
    if (key in num2Freq) {
      cnt += 1;
    }
  }

  return cnt >= 2;
}

console.log(sameFrequency(182, 281));

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false
