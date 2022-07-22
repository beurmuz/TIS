# 정렬 (Sorting)
- 데이터를 특정한 기준에 따라 순서대로 나열하는 것
- 다양한 정렬 방법이 있음

## 1. 선택 정렬 (Selection sort)
- 데이터가 무작위로 있을 때, 가장 작은 데이터를 선택해 맨 앞에 있는 데이터와 바꾸는 과정을 반복하는 방법
- **매번 가장 작은 것을 선택**하는 방법

### 코드 
```js
function selectionSort(N, nums) {
    for(let i = 0; i < N-1; i++) {
        let min_index = i;
        for(let j = i+1; j < N; j++) {
            if(nums[min_index] > nums[j]) min_index = j;
        }
        [nums[i], nums[min_index]] = [nums[min_index], nums[i]]; // 두 데이터 스와핑
        console.log(nums);
    }
}

const nums = [9, 5, 4, 7, 1, 6, 2, 3, 8, 0];
console.log(selectionSort(10, nums));
```

### 시간 복잡도
- `N-1`번 만큼 가장 작은 수를 찾아 위치를 옮겨야 함
- 비교 연산이 필요함
- 연산 횟수는 `N + (N + 1) + (N + 2) + (N + 3) + ... + 2`이므로 `N + (N + 1)/2`번의 연산을 수행한다고 보면 됨
- 즉, `O(N^2)`
- 소스코드 상 이중 반복문이 사용되었으니 `O(N^2)`이라 생각해도 됨

## 2. 삽입 정렬 (Insertion Sort)
- 특정한 데이터를 적절한 위치에 '삽입'하는 방법
- 데이터가 거의 정렬되어 있을 때 훨씬 효율적임
- 선택 정렬은 무조건 모든 원소를 비교하고 위치를 바꾸지만, 삽입 정렬은 그렇지 않음
- 삽입 정렬은 두번째 데이터부터 정렬을 시작함

### 코드
```js
function insertionSort(N, nums) {
    for(let i = 1; i < N; i++) {
        for(let j = i-1; j >= 0; j--) {
            if(nums[j] < nums[j-1]) { // nums[i]가 정렬하려는 값
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]];
            }
        }
        console.log(nums);
    }
}

const nums = [9, 5, 4, 7, 1, 6, 2, 3, 8, 0];
console.log(insertionSort(10, nums));
```

### 시간 복잡도
- `O(N^2)`
- 리스트의 데이터가 거의 정렬되어 있는 상태라면 `O(N)`
- 거의 정렬된 상태로 입력이 주어지는 문제라면 퀵 정렬 등의 여러 알고리즘 보다도 삽입 정렬을 쓰는 것이 정답 확률이 높아짐