function countDown(num: number) {
  // 종료 조건이 없었다면, 이함수는 계속해서 음수로 내려가서 무한히 숫자를 console 에 출력했을것이다.
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log(num);
  num--;
  // 매번 다른 입력값으로 자기자신을 호출한다.
  countDown(num);
}
countDown(5); // 5 4 3 2 1 All done!
