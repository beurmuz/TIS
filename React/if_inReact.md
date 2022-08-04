# 리액트에서 자주 쓰는 if문 작성패턴
- if문을 이용해 조건부로 html을 보여주고 싶은 경우 코드를 작성하는 방법

## 1. 컴포넌트 안에서 쓰는 if-else문
### 예시
```jsx
// a) if-else문 쓰기
function Component() {
    if(true) {
        return <p>참이면 이 코드가 실행됩니다.</p>;
    } else {
        return null;
    }
}

// b) else를 생략한 방법
function Component() {
    if(true) {
        return <p>참이면 이 코드가 실행됩니다.</p>;
    }
}
```

1. 자바스크립트 if문은 return() 안의 JSX내에서는 사용이 불가능함
   - `<div> if (true) return <p>참이면..</p> else return null.. </div>` 이러한 형식을 아예 쓸 수 없다는 뜻
2. 보통 `return + JSX 전체`를 보여주는 형태로 if문을 작성함
3. a와 b코드는 똑같은 기능을 함
   - 자바스크립트 function 안에서는 **return**을 만나면 해당 지점에서 코드가 바로 종료되기 때문
   - if-else if-else 구문도 2개의 if문으로 축약 가능

## 2. JSX안에서 삼항연산자 쓰기 (ternary operator)
```js
조건문 ? 조건문이 참일 때 실행할 코드 : 거짓일 때 실행할 코드
```

### 예시
```jsx
function Component() {
    let x  = 1;
    return (
        <div>
            {
                x === 1
                ? <p>x가 1이라면 이 글이 화면에 나타난다. </p>
                : null
            }
    )
}
 ```

- if-else문과 달리 JSX안에서도 실행 가
- 조건을 간단히 주고 싶을 때 사용
- 중첩도 가능함

```jsx
function Component() {
    let x  = 1;
return (
    <div>
    {
        x === 1
        ? <p>x가 1이라면 이 글이 화면에 나타난다. </p>
        : ( x === 2 
            ? <p>x는 2였다.</p> 
            : <p>x는 이도저도 아니야</p> 
        )
    }
    </div>
    )
} 
```
- 중첩은 가능하나 가독성이 떨어짐

## 3. && 연산자로 if문 역할 대신하기
```js
true && false; // false
true && true; // true
```
- 원래라면 왼쪽 오른쪽 둘다 true인 경우 true가 되지만,,

```js
true && '안녕'; // 안녕
false && '안녕'; // false
true && false && '안녕'; // false
```
- 위와 같이 && 기호와 함께 자료형을 사용하면 문자열만 남음

> 📑 JS는 &&로 연결된 값들 중 처음 등장하는 falsy값을 찾아주고, 그게 아니면 마지막 값을 남김

### 예시
```js
// a) 삼항연산자 이용
function Component() {
    return (
        <div>
        {
            1 === 1
            ? <p>참이면 이게 화면에 보인다</p>
            : null
        }
        </div>
    )
} 

// b) && 연산자 이용
function Component() {
    return (
        <div>
        { 1 === 1 && <p>참이면 이게 화면에 보인다</p> }
        </div>
    )
}
```
- 이렇게 간결해질 수 있음

## 4. switch-case 조건문 사용하기
- if문이 중첩해서 여러 개 달려있는 경우에 사용
- 코드의 길이가 줄어들 수는 있으나 조건식란에서 **변수 하나만 검사할 수 있음**
### 예시
```js
// a) if문이 중첩된 코드
function Component(){
    let user = 'seller';
    if (user === 'seller'){
        return <h4>판매자 로그인</h4>
    } else if (user === 'customer'){
        return <h4>구매자 로그인</h4>
    } else {
        return <h4>그냥 로그인</h4>
    }
}

// b) a코드를 switch-case문으로 바꾼 코드
function Component2(){
    let user = 'seller';
    switch (user){
        case 'seller' :
            return <h4>판매자 로그인</h4>
        case 'customer' :
            return <h4>구매자 로그인</h4>
        default : 
            return <h4>그냥 로그인</h4>
    }
}
```

## 5. object, array 자료형 응용
- 경우에 따라 다른 화면을 보여주고 싶다면
  - if-else if-else문을 쓰거나
  - 삼항연산자를 여러개 써야 함

### 예시
```md
현재 state가 info면 <p>상품정보</p>
현재 state가 shipping이면 <p>배송정보</p>
현재 state가 refund면 <p>환불약관</p>
```
- if문이나 삼항연산자로 state를 검사하는 문법을 쓰지 않고, 
- object 자료형에 화면에 보여줄 HTML을 담고 다음과 같이 쓰면 됨

```js
function Component() {
  let nowState = 'info';
  return (
    <div>
      {
        { 
           info : <p>상품정보</p>,
           shipping : <p>배송관련</p>,
           refund : <p>환불약관</p>
        }[nowState]
      }

    </div>
  )
} 
```
- 대괄호에 key값을 넣고, **'현재 key값이 nowState인 자료를 뽑겠다'** 라고 코드를 작성하면 됨
- nowState가 info면 key가 info일 때의 value를 보여줌
- 아래의 코드처럼 변수에 저장해서 써도 됨

```js
let 탭UI = { 
  info : <p>상품정보</p>,
  shipping : <p>배송관련</p>,
  refund : <p>환불약관</p>
}

function Component() {
  let nowState = 'info';
  return (
    <div>
      {
        탭UI[nowState]
      }
    </div>
  )
}
```