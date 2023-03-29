# 1. 스택 (Stack)

- LIFO (Last In First Out) - 가장 마지막에 들어간 데이터가 가장 먼저 나온다.
- 삽입과 삭제가 동일한 한군데에서 발생한다.
  - 재귀, 웹 브라우저 방문 기록, 데이터를 역추적 할 때 사용
- 시간 복잡도
  - 삽입, 삭제: O(1)
  - 탐색: O(n)
- JavaScript로 코드 구현 시 `Array.push(element)`와 `Array.pop()`을 이용해 쉽게 구현할 수 있음

  ```js
  let stack = []; // 빈 스택 생성

  // 스택에 값 삽입
  stack.push(1); // 1
  stack.push(2); // 1, 2
  stack.push(3); // 1, 2, 3

  // 스택에 있는 값 제거
  stack.pop(); // 1, 2

  console.log(stack); // 1, 2
  ```

## 🌈 직접 구현해보는 Stack

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0; // 아직 아무것도 넣지 않았으니
  }

  // 가장 상단에 있는 노드를 return한다.
  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      // 빈 스택이면
      this.top = newNode; // top과 bottom 모두 nodeNode를 가리킨다.
      this.bottom = newNode;
    } else {
      // 빈 스택이 아닌 경우
      const preNode = this.top; // 일단 직전 상단 값을 저장하고
      this.top = newNode; // top에 새 노드를 저장한다.
      this.top.next = preNode; // top.next에 preNode값을 저장한다.
    }
    this.length++; // 1개를 추가했으니 길이를 늘려준다.
  }

  pop() {
    if (!this.top) {
      // top이 없다는 것은 스택이 비었음을 의미한다.
      return null;
    }
    if (this.top === this.bottom) {
      // 스택에 값이 1개 있는 경우이다.
      this.bottom = null;
    }
    // ✅ 먼말이지?
    const removeNode = this.top;
    this.top = this.top.next;
    this.length--;
    return removeNode;
  }
}

const stack = new Stack(); // 스택 생성
stack.push("1");
stack.push("2");
stack.push("3");
// console.log(stack);
stack.pop();
// stack.pop();
// console.log(stack);
console.log(stack.peek());
```

# 2. 큐 (Queue)

- FIFO (First In First Out), 가장 먼저 들어간 데이터가 가장 먼저 나오는 것
- CPU 작업을 기다리는 프로세스나 스레드 행렬, 네트워크 접속을 기다리는 행렬, 너비 우선 탐색, 캐시 등에 사용됨
- 삽입 및 삭제시 O(1) / 탐색시 O(n)
- `Array.unshift(element)`와 `Array.pop()`을 이용해 구현할 수 있음

  ```js
  let queue = [];
  // 큐에 값 삽입
  queue.unshift(1); // 1
  queue.unshift(2); // 2, 1
  queue.unshift(3); // 3, 2, 1

  // 큐에 있는 값 삭제
  queue.pop(); // 3, 2

  console.log(queue); // 3, 2
  ```

> ✅ 스택, 큐를 사용할 땐 오버플로우와 언더플로우를 고려해야함

### 오버플로우 (Overflow)

- 특정 자료구조가 수용할 수 있는 저장 공간이 꽉찬 상태에서 삽입 연산 수행시 발생함

### 언더플로우 (Underflow)

- 특정 자료구조에 데이터가 들어있지 않은 상태에서 삭제 연산 수행시 발생함
