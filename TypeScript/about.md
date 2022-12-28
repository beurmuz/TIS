# TypeScript?

- Microsoft사에서 만든 오픈소스 프로그래밍 언어
- JS가 동작하는 모든 곳에서 사용 가능
- 컴파일 시 babel을 이용해 JS 코드로 바꿔주므로 어디서나 사용 가능하다.

## TS를 쓰는 이유

- TS는 정적 타입 언어이므로
- 강력한 객체지향 프로그래밍이 가능하므로

## TS의 핵심

1. Types
2. OOP

## JavaScript vs TypeScript

### JavaScript

- 동적 타입
  - 프로그램이 동작할 때 타입이 결정된다.
    => 런타임 환경에서 에러가 발생할 수 있다.
- 애매한 객체지향 프로그래밍을 해왔음
  - Prototype을 기반으로 함
  - 생성자 함수를 이용해 Object를 만들어냄
  - 물론 ES6 이후로는 class가 도입되어 class를 이용할 수 있긴 함

### TypeScript

- 정적 타입
  - 코드를 작성할 때 바로바로 타입이 결정된다.
    => 컴파일 시에 에러를 잡아줄 수 있다.
- 강력한 객체지향 프로그래밍이 가능해짐
  - class, interface, generics, types ...

> ✅ 동적 타입 vs 정적 타입?
>
> - 동적 타입 (Dynamically Typed)
>   : 프로그램이 동작할 때 (런타임 환경에 있을 때) 타입이 결정, 검사되는 경우
>   ex) Python, JS, PHP, ruby 등
>
> - 정적 타입 (Statically Typed)
>   : 컴파일 시간에 타입이 결정 및 검사될 수 있는 경우 (코드 작성 시 타입을 명시해주어야 함)
>   ex) Java, Kotlin, TS, Go, Swift, C 등

## vscode에서 typescript 사용하기?

```bash
npm i -g -ts-node
tsc 파일명.ts
tsc 파일명.ts -w
```

- `-w`는 ts 파일을 수정할 때마다 변경된 내용이 자동으로 js파일에 적용되게끔 해주는 것이다.
