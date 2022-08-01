# Dynamic Programming (DP)
- 큰 문제를 작게 나누어 문제를 해결하는 알고리즘
- 현재의 항을 이전 항에 대한 식(`점화식`)으로 나타내어 문제를 해결함
  - 점화식: 인접한 항들 사이의 관계식
- DP로 해결할 수 있는 대표적인 예로는 **피보나치 수열**이 있음

## 피보나치 수열 예제
- 피보나치 수열은 이전 두 항의 합을 현재의 항으로 설정함

### 점화식
- `Xn = X(n-1) + X(n-2)`

### 코드
```js
function fibonachi(x) {
    if(x === 1 || x === 2) return 1;
    return fibonachi(x-1) + fibonachi(x-2);
}

console.log(fibonachi(3));
```

### 위 연산의 특징
- n이 커질수록 중복되는 연산이 많아지며, 수행 시간이 기하급수적으로 늘어나게 됨
- 즉, 다음과 같은 조건을 만족하게 됨
  > 1. 큰 문제를 작은 문제로 나눌 수 있음
  > 2. 작은 문제에서 구한 정답이 큰 문제를 푸는 과정에서도 등장함

- 이러한 문제는 **`메모이제이션(Memoization)`** 기법으로 해결할 수 있음

## Memoizaion (메모이제이션)
- DP를 구현하는 방법 중 하나로, 한번 구한 결과를 메모리 공간에 기억(메모)해놓고, 같은 식을 호출하면 기록해둔 결과를 그대로 가져오는 방법

### 코드
```js
let memo = Array.from({length: 7}, () => 0);

function fibonachi(x) {
    if(x === 1 || x === 2) return 1;
    if(memo[x]) return memo[x];
    memo[x] = fibonachi(x-1) + fibonachi(x-2); 
    return memo[x];
}

console.log(fibonachi(6));
```

## DP처럼 큰 문제를 작게 나누는 방법: 퀵 정렬
- 퀵 정렬은 정렬 시 정렬할 리스트를 분할하며 전체적으로 정렬이 될 수 있도록 함
- 이는 분할 정복 (Divide and Conquer) 알고리즘에 해당됨
- DP는 이와 달리 문제들이 서로 영향을 끼침
  - DP는 한 번 해결한 문제를 다시 해결함

## DP의 종류? 방식?
### 1. 탑다운 방식 (Top-Down)
- (= 하향식 방식)
- 재귀 함수를 이용해 DP 소스코드를 작성하는 방법
- 메모이제이션은 탑다운 방식에 국한되어 사용됨
  > 📌 메모이제이션은 이전에 계산된 결과를 일시적으로 기록해 놓는 것을 의미하며 DP와는 별도의 개념임

### 2. 보텀업 방식 (Bottom-Up)
- (= 상향식 방식)
- 단순히 반복문을 이용해 소스코드를 작성하는 경우
- DP의 전형적인 형태로, 보텀업 방식에서 사용되는 결과 저장용 배열을 'DP 테이블'이라고 부름
- 

```js
function fibonachi(x) {
    let memo = Array.from({length: x+1}, () => 0);

    memo[1] = 1;
    memo[2] = 1;

    for(let i = 1; i <= x; i++) {
        memo[i] = memo[i-1] + memo[i-2];
    }
    return memo[x];
}

console.log(fibonachi(7));
```