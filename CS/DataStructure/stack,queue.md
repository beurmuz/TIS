# 스택과 큐
- 스택과 큐는 `삽입(push)`와 `삭제(pop)`으로 구성됨
- 스택, 큐를 사용할 땐 오버플로우와 언더플로우를 고려해야함
## Overflow (오버플로우)
- 특정 자료구조가 수용할 수 있는 저장 공간이 꽉 찬 상태에서 삽입 연산을 수행할 때 발생

## Underflow (언더플로우)
- 특정 자료구조에 데이터가 들어있지 않은 상태에서 삭제 연산을 수행할 때 발생

# Stack (스택)
- FILO (First In Last Out) or LIFO (Last In First Out)
- 입구, 출구가 동일하며 나중에 들어온 값이 가장 먼저 나감
- JavaScript로 코드 구현 시 `Array.push(element)`와 `Array.pop()`을 이용해 쉽게 구현할 수 있음

```js
let stack = [];

// 스택에 값 삽입
stack.push(1); // 1
stack.push(2); // 1, 2
stack.push(3); // 1, 2, 3

// 스택에 있는 값 제거
stack.pop(); // 1, 2

console.log(stack); // 1, 2
```

# Queue (큐)
- FIFO (First In First Out) 
- 입구와 출구가 뚫린 터널로, 가장 먼저 들어온 값이 가장 먼저 나감
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