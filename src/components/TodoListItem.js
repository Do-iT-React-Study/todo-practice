import styled from "styled-components";

import {
    MdCheckBoxOutlineBlank,
    MdCheckBox,
    MdRemoveCircleOutline,
  } from 'react-icons/md';

export const TodoListItem = () => {
    return (
    <ItemBox>
        <div className='checkbox'>
            <MdCheckBoxOutlineBlank />
            <div className='text'>to do를 적을거에요.</div>
        </div>
        <div className='remove'>
            <MdRemoveCircleOutline />
        </div>
    </ItemBox>
    );
};

const ItemBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    font-size: 1rem;

    .checkbox {
        cursor: pointer;
        display: flex;
        align-items: center;

        svg{
            font-size: 1.5rem;
        }

        .text {
            margin-left: 0.5rem;
            flex: 1;
        }

        //체크했을때

        &.checked {
            svg{
                color: #22b8cf;
            }

            .text {
                color: #abd5bd;
                text-decoration: line-through;
            }
        }
    }

    .remove {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #ff6b6b;
        cursor: pointer;
        
        &:hover {
            color: #ff8787;
        }
    }

    & + & {
        border-top:1px solid #eee;
    }

`;


