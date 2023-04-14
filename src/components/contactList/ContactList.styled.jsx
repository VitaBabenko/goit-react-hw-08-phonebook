import styled from 'styled-components';

export const Title = styled.h2`
  margin-top: 30px;
  text-align: center;
  color: #800080;
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 20px;
  padding-left: 10px;
  padding-right: 10px;

  @media (min-width: 768px) {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 40px;
    padding-right: 40px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;
