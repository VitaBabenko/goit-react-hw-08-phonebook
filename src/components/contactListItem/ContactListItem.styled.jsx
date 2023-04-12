import styled from 'styled-components';

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  color: #800080;
`;

export const Tel = styled.p`
  font-size: 18px;
  color: #800080;
`;

export const Btn = styled.button`
  display: block;
  align-content: center;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  padding: 3px 8px;
  color: #800080;
  border-color: #800080;
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: #ff00ff;
  }
`;
