import { useState } from "react";
import {MdAdd} from "react-icons/md"
import styled from 'styled-components';

export const TodoInsert = ({inputInsert}) => {
    const [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const formSubmit = (e) => {
        inputInsert(value);
        setValue('');
        e.preventDefault( );
    };

    return (
    <InsertBox onSubmit={formSubmit}>
        <input 
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}/>
        <button>
            <MdAdd />
        </button>
    </InsertBox>
    );
};

const InsertBox = styled.form`
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