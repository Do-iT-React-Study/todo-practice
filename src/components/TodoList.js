import styled from "styled-components";
import { TodoListitem } from "./TodoListitem";

export const TodoList = () => {

    return (
    <ListBox>
        <TodoListitem/>
        <TodoListitem/>
        <TodoListitem/>
        <TodoListitem/>
    </ListBox>
    );
};

const ListBox = styled.div`
    min-height: 320px;
    max-height: 513px;
`;