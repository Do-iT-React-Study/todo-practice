# Todo Application 만들기

<br />

## 일정 관리 애플리케이션

![image](https://github.com/Do-iT-React-Study/todo-practice/assets/80542421/4ce972b6-eec5-434e-bab0-bb85b9a636ac)

<br />

## 일정 관리 애플리케이션 개발 흐름

### 1. 프로젝트 준비하기

### 2. UI 구성하기

- TodoTemplate : 화면을 가운데에 정렬시키는 역할, 앱 타이틀 보여줌, children으로 내부 JSX를 props로 받아 와서 렌더링
- TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트, state를 통해 input의 상태를 관리
- TodoListItem : 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트, todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI 보여줌
- TodoList : todos 배열을 props로 받아 온 후, 배열 내장 함수 map을 활용해 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌

### 3. 기능 구현하기
