import styled from "styled-components"
import { TodoListItem } from "./TodoListItem";

export const TodoList = () =>{
    return <ListBox>
    <TodoListItem />
    <TodoListItem />
    <TodoListItem />

</ListBox>;

}
const ListBox = styled.div`
min-height: 320px;
max-height: 513px;
`