import logo from './logo.svg';
import './App.css';
import { TodoTemplate } from './components/TodoTemplate';
import { TodoInsert } from './components/TodoInsert';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '성호관에서 스터디하기',
      checked: true,
    },
    {
      id: 2,
      text: '명륜진사 정복하기',
      checked: true,
    },
    {
      id: 3,
      text: '크리스마스 준비하기',
      checked: false,
    },
  ]);

  return (
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={todos} />
    </TodoTemplate>
  );
}

export default App;
