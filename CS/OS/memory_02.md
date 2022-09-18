# 메모리 관리
- 메모리는 한정되어 있고, 이를 최대한으로 활용해야 한다.

## 가상 메모리 (Virtual memory)
- 메모리 관리 기법 중 하나
- 컴퓨터가 실제로 이용 가능한 메모리 자원을 추상화하여, 이를 매우 큰 메모리로 보이게 만드는 것

|주소|의미|
|:-:|:--|
|가상 주소 (Logical address)|가상적으로 주어진 주소|
|실제 주소(Physical address)|실제 메모리 상에 있는 주소|

- 가상 주소는 메모리관리장치(MMU)에 의해 실제 주소로 변환되고, 이로 인해 사용자는 실제 주소를 몰라도 프로그램을 구축할 수 있다. 


### 스와핑

### 페이지 폴트 (page fault)

## 스레싱 (Thrashing)

### 작업 세트

### PFF

## 메모리 할당

### 연속 할당

1. 고정 분할 방식

2. 가변 분할 방식

### 불연속 할당

1. 페이징 (Paging)

2. 세그멘테이션 (Segmentation)

3. 페이지 세그멘테이션 (Paged Segmentation)

## 페이지 교체 알고리즘

### 오프라인 알고리즘 (Offline Algorithm)

### FIFO (First In First Out)

### LRU (Least Recentle Used)

### NUR (Not Used Recently)

### LFU (Least Frequently Used)
