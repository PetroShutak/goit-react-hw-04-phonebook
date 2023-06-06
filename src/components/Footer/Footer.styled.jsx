import styled from 'styled-components';

export const FooterStyled = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ccc;
  color: #000;
  font-size: 16px;
  font-weight: 700;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  outline: none;
  &:focus {
    border-color: #4caf50;
  }
`;

export const FooterContent = styled.p`
    margin-bottom: 5px;
    font-weight: 700;
    font-size: 16px;
    color: #000;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
    &:focus {
        border-color: #4caf50;
    }
`;
