import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  gap: 15px
  width: 100%;
  color: #800080;

  @media (min-width: 768px) {
    width: 300px;
     margin-left: auto;
    margin-right: auto;
  }
`;

export const Input = styled.input`
  border-color: #800080;
  border-radius: 10px;
  width: 120px;
`;
