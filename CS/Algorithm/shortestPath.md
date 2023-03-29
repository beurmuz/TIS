# Shortest Path (최단 경로)

- 가장 짧은 경로를 찾는 알고리즘
- '길 찾기 문제'라고도 불린다.
- 보통 그래프를 이용해 표현하는데 각 지점은 '노드'로, 연결된 도로는 '간선'으로 표현된다.

## 다익스트라 최단 경로 알고리즘

- 그래프에서 여러 개의 노드가 있을 때, 특정한 노드에서 출발하여 다른 노드로 가는 각각의 최단 경로를 구해주는 알고리즘
- 0보다 작은 값을 가지는 간선인 '음의 간선'이 없을 때 정상적으로 동작하여, GPS 소프트웨어의 기본 알고리즘으로 채택되기도 한다.
- 매번 **가장 비용이 적은 노드**를 선택해서 임의의 과정을 반복하므로 그리디 알고리즘으로 분류된다.

### 다익스트라 알고리즘의 원리

1. 출발 노드를 설정
2. 최단 거리 테이블을 초기화
3. 방문하지 않은 노드 중, 최단 거리가 가장 짧은 노드를 선택
4. 해당 노드를 거쳐 다른 노드로 가는 비용을 계산하여, 최단 거리 테이블을 갱신
5. 3,4를 계속 반복

- 최단 경로를 구하는 과정에서 '각 노드에 대한 현재까지의 최단 거리 정보'를 항상 1차원 리스트(최단 거리 테이블)에 저장하며 리스트를 계속 갱신한다.
- 매번 현재 처리하고 있는 노드를 기준으로 주변 간선을 확인한다. 후에 더 짧은 경로를 찾으면 새롭게 갱신한다.
- 방문하지 않은 노드 중에서 현재 최단 거리가 가장 짧은 노드를 확인해 그 노드에 대해 4번 과정을 수행한다는 점에서 그리디 알고리즘으로 볼 수 있다.
- 한 단계당 하나의 노드에 대한 최단 거리를 확실히 찾는다.

## 1-1. 간단한 다익스트라 알고리즘 구현 방법

- 시간 복잡도: O(V^2)
  - 총 O(V)번에 거쳐서 최단 거리가 가장 짧은 노드를 매번 선형 탐색 해야하고, 현재 노드와 연결된 노드를 일일이 확인하기 때문이다.
- 단, 간단한 다익스트라 알고리즘은 노드의 개수가 대체로 5000개 이하일 때 사용하는 것이 좋다.

### 소스코드

```py
import sys
input = sys.stdin.readline
INF = int(1e9) # 무한을 의미하는 1e9

# 노드의 개수, 간선의 개수 입력받기
n, m = map(int, input().split())

# 시작 노드 번호 입력받기
start = int(input())

# 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트 만들기
graph = [[] for i in range(n+1)] #[[], [], [], ... ,[]]

# 방문 여부를 저장할 리스트 만들기
visited = [False] * (n+1) # [False, False, ... ,False]

# 최단 거리 테이블을 모두 무한으로 초기화
distance = [INF] * (n+1) # [INF, INF, ..., INF]

# 모든 간선 정보 입력 받기
for _ in range(m):
  a, b, c = map(int, input().split())
  # a번 노드에서 b번 노드로 가는 비용이 c라는 뜻
  graph[a].append((b, c))

# 방문하지 않은 노드 중, 가장 최단 거리가 짧은 노드의 번호를 반환하는 함수
def get_smallest_node():
  min_value = INF
  index = 0 # 최단 거리가 가장 짧은 노드의 인덱스
  for i in range(1, n+1):
    if distance[i] < min_value and not visited[i]: # 비용이 min_value보다 작고 아직 방문하지 않았다면
      min_value = distance[i] # 비용을 min_value에 넣어준다.
      index = i # 현재의 i를 인덱스로 저장한다.
  return index

# 다익스트라를 구현한 함수
def dijkastra(start):
  # 시작 노드에 대해서 초기화를 한다.
  distance[start] = 0
  visited[start] = True # 방문 표시

  # graph[start]에 연결된 모든 노드를 탐색한다.
  for j in graph[start]:
    distance[j][0] = j[1] # 해당 노드 번호에 비용을 넣는다.

  # 시작 노드를 제외한 전체 n-1개의 노드에 대해 반복
  for j in range(n-1):
    # 현재 최단 거리가 가장 짧은 노드를 꺼내서, 방문 처리
    now = get_smallest_node() # 아직 방문하지 않은 노드 중 최단 거리가 가장 짧은 노드의 인덱스 번호를 받아온다.
    visited[now] = True # 방문표시
    # 현재 노드와 연결된 다른 노드를 확인한다.
    for j in graph[now]:
      cost = distance[now] + j[i]
      # 현재 노드를 거쳐 다른 노드로 이동하는 거리가 더 짧은 경우
      if cost < distance[j[0]]:
        distance[j[0]] = cost

dijkastra(start)

# 모든 노드로 가기 위한 최단 거리 출력
for i in range(1, n+1):
  if distance[i] == INF:
    print("INFINITY")
  else:
    print(distance[i])
```

## 1-2. 개선된 다익스트라 알고리즘

- 시간 복잡도: O(Elog V)
  - E: 간선의 개수
  - V: 노드의 개수
- 노드의 개수, 간선의 수가 많을 때 사용하는 방법이다.
- 힙 (Heap) 자료구조로 특정 노드까지의 최단 거리에 대한 정보를 힙에 담아 처리한다.

## 힙 (Heap)

- 우선순위 큐를 구현하기 위해 쓰는 자료구조 중 하나
  - 우선순위 큐? => 우선순위가 가장 높은 데이터를 가장 먼저 삭제하는 자료구조이다.
  - 데이터를 우선순위에 따라 처리하고 싶을 때 사용한다.
- 최소 힙: 값이 작은 값부터 삭제
- 최대 힙: 값이 큰 값부터 삭제

### 파이썬에서 우선순위 큐를 쓰기

- `PriorityQueue`나 `heapq` 라이브러리를 이용하면 된다.
- 단, `heapq`가 더 빠르게 동작하므로 `heapq`를 쓰는 것이 더 좋다.
- 우선순위 큐에 데이터 묶음 `(가치, 노드)`을 넣으면 가치가 가장 작은 값부터 자동으로 정렬된다.

### 소스코드

```py
import heapq
import sys
input = sys.stdin.readline
INF = int(1e9) # 무한을 의미하는 값으로 10억을 설정

# 노드의 개수, 간선의 개수 입력받기
n, m = map(int, input().split())

# 시작 노드 번호를 입력받기
start = int(input())

# 각 노드에 연결되어 있는 노드에 대한 정보를 담는 리스트 만들기
graph = [[] for i in range(n+1)]

# 최단거리 테이블을 모두 무한으로 초기화
distance = [INF] * (n+1)

# 모든 간선 정보 입력 받기
for _ in range(m):
  a, b, c = map(int, input().split())
  # a번 노드에서 b번 노드로 가는 비용은 c이다.
  graph[a].append((b, c))

def dijkstra(start):
  q = []
  # 시작 노드로 가기 위한 최단 경로는 0으로 설정하여 큐에 삽입한다.
  heapq.heappush(q, (0, start))
  distance[start] = 0
  while q: # 큐가 비어있지 않다면
   # 가장 최단 거리가 짧은 노드에 대한 정보를 꺼낸다.
   dist, now = heapq.heappop(q)
   # 현재 노드가 이미 처리된 적이 있는 노드라면 무시
   if distance[now] < dist:
    continue
   # 현재 도느와 연결된 다른 인접한 노드들 확인
   for i in graph[now]:
    cost = dist + i[1]
    # 현재 노드를 거쳐 다른 노드로 이동하는 거리가 더 짧은 경우
    if cost < distance[i[0]]:
      distance[i[0]] = cost
      heapq.heappush(q, (cost, i[0]))

dijkstra(start)
# 모든 노드로 가기 위한 최단 거리 출력
for i in range(1, n+1):
  if distance[i] == INF:
    print("INFINITY")
  else:
    print(distance[i])
```

# 2. 플로이드 워셜 알고리즘 (Floyd-Warshall)

- 모든 지점에서 다른 모든 지점까지의 최단 경로를 모두 구해야하는 경우에 사용할 수 있는 알고리즘
- N개의 노드의 개수가 있을 때, N번 만큼의 단계를 반복해 점화식에 맞게 2차원 리스트를 갱신하므로 '다이나믹 프로그래밍'으로 볼 수 있다.
- 시간 복잡도는 O(N^3)

## 다익스트라 알고리즘 vs 플로이드 워셜 알고리즘 ??

### 다익스트라 알고리즘

- 단계마다 최단 거리를 가지는 노드를 하나씩 반복적으로 선택한다.
- 그리고 해당 노드를 거쳐 가는 경로를 확인하며, 최단 거리 테이블을 갱신하는 방식으로 동작한다.

### 플로이드 워셜 알고리즘

- 단계마다 거쳐 가는 노드를 기준으로 알고리즘을 수행하나 매번 방문하지 않은 노드 중, 최단 거리를 갖는 노드를 찾을 필요가 없다.
- 1차원 리스트를 이용해 노드들의 최단 거리 정보를 저장했던 다익스트라와는 달리, 2차원 리스트에 저장한다.
- 각 단계에서는 해당 노드를 거쳐 가는 경우를 고려한다.
  - 따라서 현재 확인하고 있는 노드를 제외하고, N-1개의 노드 중 서로 다른 노드 (Na, Nb) 쌍을 선택해 `a -> 현재 노드, 현재 노드 -> b`로 가는 비용을 확인해 최단 거리를 갱신한다.

## 소스코드

```py
INF = int(1e9) # 무한을 의미하는 값으로 설정

# 노드의 개수, 간선의 개수 입력 받기
n = int(input())
m = int(input())

# 2차원 리스트를 만들고, 모든 값을 무한으로 초기화
graph = [[INF] * (n+1) for _ in range(n+1)]

# 자기 자신에서 자기 자신으로 가는 비용은 모두 0 (오른쪽 아래 대각선 방향)
for a in range(1, n+1):
  for b in range(1, n+1):
    if a == b:
      graph[a][b] = 0

# 각 간선에 대한 정보를 입력 받아, 그 값으로 초기화하기
for _ in range(m):
  # A -> B 비용은 C
  a, b, c = map(int, input().split())
  graph[a][b] = c

# 점화식에 따라 플로이드 워셜 알고리즘 수행
for k in range(1, n+1):
  for a in range(1, n+1):
    for b in range(1, n+1):
      graph[a][b] = min(graph[a][b], graph[a][k] + graph[k][b])

# 결과 출력
for a in range(1, n+1):
  for b in range(1, n+1):
    if graph[a][b] == INF:
      print("INFINITY", end=" ")
    else:
      print(graph[a][b], end=" ")
```

# 3. 벨만-포드 알고리즘
