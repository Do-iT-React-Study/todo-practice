import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md';
export const TodoInsert = () => {
  return (
    <InsertBox>
      <form>
        <input placeholder="할 일을 입력하세요" />
        <button>
          <MdAdd />
        </button>
      </form>
    </InsertBox>
  );
};

const InsertBox = styled.div`
  display: flex;
  background: #395057;

  input {
    background: none;
    outline: none;
    border: none;

    padding: 0.5rem;
    font-size: 1.125rem;
    line-height: white;
    color: white;

    &::placeholder {
      color: #dee2e6;
    }
  }

  button {
    background: #868e96;
    outline: none;
    border: none;
    color: white;
    width: 50px;
    font-size: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
      background: pink;
    }
  }
`;
