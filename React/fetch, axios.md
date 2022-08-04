# Fetch API
- 보통 자바스크립트에서 API를 연동하기 위해서는 `fetch-api`를 사용함
- 리액트에서도 fetch api를 이용할 수 있지만, 많은 사람들이 이 대신 axios를 많이 사용함

## Fetch api와 axios 
- 동일한 기능을 수행하는 두 코드

### 1. fetch api를 이용한 코드
- body부분이 `stringify()` 됨
- url이 `fetch()` 함수의 인자로 들어감
```js
// fetch
const url = 'http://127.0.0.1';
const options = {
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: JSON.stringify({
    id: 1,
    username: muz,
    gender: woman
  })
};

fetch(url, options)
  .then(response => {
    console.log(response.status);
  });
```

### 2. axios를 이용한 코드
- url이 option 객체로 들어감
- 자동적으로 JSON데이터를 변환함
```js
// axios
const options = {
  url: 'http://127.0.0.1',
  method: 'POST',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  data: {
    id: 1,
    username: muz,
    gender: woman
  }
};

axios(options)
  .then(response => {
    console.log(response.status);
  });
```

## axios를 더 자주 쓰는 이유
- axios는 HTTP 통신 요구사항을 컴팩트하고 사용하기 쉽게 해줌

# Axios
- Promise 기반의 HTTP Client
  - promise 기반이며 async/await 코드를 매우 쉽게 구현할 수 있게 해줌

## 장점
- 오래된 브라우저도 지원함
- 요청 중단 가능
- CSRF 보호 기능이 내장되어 있음
- JSON을 자동으로 변환해줌
- reponse timeout을 쉽게 정할 수 있음




---
### ref
- [axios란?](https://wonit.tistory.com/304)