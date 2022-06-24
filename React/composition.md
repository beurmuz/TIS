# Composition 
- 여러 개의 컴포넌트를 합쳐서 새로운 컴포넌트를 만드는 것 (합성)
- 컴포지션은 조합 방법에 따라 사용 기법이 나뉨 

# Composition의 종류
## 1. Containment
- 하위 컴포넌트를 포함하는 형태의 합성 방법
- props에 들어있는 `children`이란 prop을 사용해서 조합함
- ex) 보통 sidebar나 dialog같은 box형태의 컴포넌트는 자신의 하위 컴포넌트를 미리 알 수 없음

## 2. Specialization
- 범용적인 개념을 구별되게끔 구체화 하는 것
- 기존의 객체지향 언어에서는 상속(Inheritance)을 사용하여 이를 구현하지만, 리액트에서는 합성(Composition)을 사용하여 이를 구현함

> ✅ Containment와 Specialization 같이 사용할 수 있다!

# Inheritance
- 다른 컴포넌트로부터 상속을 받아서 새로운 컴포넌트를 만드는 것
- 그러나 Inheritance 보다는 Composition 사용을 더 권장한다고 함

> ✅ 복잡한 컴포넌트를 쪼개서 여러 개의 컴포넌트로 만들고, 만든 컴포넌트들을 조합해서 새로운 컴포넌트를 만들자!