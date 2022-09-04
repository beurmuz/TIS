# Revealing module pattern
- 즉시 실행 함수를 통해 private, public 같은 접근 제어자를 만드는 패턴을 의미한다.
- JS에는 private나 public 같은 접근 제어자가 존재하지 않고 전역 범위에서 스크립트가 실행된다.
  - 때문에 노출 모듈 패턴을 통해 private과 public 접근 제어자를 구현하기도 한다. 
- 이 원리를 이용해 만든 JS 모듈 방식에는 'CJS (CommonJS) 모듈 방식' 이 있다.
