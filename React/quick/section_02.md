# JSX
- A syntax extension to JavaScript
- 자바스크립트 확장 문법
- JavaScript + XML/HTML
```jsx
const element = <h1>Hello, world!</h1>;
```
- jsx를 쓰는 것이 필수는 아니지만, jsx를 이용했을 때의 장점이 더 많기 때문에 쓰는 게 좋음

## JSX 역할
- 내부적으로 XML/HTML 코드를 자바스크립트 코드로 변환해줌
    ```jsx
    React.createElement(
        type,
        [props],
        [...children]
    )
    ```
    - type: element 유형, 타입을 나타냄
    - props: 속성들
    - children: 현재 element가 포함하고 있는 자식 element

# 장점
- 간결한 코드
- 가독성 향상
  - 버그를 발견하기 쉬움
- injection attacks 방어가 가능함
  - 리액트 DOM은 렌더링하기 전에 임베딩된 값을 모두 문자열로 변환하여 명시적으로 선언되지 않은 값은 `{}` 사이에 들어갈 수 없음
  - 즉, XSS를 방어할 수 있게 됨

# 사용법
## 태그의 속성에 값을 넣는 방법
```jsx
// 1. 따옴표 사이에 문자열 넣기
const element = <div tabIndex='0'></div>;

// 2. 중괄호 사이에 자바스크립트 코드 넣기
const element = <img src={user.avatarUrl}></img>;
```