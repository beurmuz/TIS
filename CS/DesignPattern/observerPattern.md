# Observer Pattern (옵저버 패턴)
- 주체가 관찰하던 객체에 상태 변화가 있을 때마다 옵저버들에게 변화를 알려주는 디자인 패턴이다.
  - 주체는 객체의 상태 변화를 지켜보고 있는 관찰자이고,
  - 옵저버들은 특정 객체의 상태 변화에 따라 전달되는 메서드 등을 기반으로 변경사항이 생기는 객체들을 의미한다. 
- 주체, 객체를 따로 두지 않고 상태가 변경되는 객체를 기반으로 구축하기도 한다. ex) 트위터

## 특징
- 주로 이벤트 기반 시스템에 활용되며 MVC 패턴에도 사용된다.
  - 모델에 변경 사항이 생겨 뷰에게 알려주고, 이를 기반으로 컨트롤러가 동작하는 것

## 자바스크립트에서의 옵저버 패턴
- JS에서는 프록시 객체를 통해 구현하는 방법도 있다.

### 프록시 객체 (Proxy)
- 어떤 대상의 기본적인 동작(속성 접근, 할당, 순회, 열거, 함수 호출 등)의 작업을 가로챌 수 있는 객체를 의미한다.
- JS에서 프록시 객체는 두 개의 매개변수를 가진다.
  1. target: 프록시할 대상
  2. handler: 프록시 객체의 target 동작을 가로채서 정의할 동작들이 정해져있는 함수

### 프록시 객체 구현
```js
const handler = {
    get: function(target, name) {
        return name === 'name' ? `${target.a} ${target.b}` : target[name];
    }
}

const proxy = new Proxy({ a: 'user', b: 'is developer' }, handler);
console.log(proxy.name); // user is developer
```
- new Proxy로 선언한 proxy 객체의 a, b라는 속성에 특정 문자열을 담아 handler에 name이라는 속성에 접근할 때 a,b를 합쳐 문자열로 만들게끔 구현한 것이다.
- proxy라는 변수에 name이라는 속성을 선언하지 않았음에도 proxy.name으로 name 속성에 접근하려고 할 때, 그 부분을 가로채 문자열을 만들어 반환하는 것이다.

### 프록시 객체를 이용해 옵저버 패턴 구현하기
```js
function createReactiveObject(target, callback) {
    const proxy = new Proxy(target, {
        set(obj, prop, value) {
            if(value !== obj[prop]) {
                const prev = obj[prop];
                obj[prop] = value;
                callback(`${prop}가 [${prev}]에서 [${value}]로 변경되었습니다.`);
            }
            return true;
        }
    });
    return proxy;
}

const a = {
    'user': 'frontend 개발자'
}
const b = createReactiveObject(a, console.log);
b.user = 'frontend 개발자';
b.user = 'backend 개발자';

// user가 frontend 개발자에서 backend 개발자로 변경되었습니다.
```
- 프록시 객체의 get()함수는 속성과 함수에 대한 접근을 가로채며, has()함수는 in연산자의 사용을 가로챈다.
- set()함수는 속성에 대한 접근을 가로챈다.
- set()함수를 통해 속성에 대한 접근을 가로채 user라는 속성이 변화하는 것을 감시하는 것이다.

### vue.js 3.0 에서 나타나는 옵저버 패턴
- 'ref'나 'reactive'로 정의 시, 해당 값이 변경되었을 때 자동으로 DOM의 값이 업데이트 된다.
- 이는 프록시 객체를 이용한 옵저버 패턴을 이용해 구현한 것이다.

## 프록시 패턴, 프록시 서버
- 프록시 객체는 프록시 패턴이 녹아들어 있는 객체이다.

### 프록시 패턴
- 대상 객체에 접근하기 전, 그 접근에 대한 흐름을 가로채 대상 객체 앞단의 인터페이스 역할을 하는 디자인 패턴을 의미한다.
- 이는 객체의 속성, 변환 등을 보완하고 보안, 데이터 검증, 캐싱, 로깅에 사용한다.

- 프록시 서버에서의 캐싱?
  - 캐시 안에 정보를 보관하여 이를 활용하는 것으로, 불필요한 외부 연결이 줄어 트래픽을 줄일 수 있다.

### 프록시 서버
- 서버, 클라이언트 사이에서 클라이언트가 자신을 통해 다른 네트워크 서비스에 간접적으로 접속할 수 있게 해주는 컴퓨터 시스템 or 응용 프로그램을 의미한다.

### CORS와 프론트엔드의 프록시 서버
- CORS(Cross-Origin-Resource-Sharing)는 서버가 웹 브라우저에서 리소스를 로드할 때, 다른 origin을 통해 로드하지 못하게 하는 HTTP 헤더 기반 메커니즘을 의미한다.
- 서버와 통신 시 CORS 에러가 자주 발생하며, 이를 해결하기 위한 방법으로 프론트엔드에거 '프록시 서버'를 만들기도 한다.
  - ex) 포트 번호가 달라 CORS에러가 발생한다.

- origin
  - 프로토콜과 호스트 이름, 포트의 조합

