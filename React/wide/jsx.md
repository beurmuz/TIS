# JSX

## 2. 1. create-react-app으로 프로젝트 세팅하기

- 아래의 `App.js` 코드에서 …

```jsx
import React from 'react'; // 리액트 불러오기
import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className="App>
			<header clssName="App-header>
				<img src={logo} className="App-logo" alt="logo" />
				...
			</ div>

export default App;
```

- `import`구문을 통해 리액트를 불러와서 사용할 수 있음
    - 원래 모듈을 불러와 사용하는 기능은 웹 브라우저에 없는 기능이었는데, Node.js 덕분에 브라우저가 아닌 환경에서 자바스크립트를 실행할 수 있게 됨
    - cf) node.js에서는 `import`가 아닌 `require`로 패키지를 불러올 수 있음
- 이러한 기능을 브라우저에서도 사용하기 위해 `webpack(웹팩)`이라는 번들러는 사용함
    - 번들러는 import나 require로 모듈을 불러왔을 때 불러온 모듈을 모두 합쳐 하나의 파일을 생성함
    - 번들: 묶는다는 뜻으로, 파일을 묶듯이 연결하는 것
    - ex) 웹팩, parcel, browserify 등이 있음
    - index.js를 시작으로 필요한 파일을 다 불러와서 번들링하게 됨
    - 웹팩의 로더가 파일들을 불러오는 역할을 하며 로더에는 CSS파일을 불러오는 css-loder, 웹 폰트나 미디어 파일 등을 불러오는 file-loader, 자바스크립트 파일들을 불러오며 최신 자바스크립트 문법으로 작성된 코드를 ES5문법으로 변환해주는 babel-loader 등이 있음

> 최신 자바스크립트로 작성된 코드를 babel을 이용해 ES5 문법으로 바꿔주는 이유?
→ 구버전 웹 브라우저와 호환하기 위함
> 

## 2. 2. JSX

### 1) JSX란?

- 자바스크립트 확장 문법으로, XML과 비슷하게 생김
- JSX로 작성한 코드는 브라우저에서 실행되기 전, 코드가 번들링되는 과정에서 바벨을 사용해 일반 자바스크립트 형태의 코드로 변환됨
    - 변환 전 JSX 코드
    
    ```jsx
    function App() {
    	return (
    		<div>
    			Hello <b>raact</b>
    		</div>
    	);
    }
    ```
    
    - 변환 후 코드
    
    ```jsx
    function App() {
    	return React.createElement("div", null, "Hello ", React.createElement("b", null, "react"));
    {
    ```
    

### 2) JSX의 장점

- 가독성이 높고 익숙함
- jsx파일 내에 HTML 태그와 JavaScript 코드를 작성할 수 있음

### 3) `index.js`에 있는 것들

- cf) `ReactDOM.render()`?
    - 컴포넌트를 페이지에 렌더링하는 역할을 함
    - react-dom 모듈을 불러와 사용할 수 있음
    - 첫번째 파라미터: 렌더링 할 내용
    - 두번째 파라미터: 렌더링 할 document 내부 요소 설정
- cf) `React.StrictMode`?
    - 리액트 프로젝트에서 리액트의 레거시 기능을 이용하지 못하게 하는 태그
    - `use strict`를 하는 것처럼 엄격한 환경에서 개발 가능해짐

## 2. 3. JSX 문법

### 1) 감싼 요소

- 요소 여러 개를 하나의 요소로 꼭 감싸줘야 함
- Virtual DOM에서 컴포넌트 변화를 감지해낼 때 효율적으로 비교할 수 있도록 컴포넌트 내부는 하나의 DOM트리 구조로 이루어져야 함
    - 때문에 `<div>`나 `<Fragment>`로 감싸주어야 함

```jsx
{/*1. 에러 발생 코드: return 시 형제 노드를 쓸 수 없음*/}
function App() {
  const name = 'muz';
  return <h1 className="title">HELLO, {name} !!</h1>
  <h1>Hello~</h1>;
}

{/*2. <React.Fragment>를 이용하면 에러가 사라짐*/}
function App() {
  const 'muz';
  return (
    <React.Fragment>
        <h1 className="title">HELLO, {name} !!</h1>
        <h1> Hello~~~~</h2>
     </React.Fragment>
  );
}
```

### 2) JSX 코드 내에서 JavaScript 코드 작성 가능

- `{ }`내부에 자바스크립트 표현식을 작성할 수 있음

```jsx
function App() {
 const sayHello = <h1>HELLO!!</h1>;
 const name = 'muz';
  return (
    <>
      sayHello,
      {name && <h1 className="title">HELLO, {name}? </h1>}
      {['♥', '📚', '✍🏻', '📂'].map(item => <h2>{item}</h2>)}
    </>
  );
}
```

### +ES6의 const와 let
- const: 한번 지정하고나면 값을 변경할 수 없는 상수 선언 시 사용
- let: 한번 선언한 후 값이 유동적으로 변할 수 있을 때에만 사용
- var: scope가 함수 단위

→ let과 const는 scope가 블록단위라 같은 블록 내부에서 중복 선언이 불가능함


### 3)  If문 대신 조건부 연산자는 사용 가능

- JSX 내부의 자바스크립트 표현식에서 if문은 쓸 수 없음
    - 조건에 따라 다른 내용을 렌더링해야할 때에는 JSX 밖에서 if문을 사용해 사전에 값을 설정하거나, { } 안에 조건부 연산자를 사용해야 함
    - 조건부 연산자 = 삼항 연산자

```jsx
function App() {
	const name = 'muz';
	return (
		<>
			{name === 'muz' ? (
				<h1>사용자는 muz입니다. </h1>
			) : (
				<h2>로그인된 사용자가 아닙니다.</h2>
			)}				
		</>
	);
}
```

### 4) && 연산자를 사용한 조건부 렌더링

- 특정 조건을 만족할 때 내용을 보여주고, 만족하지 않을 때 아무것도 렌더링하지 않는 상황이 있을 것
- 조건부 연산자를 이용해서 할 수도 있지만, `&&`연산자를 이용하면 더 간단히 구현할 수 있음

```jsx
function App() {
	const name = 'muz';
	return <> {name === 'muz' && <h1>사용자는 muz입니다.</h1>} </>;
}
```

- `&&`로 렌더링할 수 있는 이유?
    - 리액트에서 false를 렌더링할 때는 null과 마찬가지로 아무것도 나타나지 않기 때문
    - falsy한 값은 0으로 예외적으로 화면에 나타남

### 5) undefined 렌더링하지 않기

- `undefined`만 반환해 렌더링하는 상황을 만들면 안됨
- 어떤 값이 `undefined`일 수 있다면, OR 연산자를 이용해 해당 값이 `undefined`일 때 사용할 값을 지정함으로써 오류를 예방할 수 있음
    
    ```jsx
    function App() {
    	const name = undefined;
    	return name || '값이 undefined 입니다.';
    }
    ```
    
- JSX 내부에서 undefined를 렌더링하는 것은 상관없음
    
    ```jsx
    function App() {
    	const name = undefined;
    	return <div>{name || '빈값이다'}</div>
    }
    ```
    

### 6) 인라인 스타일링

- 리액트에서 DOM요소에 스타일을 적용할 때 `객체`형태로 넣어주어야 함
- 스타일 속성 중 `-`가 있는 속성은 카멜표기법으로 작성해야 함

```jsx
// 방법 1
function App() {
	const name = undefined;
	const style = {
		color: 'green',
		backgroundColor: 'white'
	}
	return (
		<div style = {style}>
			{name}
		</div>
	)
}
```

```jsx
// 방법 2
function App() {
	const name = 'muz';
	return (
		<div style = {
			{ 
				color: 'green',
				backgroundColor: 'white'
			}	
		}>
			{name}
		</div>
	)
}
```

### 7) class가 아닌 className

- 요소에 class를 설정하려면 `className`을 이용해야 함
    - css파일을 따로 만든 후, `App.js`에서 import해오면 됨

```css
/* App.css */
.title {
	color: 'green',
	backgroundColor: 'white'
}
```

```jsx
// App.js
import React from 'react';
import './App.css';

function App() {
	const name = 'muz';
	return <div className='title'>{name}</div>
}
```

### 8) 꼭 닫아야 하는 태그

- HTML과 달리 JSX에서는 태그를 닫지 않으면 오류가 발생함
    - ex) `<input>`, `<br>` 등
- 태그사이에 별도의 내용이 들어가지 않으면 `self-closing`을 이용하면 됨
    - ex) `<input />`

### 9) 주석

```css
{/* 주석 내용 */}
```

## 2. 4. ESLint와 Prettier

### 1) ESLint

- 문법 검사 도구
- 코드를 작성할 때 실수를 하면 에러나 경고 메시지를 VS code 에디터에서 바로 확인할 수 있게 해줌
    - 초록색 줄은 무시해도 되는 경고
    - 빨간색 줄은 반드시 고쳐야하는 경고

### 2) Prettier

- 코드의 가독성을 위한 코드 스타일 자동 정리 도구
- Prettier를 사용하면 스타일을 쉽게 커스터마이징할 수 있음