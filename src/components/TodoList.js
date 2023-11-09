import styled from "styled-components";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todo, onRemove, onToggle }) => {
    return (
        <ListBox>
        {todo.map((item) => (
            <TodoListItem key={item.id} 
            todo={item} 
            onRemove={onRemove} 
            onToggle={onToggle}/>
        ))}
    </ListBox>
    );
};

const ListBox = styled.div`
    min-height: 320px; //최소높이
    max-height: 513px; //최대높이
    overflow-y: auto;

`;