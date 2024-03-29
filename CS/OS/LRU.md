# LRU (Least Recently Used Algorithm)
- 가장 오랫동안 참조되지 않은 페이지를 교체하는 방식의 알고리즘을 뜻한다.
- 사용된지 가장 오래된 페이지는 앞으로도 사용될 확률이 낮다는 가설에 의해 만들어진 알고리즘이다.
- 캐시가 가득 찼을때 가장 오랜시간 참조되지 않은 페이지를 찾아 없애는 과정이 필요한데, 그때 사용하는 알고리즘이다.

## LRU의 원리
- 페이지를 새로 참조할 때마다 연결리스트의 맨 앞에 페이지 번호를 추가하면, 맨 뒤에 있는 페이지 번호가 가장 오랜시간 참조되지 않은 페이지 번호가 된다.
- 캐시의 크기가 3인데 이미 3개의 페이지가 캐시에 들어있다면 맨 뒤에 있는 페이지번호 node 를 지우고 새로운 페이지번호 node 를 앞에 연결해주는 방식이다.
- LRU를 구현할때는 Doubly Linked List 를 사용하고 head 에 가까운 node 일수록 가장 최근에 참조된 페이지, tail 에 가까운 node 일수록 가장 오랫동안 참조되지 않는 페이지이다. LRU 의 개념에 따라 cache size 를 넘어서게 된다면 tail 에 가까운 페이지가 먼저 삭제되도록 한다.

[LRU 알고리즘](https://dailylifeofdeveloper.tistory.com/355?category=906408)