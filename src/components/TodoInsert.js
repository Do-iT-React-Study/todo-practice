import {MdAdd} from "react-icons/md"
import styled from 'styled-components';

export const TodoInsert = () => {
    return (
    <InsertBox>
        <input placeholder="할 일을 입력하세요"/>
        <button>
            <MdAdd />
        </button>
    </InsertBox>
    );
};

const InsertBox = styled.div`
    display: flex;
    background: #495057;

    input {
        background: none;
        outline: none;
        border: none;

        padding: 0.5rem;
        font-size: 1.125rem;
        line-height:1.5;
        color:white;

        &::placeholder {
            color: #dee2e6;
        }

        flex: 1;

    }

    button {
        background:#868e96;
        outline: none;
        border: none;
        color: white;
        width: 50px;
        font-size: 2rem;
        // 정렬
        display: flex;
        justify-content: center;
        align-items: center;

        cursor: pointer;

        &:hover {
            background: saddlebrown;
            
        }

    }
`;