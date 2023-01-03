# 객체지향의 원칙

## 1. Encapsulation (캡슐화)

- 서로 관련있는 data와 function을 object 안에 담아두고 외부에서 보일 필요가 없는 데이터를 숨겨 캡슐화하는 것
- 고양이의 상태를 외부에서 변경할 수는 없지만, 고양이를 놀아주거나 먹이를 주는 외부 행동을 통해 내부 상태를 바꿀 수 있다.

## 2. Abstraction (추상화)

- 내부의 복잡한 기능을 전부 이해하지 않아도, 외부에서는 간단한 Interface를 통해 object를 사용할 수 있다.

## 3. Inheritance (상속)

- 잘 정의해둔 class를 재사용 할 수 있다.
- 보통 부모-자식의 관계라고 말한다.
  - 부모 (parent, super, base)
  - 자식 (Child, sub, derived)
- **IS-A 관계**: '상속을 받은 자식 class는 부모 class'
  - ex) HTMLElement는 Element라고 말할 수 있다. Element는 Node이다. Node는 EventTarget이다... 등 이렇게 자식 => 부모, 자식 => 부모의 관계이다.

## 4. Polymorphism (다형성)

- 다양한 형태
- 상속을 통해 만들어진 Object들은 어떤 Object냐에 상관없이 공통된 함수에 접근, 호출이 가능하다.
