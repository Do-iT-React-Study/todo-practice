import {MdAdd} from "react-icons/md";
import styled from "styled-components";


export const TodoInsert = () => {
    return <InsertBox>
        <input placeholder="할 일을 입력하세요"/>
        <button>
        <MdAdd/>
        </button>
    </InsertBox>;
};

const InsertBox = styled.div`
    display:flex;
    background: #495057;

    input {
        background: none;
        outline:none;
        border:none;

        padding: 0.5rem;
        font-size: 1.12rem;
        line-height: 1.5;
        color:white;

        &::placeholder{
            color: #dee2e6;

        }
        flex: 1; // 버튼 속성 제외하고 전체를 차지함
    }

    button{
        background: none;
        outline: none;
        border: none;
        
        background: #868e96;
        color: white;
        padding-left:1rem;
        padding-right: 1rem;
        font-size:2rem;

        //가운데 정렬 3개
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        &:hover{
            background: black;
        }
    }

`;  