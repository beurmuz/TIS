# Iterator Pattern
- iterator(이터레이터)를 사용해 collection의 요소들에 접근하는 디자인 패턴을 의미한다.
- iterator라는 하나의 인터ㅔ이스로 순회가 가능하다.

```js
const mp = new Map();
mp.set('a', 1);
mp.set('b', 2);
mp.set('c', 3);

const st = new Set();
st.add(1);
st.add(2);
st.add(3);

for(let a of mp) {
    console.log(a);
}

for(let b of st) {
    console.log(b);
}

/*
    ['a', 1]
    ['b', 2]
    ['c', 3]
    1
    2
    3
*/
```
- map과 set은 서로 다른 자료구조임에도 for 이터레이터 프로토콜을 통해 순회한다.

### iterator protocol
- 이터러블한 객체들을 순회할때 쓰이는 규칙

### iterable object
- 반복 가능한 객체로 배열을 일반화한 객체