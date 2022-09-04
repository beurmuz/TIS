# Factory Pattern (팩토리 패턴)
- 객체를 사용하는 코드에서 객체 생성 부분을 떼어내 추상화한 패턴
- 상속 관계에 있는 두 클래스에서 상위 클래스는 중요한 뼈대를, 하위 클래스는 객체 생성에 관한 구체적인 내용을 결정하는 패턴이다.

## 특징
- 상위, 하위 클래스가 분리되므로 '느슨한 결합'을 가지고
- 상위 클래스에서는 인스턴스 생성 방식에 대해 전혀 알 필요가 없어 더 많은 유연성을 가진다.
- 또한 객체 생성 로직이 분리되어 있어 유지 보수성이 높다.

## JavaScript의 팩토리 패턴

### ex1) new Object()로 생성하기
```js
const num = new Object(42);
const str = new Object('abc');

num.constructor.name; // Number
str.constructor.name; // String
```
- 즉, 전달받은 값에 따라 다른 객체를 생성하며, 인스턴스의 타입을 정한다.

### ex2) 커피 팩토리를 기반으로 라떼를 생산해보기
```js
class Latte {
    constructor() {
        this.name = "latte";
    }
}

class Espresso {
    constructor() {
        this.name = "Espresso";
    }
}

class LatteFactory {
    static createCoffee() {
        return new Latte(); // 인스턴스 생성
    }
}

class EspressoFactory {
    static createCoffee() {
        return new Latte(); // 인스턴스 생성
    }
}

const factoryList = { LatteFactory, EspressoFactory }

class CoffeeFactory {
    static createCoffee(type) { // 정적메서드 정의 
        const factory = factoryList[type];
        return factory.createCoffee();
    }
}

const main = () => {
    // 라떼를 주문함
    const coffee = CoffeeFactory.createCoffee("LatteFactory");
    // 커피 이름 출력
    console.log(coffee.name); // latte
}
```
- CoffeeFactory라는 상위 클래스가 중요한 뼈대를 결정하고, 하위 클래스인 LatteFactory가 구체적인 내용을 결정하고 있다. 
- 이는 의존성 주입으로도 볼 수 있다. 