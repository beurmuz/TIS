# List와 key
## List와 배열
- 리스트를 위해 사용하는 자료구조는 배열
- 배열은 JavaScript의 변수나 객체들을 하나의 변수로 묶어놓은 것

## key
- 각 개체나 아이템을 구분할 수 있는 고유한 값
- 리액트에서의 키는 아이템들을 구분하기 위한 고유한 문자열을 의미함

# 여러 개의 컴포넌트 렌더링하기
## map() 이용하기
- map은 서로 짝지어줌
- 배열에 들어있는 각 변수에 어떤 처리를 한 뒤 리턴함

```jsx
// numbers를 list로 만들기
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) => 
    <li>{number}</li>
);

// 화면에 렌더링
ReactDOM.render(
    <ul>{listItems}</ul>,
    document.getElementById('root');
)
```
# List의 key
- key는 아이템들을 구분하기 위한 고유한 문자열 
- list에서 어떤 아이템이 변경, 추가, 삭제되었는지 구분하기 위해 사용함
- key 값은 같은 List에 있는 elements 사이에서만 고유한 값이면 됨 

## 고유한 key값을 만들어 쓰는 방법
### 1. key로 값을 사용하는 경우
- key값이 중복될 가느엉이 있음

### 2. key로 id를 사용하는 경우

### 3. key로 index를 사용하는 경우
- 아이템들의 고유한 ID가 없을 경우에만 사용해야 함
- 단, 배열에서 item의 순서가 바뀔 수 있는 경우에는 key값으로 index를 사용하지 않는 게 좋음
- 리액트에서는 key값을 넣어주지 않으면 명시적으로 index를 key값으로 사용함

> ✅ map()함수 안에 있는 elements는 꼭 key가 필요하다는 것 

# 실습
- 출석부 출력하기
```jsx
import React from "react";

const students = [
    {
        id: 1,
        name: "Inje",
    },
    {
        id: 2,
        name: "Steve",
    },
    {
        id: 3,
        name: "Bill",
    },
    {
        id: 4,
        name: "Jeff",
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    );
}

export default AttendanceBook;
```

- key를 포맷팅 된 문자열로 변경하는 법
    ```jsx
    return <li key={`student-id-${student.id}`}>{student.name}</li>;
    ```

- key를 index로 변경하는 법
    ```jsx
    {students.map((student, index) => {
        return <li key={index}>{student.name}</li>;
    })}
    ```