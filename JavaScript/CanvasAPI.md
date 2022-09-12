# Canvas API
# 1. 기본 사용법
## 1.1 `<canvas>` 요소
- <canvas>는 src, alt 속성이 없는 <img> 요소라고 생각할 수 있다. 
  - border, margin, backgroud 등 스타일을 적용할 수 있다.
- 실제로 속성으로 width와 height만을 가지며, 이 두 속성은 optional하다.
  - width와 height을 지정하지 않을 경우 default width는 300px, height은 150px이다.
  - 요소는 CSS로 크기를 정할 수 있지만, 렌더링하는 동안 이미지는 레이아웃 크기에 맞게 크기가 조정된다.
- <canvas>를 지원하지 않은 브라우저의 경우 대체 컨텐츠를 제공해야하는데, 이 경우 </canvas>처럼 닫는 태그가 반드시 있어야 한다.

## 1.2 Rendering Context (렌더링 컨텍스트)
- <canvas> 요소는 고정된 크기의 드로잉 영역을 생성하고, 하나 이상의 렌더링 컨텍스트를 노출하여 출력할 컨텐츠를 생성하고 다룬다.
- 캔버스는 처음에 비어있고 `getContext()` 메서드로 렌더링 컨텍스트와 그리기 함수들을 사용할 수 있다. 
  - `getContext()`는 렌더링 컨텍스트 타입을 지정하는 값을 파라미터로 가지며, 드로잉 같은 경우에는 `2d`로 지정하면 된다.

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
```

# 2. 경로 그리기
- 경로는 점들의 집합이며, 경로를 이용할 때에는 열고 닫는 작업이 필요하다.
1. `beginPath()`로 새로운 경로를 만든다. 경로가 생성되었다면 이후 그리기 명령들은 경로를 구성하고 만드는데 사용하게 된다.
2. 그리기 명령어로 경로상에 그리기
3. 경로가 한번 만들어졌다면, 경로를 렌더링하기 위해 윤곽선을 그릴 수 있음

