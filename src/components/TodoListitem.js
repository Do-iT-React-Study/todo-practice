import {
    MdCheckBox,
    MdCheckBoxOutlineBlank,
} from 'react-icons/md'
import styled from 'styled-components';
export const TodoListitem = () => {

    return (
        <ItemBox>
            <div className="checkbox">
            <MdCheckBoxOutlineBlank/>
            <div className='text'>to do</div>
            </div>
            <div className = "remove">
            <MdCheckBox/>
            </div>
        </ItemBox>
    );
};

const ItemBox = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid skyblue;

    .checkbox {
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 20px;
        svg {
            font-size: 1.5rem;
        }

        .text {
            margin-left: 0.5rem;
            text-align: center;
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
