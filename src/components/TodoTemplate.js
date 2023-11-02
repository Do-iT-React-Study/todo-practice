import React from 'react';
import styled from 'styled-components';
//import './TodoTemplate.css'

export const TodoTemplate = ({children}) => {

    return (
        <TemplateBox>
        <div className = 'app-title'>일정관리</div>
        <div className = 'content'>{children}</div>
        </TemplateBox>
        
    );

}

const TemplateBox = styled.div`
    width: auto;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3px;
    margin-bottom: 5px;
    border-radius: auto;
    border: 4px solid skyblue;

    .app-title {
        background: skyblue;
        color: withe;
        height: 4rem;
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .content {
        background: white;
    }
`;

