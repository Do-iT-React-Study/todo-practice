import React from "react";
import styled from "styled-components";

export const TodoTemplate = ({children}) => {
    return (
        <TemplateBox>
            <div className="app-title">일정 관리</div>
            <div className="content">{children}</div>
        </TemplateBox>
    );
};

const TemplateBox = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    

    .app-title {
        background:#22b8cf;
        color: white;
        height: 4rem;
        font-size: 1.5rem;

        display: flex;
        justify-content: center;
        align-items: center;
    
    .content {
        color: white;
    }
}
`;

