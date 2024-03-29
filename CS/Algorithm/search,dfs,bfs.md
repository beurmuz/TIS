✅ DFS, BFS는 [그래프](../DataStructure/graph.md)에 대해 선행지식이 필요합니다.

# 그래프 탐색?

- 간선을 따라 그래프의 모든 노드를 탐색한다는 뜻

|     | 탐색 방법에 따라 BFS/DFS로 나뉜다.                                                                                            |
| :-: | :---------------------------------------------------------------------------------------------------------------------------- |
| BFS | - 자신의 자식들부터 순차적으로 탐색하는 방법<br>- 순차 탐색 이후, 다른 자식 노드의 자식을 확인하기 위해 **Queue**를 사용한다. |
| DFS | - 최대한 깊게 탐색한 후 빠져나오는 방법<br>- **백트래킹**의 일종이며, **재귀**를 활용한다.                                    |

# 깊이 우선 탐색 (DFS, Depth-First Search)

- **그래프에서 깊은 부분을 우선적으로 탐색**하는 알고리즘
- 동작 원리: **스택**
- 특정 경로를 탐색하다가 특정 상황에서 깊숙히 들어가 노드를 방문한 후, back해 다른 경로를 탐색하는 알고리즘
- 탐색 시 데이터의 개수가 n개인 경우 O(n)시간이 소요됨
- 재귀 함수를 이용했을 때 매우 간결하게 구현할 수 있음

> DFS의 탐색 순서는 스택에 들어간 순서를 의미함

## 탐색 과정

1. 탐색을 시작하는 노드를 스택에 삽입하고 방문 처리함
2. 스택의 최상단 노드에 방문하지 않은 인접 노드가 있으면 그 인접 노드를 스택에 넣고 방문처리 함. 만약 방문하지 않은 인접 노드가 없으면 스택에서 최상단 노드를 꺼냄
3. 2번 과정을 더 이상 수행할 수 없을 때까지 계속 반복

> 방문 처리를 함으로써 각 노드를 한 번씩만 처리할 수 있음

# 너비 우선 탐색 (BFS, Breadth First Search)

> 최단거리, 최소시간을 구하여라~

- **가장 가까운 노드부터 탐색**하는 알고리즘
- 동작 원리: **큐**
- 탐색 시 O(N)시간이 소요됨
- 일반적인 경우 수행 시간이 DFS보다 좋음

> BFS의 탐색 순서는 큐에 들어간 순서를 의미함

## 탐색 과정

1. 탐색을 시작하는 노드를 큐에 삽입하고 방문 처리함
2. 큐에서 노드를 꺼내 해당 노드의 인접 노드 중, 방문하지 않은 노드를 모두 큐에 삽입하고 방문처리 하기
3. 2번 과정을 더 이상 수행할 수 없을 때까지 반복
