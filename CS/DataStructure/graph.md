# 그래프 (Graph)

<img src='./images/graph_01.JPG' width='250px'>

- 정점(Node, vertext)과 간선(Edge)으로 이루어진 자료구조
- root node가 없는 트리처럼 보임
- 그래프 탐색
  - 하나의 노드를 시작으로 다수의 노드를 방문하는 것
- 두 노드가 인접하다?
  - 두 노드가 간선으로 연결되어 있음을 의미하는 말

## 그래프의 종류

### 1. 방향 그래프

- 방향성이 있는 간선을 가진 그래프
- digraph(다이그래프)라고도 부름

<img src='./images/graph_유향그래프.JPG' width='400px' /> <br>

- 모든 경로의 가지수
  - (1, 4), (1, 3), (2, 5), (3, 4), (4, 2), (5, 4)

### 2. 무방향 그래프

- 방향성이 없는 간선을 가진 그래프
- 방향성이 없어 노드 양쪽으로 둘다 이동할 수 있음

<img src='./images/graph_무향그래프.JPG' width='400px' /> <br>

- 모든 경로의 가지수
  - (1, 4), (4, 1), (1, 3), (3, 1), (2, 5), (5, 2), (3, 4), (4, 3), (4, 2), (2, 4). (5, 4), (4, 5)

## 3. 가중치 그래프

- 각각의 간선이 가중치를 갖는 그래프
- 방향 가중치 그래프, 무방향 가중치 그래프가 있음
  <img src='./images/graph_유향가중치그래프.JPG' width='400px' /> <br>
  <img src='./images/graph_무향가중치그래프.JPG' width='400px' /> <br>

## 그래프의 표현 방법

### 1. 인접 행렬 (Adjacency Matrix)

- **2차원 배열로 그래프의 연결 관계를 표현**하는 방식
- 2차원 배열에 각 노드가 연결된 형태를 기록함
- `adj[i][j]`: 노드 i에서 노드j로 가는 간선이 있다면 `1`, 없다면 `0`
- 방향 그래프인 경우

  <img src='./images/graph_인접행렬_유향.JPG' width='500px'>

- 무방향 그래프인 경우

  <img src='./images/graph_인접행렬_무향.JPG' width='500px'>

  - 인접 행렬이 대각 성분(i === j)을 기준으로 대칭임

- 인접 행렬 코드

  ```js
  function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
    let checkArray = Array.from({ length: n + 1 }, () => 0);
    let path = [];

    // 인접행렬 만들기
    for (let [a, b] of arr) {
      graph[a][b] = 1; // 방향그래프
      // 무방향 그래프이면 graph[b][a] = 1;로 해주면 됨
    }

    function dfs(v) {
      if (v === n) {
        answer++;
        console.log(path);
      } else {
        for (let i = 1; i <= n; i++) {
          // v에서 i로 갈 수 있는가? 가려고하는 정점에 아직 방문하지 않았는가?
          if (graph[v][i] === 1 && checkArray[i] === 0) {
            checkArray[i] = 1;
            path.push(i);
            dfs(i); // v에서 i로 간거니까 i 정점을 넘겨줘야 함
            checkArray[i] = 0; // back할때에는 check를 풀어줘야 함
            path.pop();
          }
        }
      }
    }
    path.push(1);
    checkArray[1] = 1; // 이 작업을 하지 않으면 1에 재방문하는 문제가 생김
    dfs(1);
    return answer;
  }

  let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ];
  console.log(solution(5, arr));
  ```

### 2. 인접 리스트 (Adjacency List)

- **List로 그래프의 연결 관계를 표현**하는 방식
- 모든 노드에 연결된 노드에 대한 정보를 차례대로 연결하여 저장함
- `adj[i]`: 노드 i에 연결된 노드들을 원소로 갖는 vector
- 방향 그래프인 경우

  <img src='./images/graph_인접리스트_유향.JPG' width='500px'>;

  - adj[1]은 총 3개의 성분을 가짐
    - `adj[1][0] = 2`, `adj[1][1] = 3`, `adj[1][2] = 4`
  - adj[1]에 있는 세 가지 노드의 순서는 의미가 없음 (그냥 오름차순으로 저장한 것 뿐)

- 무방향 그래프인 경우

  <img src='./images/graph_인접리스트_무향.JPG' width='500px'>;

- 코드

  ```js
  function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array());
    let checkArray = Array.from({ length: n + 1 }, () => 0);
    let path = [];

    // 인접리스트 만들기
    for (let [a, b] of arr) {
      graph[a].push(b);
    }
    console.log(graph);

    function dfs(v) {
      if (v === n) {
        answer++;
        console.log(path);
      } else {
        for (let i = 0; i < graph[v].length; i++) {
          // console.log(checkArray[graph[v][i]]); // 2, 3, 4

          // graph[v][i]는 v정점에서 갈 수 있는 정점 번호
          if (checkArray[graph[v][i]] === 0) {
            checkArray[graph[v][i]] = 1;
            path.push(graph[v][i]);
            dfs(graph[v][i]); // 정점 번호를 넘겨야함
            checkArray[graph[v][i]] = 0;
            path.pop();
          }
        }
      }
    }
    path.push(1);
    checkArray[1] = 1; // 이 작업을 하지 않으면 1에 재방문하는 문제가 생김
    dfs(1);
    return answer;
  }

  let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ];
  console.log(solution(5, arr));
  ```

## 인접 행렬과 인접 리스트의 비교

### 인접 행렬의 장단점

- 구현이 쉬움
- 노드 i, 노드 j의 인접 여부를 확인하고 싶으면 adj[i][j]가 1인지 0인지 보면 됨
  - 시간 복잡도가 O(1)
- 단, 노드 i에 연결된 모든 노드들에 방문해보고 싶은 경우 adj[i][1]부터 adj[i][노드의 개수]까지 모두 확인해야 함

  - 시간 복잡도가 o(노드의 개수)

- 모든 관계를 저장하므로 노드의 개수가 많을수록 메모리 낭비가 일어남

### 인접 리스트의 장단점

- 인접한 노드들에 대한 정보만 저장하므로, `모든 벡터들의 원소의 개수 합 === 간선의 개수`
  - 즉, 간선의 개수에 비례하는 메모리만 차지하게 됨
- O(간선의 개수)
- 단 노드 i와 j의 인접 여부를 알고 싶다면 시간 복잡도는 O(노드의 개수)

- 메모리 측면에서는 인접 리스트가 연결된 정보만 저장하기 때문에 인접 행렬을 사용할 때보다 메모리를 효율적으로 씀
