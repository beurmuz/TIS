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

### 1. 싹다 직접 구현하기

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
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const preNode = this.top;
      this.top = newNode;
      this.top.next = preNode;
    }
    this.length++;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    const removeNode = this.top;
    this.top = this.top.next;
    this.length--;
    return removeNode;
  }
}

const stack = new Stack();
stack.push("1");
stack.push("2");
stack.push("3");
// console.log(stack);
stack.pop();
// stack.pop();
// console.log(stack);
console.log(stack.peek());
```

### 2. 배열 이용하기

```js
class Stack {
  constructor() {
    this.arr = [];
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    this.arr.pop();
  }
}

const stack = new Stack(); // 스택 생성
stack.push("1");
stack.push("2");
stack.push("3");
console.log(stack);
stack.pop();
// stack.pop();
console.log(stack);
console.log(stack.peek());
```

# 2. 큐 (Queue)

- FIFO (First In First Out) - 가장 먼저 들어간 데이터가 가장 먼저 나온다.
- 삽입과 삭제가 서로 다른 한군데에서 발생한다.
  - CPU 스케줄링처럼 순차적으로 진행되어야 하는 경우, 네트워크 접속을 기다리는 경우, 너비 우선 탐색 (BFS), 캐시 등에 사용
- 시간 복잡도
  - 삽입(enqueue)/삭제(dequeue): O(1)
  - 탐색: O(n)
- 맨 앞: front, 맨 뒤: rear
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

## 🌈 직접 구현해보는 Queue

```js
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.tail = null;
    this.length = 0;
  }

  peek() {
    return this.front;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.front = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    if (this.front === this.tail) {
      this.tail = null;
    }
    this.front = this.front.next;
    this.length--;
  }
}

const queue = new Queue();
console.log(queue);
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue);
queue.dequeue();
console.log(queue.peek());
console.log(queue);
```

### 🚨 오버플로우 (Overflow) vs 언더플로우 (Underflow)

스택, 큐를 사용할 때 고려해야한다.

|           |                                                                           |
| :-------: | :------------------------------------------------------------------------ |
| Overflow  | 특정 자료구조가 수용할 수 있는 저장 공간이 꽉찬 상태에서 삽입 연산시 발생 |
| Underflow | 특정 자료구조에 데이터가 들어있지 않은 상태에서 삭제 연산시 발생          |
