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

# REST API
- 작업에 따라 다른 메서드로 요청할 수 있게 해줌

|HTTP 메서드||
|:-:|:-:|
|GET|데이터 조회|
|POST|데이터 등록 및 수정|
|PUT|데이터 수정|
|DELETE|데이터 삭제|

# React에서 axios 이용하기

## axios 설치하기
```bash
npm install axios
yarn add axios
```

## axios 사용하기
### axios의 request method
|request method||
|:-:|:-:|
|GET|axios.get(url[, config])|
|POST|axios.post(url, data[, config])|
|PUT|axios.put(url, data[, config])|
|DELETE|axios.delete(url[, config])|

### 4가지 기본 params
- axios에 4가지 정보를 알려주어야 함
|parameter|
|:-:|
|Method|
|Url|
|Data (optional)|
|Params (optional)|

```js
axios({
    method: 'get',
    url: 'url',
    // data: {
    //     // post 메서드에서 data를 전송할 경우
    // }
    responseType: 'type'
}).then(function (response) {
    // response action
});
```

# axios 메서드
- 단축된 axios 메서드를 활용하면 위의 4가지 기본 파라미터를 생략하거나 간결하게 쓸 수 있음

## 1. axios.get()
- get 메서드는 다음의 2가지 경우에 사용함
  - 단순 데이터(페이지 요청, 지정된 요청) 요청 시
  - 파라미터 데이터를 포함시키는 경우 (사용자 번호에 따른 조회)
- 위의 경우에 따라 `params: {}` 객체가 존재할지 안할지가 결정됨

### 1. 단순 데이터 요청
- callback 사용 시
    ```js
    axios.get('url')
        .then(function (response) {
            // response 처리
        }).catch(function (error) {
            // error 처리
        }).then(function() {
            // 항상 실행하는 구문
        });
    ```

- async-await 함수 사용 시
    ```js
    try {
        const data = await axios.get('url');
    } catch {
        // 오류 발생 시
    }
    ```

### 2. 파라미터 데이터를 포함할 때
- callback 사용 시
    ```js
    axios.get('url', {
            params: {
                id: 1
            }
        })
        .then(function (response) {
            // response
        }).catch(function (error) {
            // 오류 발생 시
        }).then(function () {
            // 항상 실행
        });
    ```
- async-await 함수 사용 시
    ```js
    try {
        const data = await axios.get('url', params: { id: 1 });
    } catch {
        // 오류 발생 시
    }
    ```

## 2. axios.post()
- 일반적으로 데이터를 message body에 포함시켜 보냄
- callback 사용 시
    ```js
    axios.post('url', {
        username: 'muz',
        password: '1111'
    })
    .then(function (response) {
        // response 처리
    }).catch(function (error) {
        // 오류 발생 시
    }).then(function () {
        // 항상 실행
    });
    ```

- async-await 함수 사용 시
    ```js
    try {
        const data = await axios.post('url');
    } catch {
        // 오류 발생 시 
    }
    ```

## 3. axios.put()
- put은 서버 내부적으로 **get -> post** 과정을 거치므로 post 메서드와 비슷한 형태
- callback 사용 시
    ```js
    axios.put('url', {
        username: 'muz',
        password: '1111'
    })
    .then(function (response) {
        // response 처리
    }).catch(function (error) {
        // 오류 발생 시
    }).then(function () {
        // 항상 실행
    });
    ```

- async-await 함수 사용 시
    ```js
    try {
        const data = await axios.put('url', { username: 'muz', password: '1111' });
    } catch {
        // 오류 발생 시 
    }
    ```

## 4. axios.delete()
- delete 메서드는 일반적으로 body가 비어있음
- get과 비슷한 형태이지만 한번 delete 메서드가 서버에 들어가면 서버 내에서 삭제 process를 진행함

- callback 사용 시
    ```js
    axios.delete('/user?ID=1', {
            data: {
                post_id: 1,
                comment_id: 7,
                username: 'muz'
            }
        })
        .then(function (response) {
            // response 처리
        }).catch(function (error) {
            // 오류 발생 시
        }).then(function () {
            // 항상 실행
        });
    ```

- async-await 함수 사용 시
    ```js
    try {
        const data = await axios.delete('/user?ID=1');
    } catch {
        // 오류 발생 시 
    }
    ```

---
### ref
- [axios란?](https://wonit.tistory.com/304)
- [axios 적용 방법](https://wonit.tistory.com/305?category=793048)