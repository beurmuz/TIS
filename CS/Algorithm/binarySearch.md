# 순차 탐색 (Sequential Search)

- **순차적으로 데이터를 탐색하는 방법**
- 배열 내 특정 데이터를 찾기 위해, 앞에서부터 차례대로 데이터를 확인한다.
- 보통 정렬되지 않은 리스트에서 데이터를 찾아야 할 때 사용하는 방법이다.
- 데이터가 방대해도 시간만 있다면 항상 원하는 원소를 찾을 수 있다.
- 시간 복잡도는 O(N)
  - 데이터 정렬 여부와 관계없이 가장 앞에 있는 원소부터 하나씩 확인해야 하기 때문이다.

## 순차 탐색 예시 코드

- 정답을 찾기까지 필요한 탐색 횟수를 구한다.

```js
function solution(target, arr) {
  let count = 0;
  for (let x of arr) {
    if (x === target) return;
    count++;
  }
  return count;
}

const arr = [1, 6, 7, 3, 2, 5, 8];
console.log(solution(5, arr));
```

# 이진 탐색 (= 이분 탐색) (Binary Search)

- 전체 범위를 이분할해 가운데의 값을 비교하며 탐색하는 방법
- 탐색 전, 반드시 리스트가 정렬되어 있어야 한다.
- 시작점, 끝점의 **가운데 지점**과 target값을 비교해 target값을 찾는 방법이다.
- 시간 복잡도는 O(logN)
  - 한번 탐색할 때마다 확인하는 원소의 개수가 절반씩 줄어들기 때문이다.
  - 탐색 범위가 2만을 넘어가면 이진 탐색으로 푸는 것이 좋다.
  - O(N)이하로 해결할 수 있는 방법이 있다면, 이분탐색을 사용할 필요가 없다.

### Parametric Search

- 이진 탐색을 활용하되, 정확한 값이 아닌 가장 근사한 값을 찾는 기법
- 방정식 f(x)가 있다면, 값에 최대한 근사한 해를 찾는 기법이라고 생각하면 쉽다.
- 찾는 값 자체를 비교하는 것이 아닌, 값을 식에 대입해 나온 결과물을 비교해야한다.

## 이진탐색 구현 1 - 재귀함수 이용하기

```js
function binarySearch(arr, target, start, end, count) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) {
    return mid + 1;
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, start, mid - 1);
  } else {
    return binarySearch(arr, target, mid + 1, end);
  }
}

const arr = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
console.log(binarySearch(arr, 7, 0, arr.length - 1, 0));
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
