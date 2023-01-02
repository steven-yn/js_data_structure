// 객체가 어떻게 작동하고 저장되는가
// 컴퓨터는 그냥 firstName 이라고 적힌 메모리 공간을 다시 접근할수 있는것은 아님.
// 객체 안에 어떤 정보를 객체안에다가 저장할때 상수시간 안에 저장할수 있음.
// 원하는 내용을 상수 시간안에 불러올 수도 있음.
// 어떤 값을 상수 시간안에 수정할 수도 있지만, 그게 결국 어떤 값을 불러오는 작업과 똑같음.
// 불러와서 바꾸기만 한다.

// 이러한 작업들은 매우 빠르게 진행된다. 정렬이 되어있지 않다는점도 한몫한다
// 객체에 시작과 끝은 없다. 어디에 새로운 객체를 입력하든지 상관없다
// 단지 key 를 사용해 추가할 뿐이다

// 탐색은 선형 시간이다
// 단순히 key 를 찾는것이 아닌, 어떤 정보가 어떤값에 있는지 찾는거다.
// 전체 아이템에 모든 속성을 확인해야 할수도 있다.

let inst = {
  firstName: "Kelly",
  isInstructor: true,
  favor: [1, 2, 3, 4],
};

console.log(Object.keys(inst)); // [ 'firstName', 'isInstructor', 'favor' ]

// => O(n) 시간. 아이템 갯수가 늘어나면서 각 아이템을 접근해서 이 배열에 추가해야하는 일이 늘어난다.
// 단순히 추가하는 것 말고도 추가 작업은 있지만 중요한것은 O(n) 선형 시간이라는 것이다.

console.log(Object.entries(inst));
// [
//   [ 'firstName', 'Kelly' ],
//   [ 'isInstructor', true ],
//   [ 'favor', [ 1, 2, 3, 4 ] ]
// ]

// entries 는 keys 에 비해 내부적으로 key 와 그값을 컴파일 해야하지만, 이또한 O(n) 으로 축약할수 있다.

console.log(inst.hasOwnProperty("firstName")); // true

// hasOwnProperty 는 상수 시간이다. 단순히 해당 속성이 있는지 없는지만 알려준다
// 이는 접근과 같은 개념으로써 상수시간으로 동작한다
