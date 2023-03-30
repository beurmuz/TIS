# Hash

- key와 연결되어 있는 value를 삽입, 삭제, 탐색하는 알고리즘
- key가 들어오면 랜덤하게 주소값을 생성한 후, 해당 주소값에 key와 value를 저장한다.
- 해시 테이블 내의 값이 많아지면 **해시충돌 현상**이 발생할 수 있다.

## Hash Table

- key와 value를 가지는 자료구조
- 배열에서는 key값에 숫자만 올 수 있지만, Hash Table에서는 문자열도 key가 될 수 있다.
- 시간 복잡도
  - 삽입/삭제/검색: O(1)
- JavaScript에서 Hash Table은 `Object`, `Map`, `Set`이 있다.

  - 보통 Map을 많이 쓰는 듯 하다.

  ```js
  const map = new Map(); // Map {}
  // key, value 쌍 넣기
  map.set(1, "minsik"); // Map { 1 => 'minsik'}
  map.set("age", 30); // Map { 1 => 'minsik', 'age' => 30 }

  // key로 값 가져오기
  map.get(1); // minsik

  // 해당 key가 있는지?
  map.get("age"); // true

  // key로 key, value쌍 삭제
  map.delete("age"); // Map { 1 => 'minsik' }
  map.get("age"); // false

  // map의 길이는?
  map.size(); // 1

  // hash를 탐색하는 방법 1 - key, value 둘다
  for (let [key, value] of map) {
    console.log(key, value);
  }

  // hash를 탐색하는 방법 2 - key만
  for (let key of map.keys()) {
    console.log(key);
  }

  // hash를 탐색하는 방법 3 - value만
  for (let value of map.values()) {
    console.log(value);
  }
  ```

## 🌈 직접 구현해보는 Hash Table

```js
class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentTuple = this.data[address];
    if (currentTuple) {
      for (let i = 0; i < currentTuple.length; i++) {
        if (currentTuple[i][0] === key) return currentTuple[i][1];
      }
    }
    return undefined;
  }

  keys() {
    const keysArr = [];
    for (let i = 0; i < this.data.length; i++) {
      const current = this.data[i];
      if (current) {
        keysArr.push(current[0][0]);
        // for (let j = 0; j < current.length; j++) {
        //   keysArr.push(current[j][0]);
        // }
      }
    }
    return keysArr;
  }

  values() {
    const valuesArr = [];
    for (let i = 0; i < this.data.length; i++) {
      const current = this.data[i];
      if (current) {
        valuesArr.push(current[0][1]);
        // for (let j = 0; j < current.length; j++) {
        //   valuesArr.push(current[j][1]);
        // }
      }
    }
    return valuesArr;
  }
}

const hashtable = new HashTable(20);

hashtable.set("사과", 1000);
hashtable.set("참외", 2700);
hashtable.set("오렌지", 1500);
console.log(hashtable);

console.log(hashtable.get("오렌지"));
console.log(hashtable.keys());
console.log(hashtable.values());
```
