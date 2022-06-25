# ref (reference)
- HTML에서 id를 사용해 DOM에 이름을 다는 것처럼 리액트 프로젝트 내부에서 DOM에 이름을 다는 방법

### 리액트 컴포넌트 안에서는 id를 쓰면 안되나?
- 리액트 컴포넌트 내에서도 id를 사용할 수 있으나 권장하지 않음
- HTML에서 DOM의 id는 유일해야하는데, 리액트에서 같은 컴포넌트를 여러 번 사용하면 중복 id를 가진 DOM이 여러개 생기게 됨
- ref는 **컴포넌트 내부**에서만 작동하므로 상관 없음

## ref를 사용해야하는 경우
- ref는 DOM을 꼭 직접적으로 건드려야할 때 사용해야 함

### DOM을 꼭 사용해야하는 상황
1. 특정 input에 포커스 주기
2. 스크롤 박스 조작하기
3. Canvas 요소에 그림그리기

- 이때는 어쩔 수 없이 DOM에 직접 접근해야함.
- 이럴 때 `ref`를 사용

# ref 이용하기
- ref를 이용하는 방법에는 2가지가 있음

## 1. 콜백함수를 통한 ref 설정
- ref를 만드는 가장 기본적인 방법
- ref를 달고자하는 요소에 ref라는 콜백함수를 props로 전달하면 됨
- 콜백함수는 ref 값을 파라미터로 전달받고, 함수 내부에서 파라미터로 받은 ref를 컴포넌트의 멤버 변수로 설정함 

```jsx
<input ref={(ref) => {this.input = ref}} />
```

- this.input은 input 요소의 DOM을 가리킴
- ref의 이름은 자유롭게 지정 가능

## 2. createRef를 통한 ref 설정
- 리액트에 내장되어있는 `createRef` 함수를 이용하는 방법

```jsx
import React, { Component } from 'react';

class RefSample extends Component {
    input = React.createRef();
    
    handleFocus = () => {
        this.input.current.foucus;
    }

    render() {
        return 
            <div>
                <input ref={this.input} />
            </div>
    };
}
```
- createRef를 사용해 ref를 만드려면 우선 컴포넌트 내부에서 멤버변수로 React.createRef()를 넣어주면 됨 
- 해당 멤버 변수를 ref를 달고자하는 요소에 ref props로 넣어주면 됨
- ref로 설정한 DOM에 접근하려면 `this.input.current`를 조회하면 됨

# 컴포넌트에 ref 달기
- 주로 컴포넌트 내부에 있는 DOM을 컴포넌트 외부에서 사용할 때 씀 

## 사용법
```jsx
<MyComponent ref={(ref) => {this.myComponent = ref}}>
```
- 이렇게하면 MyComponent 내부의 메서드 및 멤버 변수에도 접근할 수 있음
- 즉, 내부의 ref에도 접근 가능