import styled from "styled-components"
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({todos, onRemove, onToggle}) =>{
    //console.log(todo);

    return (
    <ListBox>
    {todos.map((item) => (
    <TodoListItem key = {item.id} todo={item} onRemove={onRemove} onToggle = {onToggle}/>
    ))}
    </ListBox>
    );
};
const ListBox = styled.div`
min-height: 320px;
max-height: 513px;
overflow-y: auto;
`;