import styled from "styled-components";
import { TodoListitem } from "./TodoListitem";

export const TodoList = ({todos, onRemove, onToggle}) => {

    console.log(todos);
    return (
    
    <ListBox>
   {todos.map((item) => (
    <TodoListitem key={item.id}  todo={item} onRemove={onRemove} onToggle={onToggle}/>
   ))}
    </ListBox>
    );
};

const ListBox = styled.div`
    min-height: 320px;
    max-height: 513px;

    overflow-y : auto;
`;