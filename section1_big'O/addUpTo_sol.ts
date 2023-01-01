// 이 방법은 시간 복잡도를 고려한 유명한 솔루션이다.

const addUpToSol = (n: number) => {
  return (n * (n + 1)) / 2;
};

console.log(addUpToSol(1000000000)); // 0.511 sec
