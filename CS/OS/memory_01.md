# Memory
- CPU는 단지 '메모리'에 올라와 있는 프로그램의 명령어를 실행한다.

# 1. 메모리 계층
- 메모리 계층은 레지스터, 캐시, 메모리, 저장장치로 구성되어 있다.
- 계층이 있는 이유는 **경제성**과 **캐시** 때문이다.
- '로딩중' 표시는 하드디스크나 인터넷에서 데이터를 읽어 RAM으로 전송하는 과정이 아직 끝나지 않아 출력되는 것이다.

<img src='./img/memory_01.JPG'>

|계층|의미|특징|
|:-:|:--|:--|
|레지스터|CPU안에 있는 작은 메모리|휘발성<br>가장 빠른 속도<br>가장 적은 기억 용량<br>가장 비쌈|
|캐시|L1, L2캐시를 의미함|휘발성<br>빠른 속도<br>적은 기억 용량|
|주기억장치|RAM을 가리킴|휘발성<br>보통의 속도<br>보통의 기억 용량<br>하드디스크로부터 일정량의 데이터를 복사해 임시 저장하고, 필요할 때마다 이를 CPU에 빠르게 전달한다.|
|보조기억장치|HDD, SDD|휘발성<br>느린 속도<br>많은 기억 용량|

## 캐시 (Cache)
- 데이터를 미리 복사해 놓은 임시 저장소
- 장치 간 속도 차이에 따른 병목 현상을 줄이기 위한 메모리
- 캐시를 이용하면 데이터에 접근하는 시간과 재연산하는 시간을 절약할 수 있다. 
  - 메모리와 CPU의 속도차이가 너무 커서, 중간에 레지스터 계층을 두어 속도차이를 해결한다.
  - 이 계층을 **캐싱 계층**이라고 한다.

### 1. 캐시를 직접 설정할 때: 지역성의 원리 이용하기
- 캐시 계층을 두는 것이 아닌, 직접 설정할 때에는 **자주 사용하는 데이터**를 기반으로 설정해야 한다. 
- **지역성**이 자주 사용하는 데이터의 근거가 된다. 
- 지역성은 시간 지역성과 공간 지역성으로 나뉜다.

```js
let arr = Array.from({length: 10}, () => 0);
for(let i = 0; i < 10; i++) {
    arr[i] = i;
}
```
- 시간 지역성 (Temporal locality)
  - 최근 사용한 데이터에 다시 접근하려는 특성
  - 위의 예제에서 i가 이에 해당한다.

- 공간 지역성 (Spatial locality)
  - 최근 접근한 데이터를 이루고 있는 공간 or 그 가까운 공간에 접근하는 특성
  - 위의 예제에서 배열 arr가 이에 해당한다.

### 2. 캐시 히트, 캐시 미스

<img src='./img/memory_02.JPG'>

|이름|설명|
|:-:|:-|
|캐시 히트|캐시에서 원하는 데이터를 찾은 경우|
|캐시 미스|해당 데이터가 캐시에 없어 주메모리로 가서 데이터를 찾아오는 경우|

### 3. 캐시 매핑

|이름|설명|
|:-|:-|
|직접 매핑<br>(directed mapping)|메모리가 1~100, 캐시가 1~10이 있다면 순차적으로 일정한 구간을 매핑하는 것이다.<br>단, 처리는 빠르나 충돌이 잦다.|
|연관 매핑<br>(associative mapping)|순서를 일치시키지 않고 관련 있는 캐시와 메모리를 매핑한다.<br>충돌은 적으나 모든 블록을 탐색해야해서 속도가 느리다.|
|집합 연관 매핑<br>(set associatvie mapping)|직접 매핑 + 연관 매핑<br>순서는 일치시키지만 집합을 둬서 저장하기 때문에 검색은 좀 더 효율적이다.|

## 웹 브라우저의 캐시
- 쿠키, 로컬 스토리지, 세션 스토리지가 있다.
- 이러한 것들은 사용자의 커스텀한 정보나 인증 모듈 관련 사항들을 웹 브라우저에 저장해두어, 추후 서버에 요청 시 본인임을 나타내는 인증이나 중복 방지를 위해 쓰인다.

### 1. 쿠키 (cookie)
- **만료 기한이 있는 키&값 저장소**
- same site 옵션을 strict으로 설정하지 않으면 다른 도메인에서 요청했을 때 자동 전송 된다. 
- 4KB까지 데이터를 저장할 수 있고 만료 기한을 정할 수 있다.
- 쿠키 설정 시 `document.cookie`로 쿠키를 볼 수 없게 httponly 옵션을 설정해주어야 한다.
- 클라이언트나 서버 모두 만료기한을 정할 수 있지만, 보통 서버에서 만료기간을 정한다. 

### 2. 로컬 스토리지 (Local storage)
- **만료 기한이 없는 키&값 저장소**
- 10MB까지 저장할 수 있다.
- 웹 브라우저를 닫아도 유지된다.
- 도메인 단위로 저장, 생성된다.
- HTML5를 지원하는 웹 브라우저에서만 사용 가능하다.
- 클라이언트에서만 수정할 수 있다.

### 3. 세션 스토리지 (Session storage)
- **만료 기한이 없는 키&값 저장소**
- 탭 단위로 세션 스토리지를 생성하며, 탭을 닫을 때 해당 데이터가 삭제된다.
- 5MB까지 저장할 수 있다.
- HTML5를 지원하는 웹 브라우저에서만 사용할 수 있다.
- 클라이언트에서만 수정할 수 있다.

### ✍🏻 쿠키 vs 로컬 스토리지 vs 세션

||만료 기한|저장 범위|설정하는 쪽|
|:-:|:-:|:-:|:-:|
|쿠키|있음|~4KB|서버|
|로컬 스토리지|없음|~10MB|클라이언트|
|세션|없음|~5MB|클라이언트|