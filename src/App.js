import logo from './logo.svg';
import './App.css';
import { TodoTemplate } from './components/TodoTemplate';
import { TodoInsert } from './components/TodoInsert';
import { TodoList } from './components/TodoList';
import { useRef, useState } from 'react';

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

  const nextId = useRef(4);

  const onInsert = (text) => {
    const newData = {
      id:nextId.current,
      text,
      checked: false,
    };
    setTodos(todos.concat(newData));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((item) => item.id != id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((item) =>
      item.id == id ? {...item, checked : !item.checked} : item
      )
    );
  };

  return <TodoTemplate>
    <TodoInsert inputInsert={onInsert} />
    <TodoList todo={todos} onRemove={onRemove} onToggle={onToggle}/>
  </TodoTemplate>;
}

export default App;
