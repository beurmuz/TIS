# 디자인 패턴
- 프로그램을 설계할 때 발생했던 문제점들을 해결할 수 있도록 '규약' 형태로 만들어 놓은 것이다.

# Singleton Pattern (싱글톤 패턴)
- **하나의 크래스에 오직 하나의 인스턴스만 가지는 패턴**이다.

## 특징
- 보통 DB 연결 모듈에 많이 사용한다.
- 하나의 인스턴스를 만들어 놓고, 해당 인스턴스를 다른 모듈들이 공유하여 사용하기 때문에
  - 인스턴스를 생성할 때 드는 비용이 줄어든다. (장점)
  - 그러나, 의존성은 높아진다. (단점)

## JavaScript의 싱글톤 패턴
- 리터럴 `{}` or `new Object`로 객체를 생성함으로써 싱글톤 패턴을 구현할 수 있다.
  - `{}` or `new Object`로 객체 생성 시 다른 어떤 객체와도 같지 않기 때문이다.

### ex1
```js
const obj = {
    a: 27
}

const obj2 = {
    a: 27
}

console.log(obj === obj2); // false
```
- obj와 obj2는 서로 다른 객체이므로 a===b는 false이다.

### ex2
```js
class Singleton {
    constructor() {
        if(!Singleton.instance) {
            Singleton.instance = this;
        }
        return Singleton.instance;
    }

    getInstance() {
        return this.instance;
    }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b); // true
```
- a와 b는 하나의 인스턴스를 가지는 같은 클래스에서 생성된 것이므로 a===b 는 true이다.

### ex3) 데이터베이스 연결 모듈
```js
const URL = 'mongodb: //localhost:8080/exapp'
const createConnection = (url) => ({ "url": url });

class DB {
    constructor(url) {
        if (!DB.instance) {
            DB.instance = createConnection(url);
        }
        return DB.instance
    }

    connect() {
        return this.instance
    }
}

const a = new DB(URL);
const b = new DB(URL);
console.log(a === b); // true
```
- DB.instance라는 하나의 인스턴스를 기반으로 a, b가 생성된 것이므로 a === b는 true이다. 
- 이로써 데이터베이스 연결에 관한 인스턴스 생성 비용을 절약할 수 있다.


## 싱글톤 패턴의 단점
- TDD(Test Driven Development)시 큰 문제가 된다.
  - TDD시 단위 테스트를 주로 하는데, 단위 테스트는 테스트가 서로 독립적이어야 하며,
  - 테스트를 어떤 순서로든 실행할 수 있어야 한다.
- 하지만 싱글톤 패턴은 미리 생성된 하나의 인스턴스를 기반으로 구현하는 패턴이므로, 각 테스트마다 '독립적인'인스턴스 생성이 어렵다.

## 의존성 주입 문제 (DI, Dependency Injection)
- 싱글톤 패턴은 사용하기 쉽고 굉장히 실용적이나, 모듈 간의 결합도를 강하게 만들 수 있다.
- 이때 의존성 주입을 통해 모듈 간의 결합도를 낮출 수 있다. 

### 의존성 (= 종속성)
- A가 B에 의존성이 있다는 것은, B가 변하면 A도 변해야한다는 것이다.

- 메인 모듈과 하위 모듈 사이에 의존성 주입자를 추가함으로써 메인 모듈이 '간접'적으로 의존성을 주입하게끔 만드는 방법이다. 
- 이로써 메인(상위) 모듈과 하위 모듈에 대한 의존성이 떨어지게 된다. (= 디커플링 된다)

### 의존성 주입의 장점
- 모듈들을 쉽게 교체할 수 이쓴ㄴ 구조가 되어 테스팅과 마이그레이션이 수월해진다. 
- 또한 구현 시 추상화 레이어를 넣고 이를 기반으로 구현체를 넣어주기에
  - 어플리케이션 의존성 방향이 일관되고,
  - 어플리케이션을 쉽게 추론할 수 있으며
  - 모듈 간의 관계들이 보다 더 명확해진다.

### 의존성 주입의 단점
- 모듈들이 더 분리되어 클래스 수가 늘어나 복잡성이 증가될 수 있다. -> 런타임 패널티가 생기기도 한다.

### 의존성 주입 원칙
- 상위 모듈은 하위 모듈에서 어떠한 것도 가져와서는 안된다.
- 둘다 추상화에 의존해야하며, 추상화는 세부 사항에 의존하지 않아야 한다.