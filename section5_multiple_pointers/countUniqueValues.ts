const sample_1 = [1, 1, 1, 1, 1, 2]; // 2
const sample_2 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]; // 7
const sample_3 = []; // 0
const sample_4 = [-2, -1, -1, 0, 1]; // 4

// 정렬된 숫자 배열을 전달하면 고유한 값의 개수를 반환하도록
// 음수도 가능

const countUniqueValues = (input: number[]) => {
  let i = 0;
  let j = 1;

  if (input.length === 0) return 0;

  input.forEach((_, idx) => {
    if (j > idx) return;

    if (input[i] !== input[j]) {
      input[i + 1] = input[j];
      i += 1;
    }

    j += 1;
  });

  return input.slice(0, i + 1).length;
};

console.log(countUniqueValues(sample_2));
