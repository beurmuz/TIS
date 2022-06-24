# 3. 컴포넌트

## 3. 1. 컴포넌트

- 리액트로 인터페이스 설계 시 사용자가 볼 수 있는 요소는 여러 개의 컴포넌트로 구성되어 있음

### 1) 컴포넌트의 기능

- 데이터가 주어졌을 때 이에 맞추어 UI를 만들어줌
- 라이프사이클 API를 이용해 컴포넌트화 화면에서 나타낼 때, 사라질 때, 변화가 발생할 때 주어진 작업들을 처리해줌
- 임의의 메서드를 만들어 특별한 기능을 붙여줄 수 있음

### 2) 컴포넌트의 선언하는 방법

1. 함수형 컴포넌트
    - 클래스형 컴포넌트 보다 선언하기 편함
    - 메모리 자원도 클래스형 컴포넌트보다 덜 사용함
    - 빌드 후 배포 시 결과물의 파일 크기가 더 작음
    - 원래 state와 라이프사이클 API 사용이 불가능했으나, v16.8 업데이트 이후 `Hooks`가 도입되면서가능해짐
2. 클래스 컴포넌트
    - 클래스 컴포넌트는 함수형 컴포넌트와 달리 state, 라이프사이클 기능을 사용할 수 있고, 임의 메서드를 정의할 수 있음
    - 클래스형 컴포넌트에는 보여주어야 할 JSX를 꼭 반환하는 render함수가 있어야 함
    
    ```jsx
    // App.js
    
    import React, { Component } from 'react';
    
    class App extends Component {
    	render() {
    		const name = 'muz';
    		return <div className='title'>{name}</div>;
    	}
    }
    
    export default App;
    ```
    

## 3. 2. 컴포넌트 생성하기

```jsx
// MyComponent.js

import React from 'react';

const MyComponent = () => {
	return <div>첫 컴포넌트 생성</div>;
};

export default MyComponent;
```

### + ES6의 화살표 함수

- 화살표 함수는 주로 함수를 파라미터로 전달할 때 유용함
    - 값을 연산해 바로 반환해야할 때 사용하면 가독성이 높아짐
- 기존 function을 대체할 수 없음
- 화살표 함수로 선언한 것과 function으로 선언한 것의 this는 값이 다름
    - function 이용시: 자신이 종속된 객체를 this로 가리킴
    - 화살표 함수 이용시: 자신이 종속된 인스턴스를 가리킴

## 3. 3. 모듈 내보내기, 불러오기

### 1) 모듈 내보내기 (export)

```jsx
export default 컴포넌트명;
```

### 2) 모듈 불러오기 (import)

```jsx
import React from 'react';
```

## 3. 4. props (properties)

- 컴포넌트 속성 설정 시 사용하는 요소, `{ }`로 감싸주면 됨
- props 값은 해당 컴포넌트를 불러와 사용하는 부모 컴포넌트에서 설정할 수 있음
- 컴포넌트 함수의 파라미터로 받아와서 사용할 수 있음

### 1) JSX 내부에서 props 렌더링

```jsx
// MyComponent.js

const MyComponent = props => {
	return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>;
}
```

### 2) 컴포넌트를 사용할 때 props 값 지정하기

- App 컴포넌트에서 MyComponent의 props 값 지정하기

```jsx
// App.js

import MyComponent from './MyComponent';

const App() = () => {
	return <MyComponent name='muz' />;
};
```

### 3) defaultProps: props 기본값 설정

- defaultProps를 이용하면 props 값을 따로 지정하지 않았을 때 보여 줄 기본값을 설정할 수 있음

```jsx
// MyComponent.js

const MyComponent = props => {
	return <div>안녕하세요, 제 이름은 {props.name} 입니다.</div>;
};

MyComponent.defaultProps = {
	name: '등록되지 않은 이름';
};
```

### 4) 태그 사이의 내용을 보여주는 `props.children`

- 컴포넌트 태그 사이의 내용을 보여주는 props

```jsx
// App.js

import MyComponent from './MyComponent';

const App() = () => {
	return <MyComponent>MUZ</MyComponent>;
};
```

- MyComponent 태그 사이에 작성한 `MUZ`라는 문자열을 MyComponent 내부에서 보여주려면 `props.children` 값을 보여주어야 함

```jsx
// MyComponent.js

const MyComponent = props => {
	return (
		<div>
			안녕하세요, 제 이름은 {props.name} 입니다. <br />
			children 값은 {props.children} 입니다.
		</div>;

	)
};

MyComponent.defaultProps = {
	name: '등록되지 않은 이름';
};
```

### 5) 비구조화 할당으로 props 내부 값 추출하기

- 비구조화 할당, 구조분해 문법 (destructuring assignment)
    - 객체에서 값을 추출하는 문법
    
    ```jsx
    // MyComponent.js
    
    const MyComponent = props => {
    	const { name, children } = props;
    	return (
    		<div>
    			안녕하세요, 제 이름은 {name} 입니다. <br />
    			children 값은 {children} 입니다.
    		</div>;
    
    	)
    };
    
    MyComponent.defaultProps = {
    	name: '등록되지 않은 이름';
    };
    ```
    
    - 함수의 파라미터 부분에서도 사용할 수 있음
    
    ```jsx
    // MyComponent.js
    
    const MyComponent = ({ name, children }) => {
    	return (
    		<div>
    			안녕하세요, 제 이름은 {name} 입니다. <br />
    			children 값은 {children} 입니다.
    		</div>;
    
    	)
    };
    
    MyComponent.defaultProps = {
    	name: '등록되지 않은 이름';
    };
    ```
    

### 6) PropTypes를 통한 props 검증

- 컴포넌트의 **필수 props를 지정**하거나 **props의 타입(type)**을 지정할 때 사용
- `PropTypes`를 쓰려면 import구문으로 불러와야 함

```jsx
// MyComponent.js
import PropTypes from 'prop-types';

const MyComponent = ({ name, children }) => {
	return (
		<div>
			안녕하세요, 제 이름은 {name} 입니다. <br />
			children 값은 {children} 입니다.
		</div>;

	)
};

MyComponent.defaultProps = {
	name: '등록되지 않은 이름';
};

MyComponent.propTypes = {
	name: PropTypes.string // name값은 무조건 문자열 형태로 전달되어야 함을 의미
};
```

- `isRequired`로 필수 propTypes를 설정할 수 있음
    - propTypes를 지정하지 않았을 때 **경고 메시지**를 띄우는 방법
    
    ```jsx
    const MyComponent = ({ name, children, favoriteNumber }) => {
    
    MyComponent.propTypes = {
    	name: PropTypes.string // name값은 무조건 문자열 형태로 전달되어야 함을 의미
    	favoriteNumber: PropTypes.number.isRequired 
    	// App.js에서 favoriteNumber를 넘기지 않으면 콘솔에 경고창이 뜨게 됨
    };
    ```
    
- PropTypes 종류
    - array, arrayOf, bool, func, object, string, symbol, node, instanceOf, oneOf, oneOfType, objectOf, shape, any …

### 7) 클래스형 컴포넌트에서 props 쓰는 법

- render 함수에서 `this.props`를 조회하면 됨
- `defaultProps`와 `propTypes`는 똑같은 방법으로 설정 가능
    
    ```jsx
    import React, { Component } from 'react'l
    import PropTypes from 'prop-types';
    
    class MyComponent extends Component {
    	render() {
    		const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    		return (
    			<div>
    				안녕하세요, 제 이름은 {name}입니다. <br />
    				children 값은 {children} 이고, <br />
    				좋아하는 숫자는 {favoriteNumber} 입니다.
    			</div>
    		);
    	}
    	
    	// 함수형 컴포넌트 선언 때와 같다
    	MyComponent.defaultProps = { name: '사용자' };
    	MyComponent.propTypes = {
    		name: PropTypes.string,
    		favoriteNumber: PropTypes.number.isRequired
    	};
    }
    ```
    
- `defaultProps`와 `propTypes`는 클래스 내부에서도 지정 가능
    
    ```jsx
    import React, { Component } from 'react'l
    import PropTypes from 'prop-types';
    
    class MyComponent extends Component {
    	// 여기서 지정 가능
    	static defaultProps = {
    		name: '기본 이름';
    	};
    	static propTypes = {
    		name: PropTypes.string;
    		favoriteNumber: PropTypes.number.isRequired;
    	};
    
    	render() {
    		const { name, favoriteNumber, children } = this.props; // 비구조화 할당
    		return (
    			<div>
    				안녕하세요, 제 이름은 {name}입니다. <br />
    				children 값은 {children} 이고, <br />
    				좋아하는 숫자는 {favoriteNumber} 입니다.
    			</div>
    		);
    	}
    }
    ```
    
- 사실 `defaultProps`와 `propTypes`는 굳이 사용하지 않아도 된다.

## 3. 5. state

- state는 컴포넌트 내부에서 바뀔 수 있는 값
    - 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값
    - 컴포넌트 자신은 해당 props를 읽기 전용으로만 사용할 수 있음
    - props를 바꾸려면 부모 컴포넌트에서 바꿔주어야 함
- App 컴포넌트에서 MyComponent를 사용할 때 props를 바꿔주어야 값이 변경될 수 있음
    - 반면 MyComponent에서는 전달받은 props를 직접 바꿀 수 없음

- 리액트의 state에는 2가지가 있음
    - 클래스형 컴포넌트가 가지고 있는 state
    - 함수형 컴포넌트에서 useState라는 함수를 통해 사용하는 state

### 1) 클래스형 컴포넌트의 state

- Counter 컴포넌트 만들기
    
    ```jsx
    // Counter.js
    
    import React, { Component } from 'react';
    
    class Counter extends Component {
      constructor(props) {
        super(props);
    		this.state = {
    			number: 0
    		}
       };
    
      render() {
        const { number, fixedNumber } = this.state; // state 를 조회 할 때에는 this.state 로 조회합니다.
        return (
          <div>
            <h1>{number}</h1>
            <h2>바뀌지 않는 값: {fixedNumber}</h2>
            <button
              // onClick 을 통하여 버튼이 클릭됐을 때 호출 할 함수를 지정합니다.
              onClick={() => {
                this.setState(
                  {
                    number: number + 1
                  },
                  () => {
                    console.log('방금 setState 가 호출되었습니다.');
                    console.log(this.state);
                  }
                );
              }}
            >
              +1
            </button>
          </div>
        );
      }
    }
    
    export default Counter;
    ```
    
    ```jsx
    // App.js
    
    import Counter from './Counter';
    
    const App = () => {
    	return <Counter />;
    }
    ```
    
- state 객체 안에 여러 값이 있을 때
    - state 객체 안에는 여러 값이 있을 수 있음
    - 그 중 변하지않는 값은 `this.setState` 함수를 쓰지 않으면 됨
        - `this.setState` 함수는 인자로 전달된 객체 안에 들어있는 값만 바꿔줌
- constructor 없이 다른 방식으로 state 초깃값을 설정하는 방법
    
    ```jsx
    // Counter.js
    
    import React, { Component } from 'react';
    
    class Counter extends Component {
      state = {
        number: 0,
        fixedNumber: 0
      };
      render() {
        const { number, fixedNumber } = this.state; // state 를 조회 할 때에는 this.state 로 조회합니다.
        return (...);
      }
    }
    
    export default Counter;
    ```
    
- `this.setState`에 객체 대신 함수 인자 전달하기
    - `this.setState`를 사용해 state 값을 업데이트 할 때 상태가 비동기적으로 업데이트됨
    - 특정 함수 내부에서 `this.setState`를 두 번 호출하면 어떻게 될까?
        - `this.setState`를 사용해도 `state` 값이 바로 바뀌지는 않기에 숫자가 1씩 더해짐
- `this.setState`가 끝난 후 특정 작업 실행하기
    - `setState`를 사용해 값을 업데이트한 후 특정 작업을 할 때는 `setState`의 두번째 파라미터로 **콜백함수**를 등록해 작업을 처리할 수 있음
    
    ```jsx
    <button
    	onClick={() => {
    		this.setState()(
    			{
    				number: number + 1
    			},
    			() => {
    				console.log('방금 setState가 호출되었습니다.');
    				console.log(this.state);
    			}
    		);
    	}}
    >
    	+1
    </button>
    ```
    

### 2) 함수형 컴포넌트에서 useState 사용하기

- 16.8 이전 버전에서는 함수형 컴포넌트에서 `state`를 사용할 수 없었으나, 이후 `useState`라는 함수를 이용해 `state`를 이용할 수 있게 됨
- Hooks를 이용함
- Say 컴포넌트 만들기
    
    ```jsx
    import React, { useState } from 'react';
    
    const Say = () => {
      const [message, setMessage] = useState('');
      const onClickEnter = () => setMessage('안녕하세요!');
      const onClickLeave = () => setMessage('안녕히 가세요!');
    
      return (
        <div>
          <button onClick={onClickEnter}>입장</button>
          <button onClick={onClickLeave}>퇴장</button>
          <h1>{message}</h1>
        </div>
      );
    };
    
    export default Say;
    ```
    
    - `useState`함수 인자에는 상태의 초깃값 넣기
        - `useState`의 인자에는 반드시 객체를 넣어주지 않아도 됨
    - 함수를 호출하면 배열이 반환됨
        - 첫 번째 원소: 현재 상태
        - 두 번째 원소: 상태를 바꿔주는 함수 ⇒ **세터(setter)함수**
- 한 컴포넌트에서 `useState` 여러 번 사용하기
    - `useState`는 한 컴포넌트에서 여러 번 사용해도 됨
    
    ```jsx
    import React, { useState } from 'react';
    
    const Say = () => {
      const [message, setMessage] = useState(''); // useState
      const onClickEnter = () => setMessage('안녕하세요!');
      const onClickLeave = () => setMessage('안녕히 가세요!');
    
      const [color, setColor] = useState('black'); // useState
    
      return (
        <div>
          <button onClick={onClickEnter}>입장</button>
          <button onClick={onClickLeave}>퇴장</button>
          <h1 style={{ color }}>{message}</h1>
          <button style={{ color: 'red' }} onClick={() => setColor('red')}>
            빨간색
          </button>
          <button style={{ color: 'green' }} onClick={() => setColor('green')}>
            초록색
          </button>
          <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
            파란색
          </button>
        </div>
      );
    };
    
    export default Say;
    ```
    

## 3. 6. state 사용 시 주의사항

- state 값을 바꾸어야할 때는 setState나 useState를 통해 전달받은 세터 함수를 사용해야 함
- 배열이나 객체를 업데이트해야 할 때
    - 배열이나 객체 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState 혹은 세터함수를 통해 업데이트 함
    
    ```jsx
    // 객체 다루기
    const object = { a: 1, b: 2, c: 3 };
    const nextObject = { ...object, b: 2 }; // 사본 만들어서 b만 덮어쓰기
    
    // 배열 다루기
    const array = [
    	{ id: 1, value: true },
    	{ id: 2, value: true },
    	{ id: 3, value: false }
    ];
    
    let nextArray = array.concat({ id: 4 }); // 새 항목 추가
    nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거
    nextArray.map(item.id === 1 ? { ...item, value: false} : item)); // id가 1인 항목의 value를 false로 설정 
    ```
    
    ## 3. 7. 정리
    
    - props와 state는 둘다 컴포넌트에서 사용하거나 렌더링할 데이터를 담고 있으므로 비슷해보일 수 있지만, 역할이 다름
        - props는 부모 컴포넌트가 설정하고
        - state는 컴포넌트 자체적으로 지닌 값으로 컴포넌트 내부에서 값을 업데이트할 수 있음