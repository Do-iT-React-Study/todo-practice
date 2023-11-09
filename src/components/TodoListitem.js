import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
    MdRemoveCircleOutline
} from 'react-icons/md'
import styled from 'styled-components';
import cn from 'classnames';
export const TodoListitem = ({todo, onRemove, onToggle}) => {

    const {id,text,checked} = todo;

    return (
        <ItemBox>
            <div className={cn('checkbox',{ checked })}
                onClick={() => onToggle(id)}
            >
            {checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            <div className='text'>{text}</div>
            </div>
            <div className = "remove"
            onClick={()=>onRemove(id)}>
            <MdRemoveCircleOutline/>
            </div>
        </ItemBox>
    );
};

const ItemBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid skyblue;
    justify-content: space-between;
    padding: 15px;

    .checkbox {
        cursor: pointer;
        display: flex;
        align-items: center;
    
        svg {
            font-size: 1.5rem;
        }

        .text {
            margin-left: 0.5rem;
            //text-align: center;
        }
        flex: 1;
        &.checked {

            svg{
                color: #22b8cf;
            }
            .text {
                color: #adb5bd;
                text-decoration: line-through;
                margin-left: 0.5rem;
            }
        }
    }

    .remove{
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        color: #ff6b6b;

        &.hover {
            color: #ff8787;
        }
    }
`;
