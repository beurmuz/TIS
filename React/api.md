# API 연동하기
- 웹 어플리케이션을 만들 때 다른 사람들도 데이터를 조회할 수 있게끔 하려면 서버를 만들고 서버의 API를 사용해서 데이터를 읽고 써야함
- 실제 프로젝트에서는 주로 Redux 라이브러리와 Redux 미들웨어를 사용해 구현하는 경우가 많음

## API 연동의 기본: axios 설치하기
- api를 호출하기 위해 axios 라이브러리를 설치해야함
  ```bash
  $ yarn add axios
  ```
- axios를 사용해 GET, PUT, POST, DELETE 등의 메서드로 API 요청을 할 수 있음

# JSON Placeholder로 API 연동 연습해보기
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)

## 1. useState와 useEffect로 데이터 로딩하기
- useState를 사용해 요청 상태를 관리하고, useEffect를 사용해 컴포넌트가 렌더링되는 시점에 요청을 시작하는 작업해보기
- 요청에 대한 상태를 관리할 땐 총 3가지 상태를 관리해주어야 함 
1. 요청의 결과
2. 로딩 상태
3. 에러

- Users.js 파일 생성하기
```js
// Users.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Users = (props) => {
    const [users, setUsers] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            // 요청을 시작할 때 error와 users를 초기화함
            setError(null);
            setUsers(null);

            // loading 상태를 true로 변경
            setLoading(true);
            
            // 응답을 받아옴
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data); // 데이터는 response.data안에 들어있음
        } catch(e) {
            setError(e);
        }
        setLoading(false); // 데이터가 받아와지면 로딩이 끝난다.
    }

    useEffect(() => {
        fetchUsers(); // 실행
    }, []);

    if(loading) return <div>로딩중 .... </div>;
    if(error) return <div> 에러가 발생했습니다. </div>;
    if(!users) return null;

    return (
        <>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} ({user.name})
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={fetchUsers}>다시 불러오기</button>
            </>
    );
}
export default Users;
```
- App.js에서 화면 보여주기
```js
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Users from './components/Users';

function App() {


  return (
    <div className="App">
      <Users></Users>
    </div>
  );
}

export default App;
```

## 2. useReducer로 요청 상태 관리하기
```js
import React, { useEffect, useReducer } from 'react';
import axios from 'axios';

function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS' :
            return {
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR' :
            return {
                loading: false,
                data: null,
                error: action.error
            };
        default: 
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}


const Users = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null
    });

    const fetchUsers = async () => {
        dispatch({ type: 'LOADING'});
        try {
            // 응답을 받아옴
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({ type: 'SUCCESS', data: response.data });
        } catch(e) {
            dispatch({ type: 'ERROR', error: e });
        }
    };

    useEffect(() => {
        fetchUsers(); // 실행
    }, []);

    const { loading, data: users, error } = state; // state.data를 users 키워드로 조회 
    if(loading) return <div>로딩중 .... </div>;
    if(error) return <div> 에러가 발생했습니다. </div>;
    if(!users) return null;

    return (
        <>
            <div>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.username} ({user.name})
                        </li>
                    ))}
                </ul>
            </div>
            <button onClick={fetchUsers}>다시 불러오기</button>
            </>
    );
}
export default Users;
```

- useReducer로 구현하면 useState의 setState 함수를 여러번 쓰지 않아도 됨
- reducer로 로직을 분리했으니 다른 곳에서도 쉽게 재사용할 수 있음

## 3. useAsycn 커스텀 Hook 만들어서 사용하기
- 데이터를 요청할 때마다 리듀서를 작성하는 건 굉장히 번거로움
- 매번 반복되는 코드를 작성하는 대신, 커스텀 Hook을 만들어 요청 상태 관리 로직을 쉽게 재사용할 수도 있음