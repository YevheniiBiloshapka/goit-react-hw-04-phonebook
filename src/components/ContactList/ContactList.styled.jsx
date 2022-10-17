import styled from 'styled-components';

export const List = styled.ul`
  filter: drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.2));
  border-radius: 6px;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 10px 16px;
  background: #ffffff;
  border-bottom: 1px solid #c5c5c5;

  font-size: 14px;
  line-height: 14px;
  letter-spacing: 0.03em;
  color: #1f3349;
  font-weight: 600;
  & span {
    font-weight: 400;
  }
  &:hover {
    background-color: #daf5ff;
  }
`;

export const Button = styled.button`
  border: none;
  padding: 0px;
  color: #1f3349;
  background: none;

  & svg {
    height: 20px;
    width: 20px;
  }
  &:hover {
    color: #2b97c2;
  }
`;
export const Results = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #1f3349;
  margin-bottom: 10px;
`;
export const Error = styled.p`
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
  color: #f15353;
  margin-bottom: 10px;
`;
