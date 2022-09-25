# B-Tree

- 탐색 성능을 높이기 위해 균형있게 높이를 유지하는 **Balanced tree**
- 모든 Leaf node가 같은 레벨로 유지되도록 자동으로 밸런스를 맞춰줌
- node의 자식 수 중 최댓값을 k라하면, 해당 B-tree를 `k차 B-Tree`라 함

## B-Tree 조건 

1. node의 key는 반드시 정렬된 상태여야 함
2. node의 key 개수가 k개이면, 자식 node의 수는 k+1개
3. 자식 node들의 key는 현재 node의 key를 기준으로 크기 순으로 나뉨
4. root node는 항상 2개 이상의 자식 node를 가짐 (root node가 leaf node인 경우는 제외)
5. 모든 leaf node들은 같은 level에 있어야 함

## B-Tree를 사용하는 이유

- 일반적인 트리는 탐색하는데 평균 시간 복잡도가 O(logN)을 갖지만, 트리가 편향된 경우 최악의 시간복잡도가 O(N)이 됨
- 따라서 트리가 편향되지 않도록 항상 밸런스를 유지하는 트리가 필요하며, 밸런스가 유지되는 트리는 최악의 경우에도 O(logN)의 시간이 보장됨

cf. [B-Tree](https://rebro.kr/169)
