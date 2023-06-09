import styled from "styled-components";

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
    width: 100%;
    margin-right: auto;
    margin-left: auto;
`;
export const Input = styled.input `
    display: block;
    
    padding: 10px;
    font-size: 16px;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
    &:focus {
        border-color: #4caf50;
    }

    &:invalid {
        border-color: #f44336;
    }

    &::-webkit-input-placeholder {
        color: #ccc;
    }

    &::-moz-placeholder {
        color: #ccc;
    }
`