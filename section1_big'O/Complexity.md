# 시간 복잡도

시간 복잡도란 ? :

- 입력이 커질수록 알고리즘의 실행 속도가 어떻게 바뀌는가

# 공간 복잡도

공간 복잡도란 ? :

- 입력이 커질수록 알고리즘이 얼마나 많은 공간을 차지 하는가
- 공간 복잡도에는 입력 자체의 공간 복잡도와 알고리즘 자체의 공간 복잡도가 있다.

공간 복잡도 또한 빅오 표기법으로 나타낼수 있다.

### 보조 공간 복잡도

- 입력 되는 것을 제외하고 알고리즘 자체가 필요로 하는 공간

우리는 입력값 n 이 커질수록 입력이 커진다고 가정하고, 그 때 알고리즘 자체의 공간 복잡도가 어떻게 되는가를 주목할 것이다.
사실상 여기서 말하는 공간 복잡도는 보조 공간 복잡도를 말하는것이다.

# JS 의 공간 복잡도 규칙

1. 대부분의 원시값 ( 불린, 넘버, undefined, null) 은 모두 상수 공간이다.
   그렇기 때문에 입력의 크기와는 상관없이 숫자가 1이든, 1000이든 모두 상수 공간이라고 여김.
2. 문자열은 O(n) 공간이 필요하다. 문자열의 크기가 클수록 메모리 공간을 많이 차지한다
3. 참조 타입 ( 배열, 객체 ) 도 O(n) 공간이 필요하다. 객체의 키가 많을수록, 배열의 길이가 길수록 많은 공간을 차지함