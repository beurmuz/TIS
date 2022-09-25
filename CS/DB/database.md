# Database와 DBMS

## Database (DB, DataBase)

- 일정한 규칙을 통해 구조화되어 저장되는 **데이터의 모음, 모음집**
- 실시간 접근, 동시 공유가 가능함

## DBMS (DataBase Management System)

- **데이터베이스를 제어, 관리, 통합하는 시스템**
- DB안에 있는 데이터들은 특정 DBMS마다 정의된 쿼리 언어를 통해 CRUD 등을 수행할 수 있음

> ✅ CRUD: Create(생성), Read(읽기), Update(수정), Delete(삭제)

<img src='./img/concept_01.JPG' width='300px'>

- DB 위에 DBMS, DBMS위에 응용 프로그램이 있으며, 이러한 구조를 기반으로 데이터를 주고받음

# Database의 종류

## 1. 관계형 데이터베이스 (RDBMS)

- 행과 열이 있는 표 형식 데이터를 저장하는 형태의 데이터베이스
- `SQL`이라는 언어로 조작함
  - SQL은 각각의 제품에 특화된 SQL을 사용함
- ex) MySQL, PostgreSQL, Oracle, SQL Server, MSSQL 등
- ex) `MySQL - SQL`, `Oracle - PL/SQL`, `SQL Server - T-SQL`

### 1) MySQL

- 대부분의 OS와 호환되며, 가장 많이 쓰이는 데이터베이스
- 대용량 데이터베이스를 위해 설계되어 있고 롤백, 커밋, 이중 암호 지원 보안 등의 기능을 제공함

### 2) PostgreSQL

- SQL뿐만 아니라 JSON을 이용해 데이터에 접근할 수 있음
- 지정 시간에 복구하는 기능, 로깅, 접근제어, 중첩된 트랜잭션, 백업 등이 가능함

## 2. NoSQL 데이터베이스

- Not only SQL라는 말에서 생겨난 데이터베이스
- SQL을 사용하지 않는 데이터베이스
- ex) MongoDB, redis 등

### 1) MongoDB

- JSON을 통해 데이터에 접근할 수 있음
- Binary JSON(BSON) 형태로 데이터가 저장되며 키-값 데이터 모델에서 확장된 도큐먼트 기반의 데이터베이스
- 확장성이 좋고 빅데이터 저장 시 좋음
- 스키마를 정해놓지 않고도 데이터 삽입이 가능함
- 도큐먼트를 생성할 때마다 유니크한 값인 `ObjectID`가 생성됨

### 2) redis

- 인메모리 데이터베이스이자 키-값 데이터 모델 기반의 데이터베이스
- 기본적인 데이터 타입은 String(문자열)
- 실시간으로 데이터를 제공해야하는 서비스에 주로 사용됨
