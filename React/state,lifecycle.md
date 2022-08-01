# State (상태)
- 리액트 Component의 상태
- 리액트 Component의 변경 가능한 데이터
- state는 개발자가 직접 정의해서 사용함
- **렌더링이나 데이터 흐름에 사용되는 값만** state에 포함시켜야 함
  - state가 변경될 경우 component가 재렌더링되기 때문에 렌더링과 데이터 흐름에 관련없는 값을 포함하면 불필요한 렌더링이 일어나 성능이 저하될 수 있음
  - 렌더링과 데이터 흐름에 관련없는 값은 컴포넌트의 인스턴스 필드에 정의하면 됨
- 단지 하나의 JavaScript 객체임

## class 컴포넌트에서의 기본 형태
```jsx
class LikeButton extends React.Component {
    constructor(props) {
        super(props);

        this.state ={ // 현재 컴포넌트에서 state를 정의하는 부분
            liked: false
        };
    }
    ...
}
```
- 모든 클래스 컴포넌트에는 `constructor`가 존재함
- `constructor`는 클래스가 생성될 때 실행되는 함수
- 컴포넌트에서 state를 정의하는 부분
  - 클래스 컴포넌트: 생성자에서 정의함
  - 함수 컴포넌트: `useState()`라는 Hook을 사용해서 정의함

- **state는 직접 수정할 수 없음 (수정은 가능하나 수정해서는 안됨)**


### 클래스 컴포넌트에서는 state를 수정하는 법
- 반드시 `setState()`를 이용해야 함
```jsx
// state를 직접 수정 (=> 잘못된 사용법)
this.state = {
    name: 'Muz'
};

// setState 함수를 통한 수정 (=> 올바른 사용법)
this.setState({
    name: 'Muz'
});
```

# Lifecycle (생명주기)
- 모든 리액트 컴포넌트에는 라이프사이클 (수명 주기)가 존재함
- **컴포넌트의 수명**은 페이지에 렌더링되기 전인 준비 과정에서 시작하여, 페이지에서 사라질 때 끝남 (생성, 업데이트, 소멸)
- 생명주기에 따라 호출되는 **Lifecycle Method**가 있음

<img src='./img/05_lifecycle.JPG'/>

> ✅ 컴포넌트는 계속 존재하는 것이 아닌, 시간의 흐름에 따라 생성되고 업데이트 되다가 사라짐

## 실습
- 생성자에서는 앞으로 사용할 데이터를 넣어서 초기화 해줌
    ```jsx
    this.state = {
        notifications: [],
    },
    ```

- 후에 state를 업데이트하기 위해서는 `setState`를 이용함
    ```jsx
    this.setState({
        notificatoins: notifications,
    });
    ```

# Lifecycle method
- 클래스 컴포넌트에서만 사용할 수 있음 
- 함수형 컴포넌트에서는 Hooks 기능으로 비슷한 작업을 처리할 수 있음 

## Lifecycle method의 종류
- 총 9가지의 종류가 있음
  - **Will~**: 어떤 작업을 작동하기 **전**에 실행되는 메서드
  - **Did~**: 어떤 작업을 작동한 후에 실행되는 메서드

- 총 3가지의 카테고리로 나눔

### 1. 마운트 (Mount)
- DOM이 생성되고 웹 브라우저상에 나타나는 것을 의미

- 마운트할 때 호출하는 메서드는 다음과 같음

|단계|함수|의미|
|:-:|:-|:--|
|1|컴포넌트 만들기||
|2|constructor|컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드|
|3|getDerivedStateFromProps|props에 있는 값을 state에 넣을 때 사용하는 메서드|
|4|render|준비한 UI를 렌더링하는 메서드|
|5|componentDidMount|컴포넌트가 웹 브라우저상에 나타난 후 호출하는 메서드|

### 2. 업데이트 (Update)
- 컴포넌트 업데이트를 발생시키는 요인
  1. props가 변경될 때
  2. state가 (setState를 통해) 변경될 때
  3. 부모 컴포넌트가 리렌더링될 때
  4. this.forceUpdate로 강제로 렌더링을 트리거할 때

- 업데이트할 때 호출하는 메서드는 다음과 같음

|단계|함수|의미|
|:-:|:-|:--|
|1|업데이트가 발생함||
|2|getDerivedStateFromProps|업데이트 시작 전에도, 마운트 과정에서도 호출됨. <br>props의 변화에 따라 state 값에도 변화를 주고 싶을 때 사용|
|3|shouldComponentUpdate|컴포넌트가 리렌더링 할지말지 결정하는 메서드. <br> true 반환 시 render 호출. false반환 시 해당 지점에서 작업 취소|
|4|render|컴포넌트를 리렌더링함|
|5|getSnapshotBeforeUpdate|컴포넌트 변화를 DOM에 반영하기 바로 직전에 호출하는 메서드|
|6||웹 브라우저상의 실제 DOM 변화|
|7|componentDidUpdate|컴포넌트의 업데이트 작업이 끝난 후 호출하는 메서드|

### 3. 언마운트 (Unmount)
- DOM에서 컴포넌트를 제거하는 것

- 언마운트 시 호출하는 메서드

|단계|함수|의미|
|:-:|:-|:--|
|1||언마운트하기|
|2|componentWillUnmount|컴포넌트가 웹 브라우저상에서 사라지기 전에 호출하는 메서드
