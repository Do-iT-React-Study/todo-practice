import styled from 'styled-components';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  return (
    <ListBox>
      <TodoListItem />
      <TodoListItem />
      <TodoListItem />
    </ListBox>
  );
};

const ListBox = styled.div`
  min-height: 320px; //최소높이
  max-height: 513px; //최대높이
`;
