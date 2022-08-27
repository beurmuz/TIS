# Media Query
- 미디어 쿼리를 이용하면 stylesheet를 어떤 미디어에 사용할지 정의할 수 있다.
- stylesheet에 쓸 수 있는 @media 블록의 개수는 제한이 없다.
- media query는 **미디어 타입을 지정하는 단어** + **미디어의 세부 기능(해상도, 디스플레이 등)을 지정하는 서술자**의 조합을 기준으로 스타일 적용 여부를 결정한다.

## 사용처
- link 요소의 media 속성
- style 요소의 media 속성
- @import 선언의 미디어 서술자 부분
- @media 선언의 미디어 서술자 부분

## 미디어 타입
|미디어 타입|설명|
|:--|:--|
|all|모든 미디어에 적용됨|
|print|문서를 인쇄 or 화면에 미리보기 표시시 적용됨|
|screen|화면에 문서 표시시 적용됨<br>컴퓨터에서 실행되는 웹 브라우저는 모두 여기에 포함됨|

- 미디어 타입은 여러개 지정할 수도 있다.
  - index.html
  ```html
  <style type="text/css" media="screen, print"> ... </style> 
  ```

  - style.css
  ```css
  @import screen, print 
  ```

## 미디어 서술자
- 미디어 기능 서술자는 CSS의 **프로퍼티-값** 쌍과 같은 형식이다.
- 일부 기능에는 값을 쓰지 않아도 된다.
- 기능 서술자는 and 같은 논리 키워드로도 연결할 수 있다. 

### 2가지 논리 키워드
1. and

2. not