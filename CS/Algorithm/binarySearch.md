# 순차 탐색 (Sequential Search)
- **순서대로 데이터를 탐색하는 방법**
- 리스트 안에 있는 특정한 데이터를 찾기 위해 앞에서부터 차례대로 데이터를 하나씩 확인하는 방법
- 보통 정렬되지 않은 리스트에서 데이터를 찾아야 할 때 사용
- 데이터가 방대해도 시간만 있다면 항상 원하는 원소를 찾을 수 있음

## 순차 탐색 예시 코드
- 정답을 찾기까지 필요한 탐색 횟수 구하기
```js
function solution(target, arr) {
    let count = 0;
    for(let x of arr) {
        if(x === target) return;
        count++;
    }
    return count;
}

const arr = [1, 6, 7, 3, 2, 5, 8];
console.log(solution(5, arr));
```

## 시간 복잡도
- 순차 탐색은 데이터 정렬 여부와 관계없이 가장 앞에 있는 원소부터 하나씩 확인해야 함
- 데이터 개수가 N일 때, 최대 N번의 비교 연산이 필요하므로 최악의 경우 `O(N)`
