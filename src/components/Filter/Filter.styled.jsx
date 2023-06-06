import styled from "styled-components";

export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
`;
export const Input = styled.input `
    display: block;
    width: 100%;
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