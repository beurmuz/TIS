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

# 이진 탐색 (Binary Search)
- 데이터가 정렬되어 있어야만 사용 가능
- 위치를 나타내는 변수 3개를 사용
  - 탐색하는 범위의 **시작점**
  - **끝점**
  - **중간점**
- target 값과 중간 위치에 있는 값을 비교해 target 값을 찾음

## 이진탐색 구현방법1 - 재귀함수 이용하기
```js
function binarySearch(arr, target, start, end, count) {
    if(start > end) return false;
    let mid = Math.floor((start + end)/2);
    if(arr[mid] === target) {
        return mid+1;
    } else if(arr[mid] > target) {
        return binarySearch(arr, target, start, mid-1);
    } else {
        return binarySearch(arr, target, mid+1, end);
    }
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(arr, 7, 0, arr.length-1, 0));
```

## 이진탐색 구현방법2 - 반복문 이용하기
```js
const binarySearch = (sortedArray, value) => {
  let min = 0;
  let max = sortedArray.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);
    let currentElement = sortedArray[mid];

    if (currentElement < value) { 
    } else if (currentElement > value) {
      max = mid - 1; 
    } else {
      return mid;
    }
  }
  return -1;
};

const arr = [1, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];
console.log(binarySearch(arr, 37));
```

## 시간 복잡도
- `O(logN)`
  - 한번 탐색할 때마다 확인하는 원소의 개수가 절반씩 줄어들어듦
- 탐색 범위가 2만을 넘어가면 이진 탐색으로 푸는 게 좋음