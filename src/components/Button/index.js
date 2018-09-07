import styled from 'styled-components';


const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 14px;
  font-style: italic;
  font-weight: 100;
  overflow: hidden;
  padding: 8px 12px;
  &:disabled {
    cursor: not-allowed;
    opacity: .7;
  }
`;

export default Button;