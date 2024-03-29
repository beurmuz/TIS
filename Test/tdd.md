# TDD (Test-Driven Development)

- 테스트 주도 개발
- 개발(코드 작성) 전 테스트 코드를 먼저 작성하는 **방식**을 의미함

## TDD 하는 법

1. 기능을 구현하기 전에 테스트 코드를 먼저 작성한다.
2. 테스트 코드를 실행한다. (당연히 구현 전에 실행했으므로 실패함)
3. 테스트 코드가 성공할 수 있는 양에 해당하는 충분한 코드를 작성한다.
4. 그리고 다시 테스트 코드를 실행한다. (당연히 성공함)
5. 1~4를 계속 반복한다.

## TDD를 하는 이유

- 코드를 개발하기 전, 모든 요구 사항(목표)에 대해 점검 및 이해, 확인하는 시간을 가질 수 있음
- 구현 뿐만아니라 사용자의 입장에서 코드를 작성할 수 있음
  - 내부 구현보다 인터페이스 위주로 코드를 작성하기 때문에 서로 의존하지 않는 코드를 작성하면서 코드 퀄리티를 향상할 수 있음
- 시스템의 전반적인 설계가 향상됨
- 개발 집중력을 높일 수 있음
- 좋은 문서화의 효과를 가져오기 때문

## TDD는 언제 작성해야할까?

1. 요구사항이 명확할 때
2. 비지니스 로직일 때
3. 협업 시 명세서(문서) 역할이 필요할 때
4. 설계에 대한 고민이 필요할 때
