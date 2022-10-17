import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 30px;
  gap: 30px;
`;

export const Box = styled.div`
  width: 334px;
  padding: 23px;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(126, 147, 255, 0.2);
  border-radius: 6px;

  & h1,
  h2 {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 21px;
    margin-bottom: 11px;

    letter-spacing: 0.01em;

    color: #1f3349;
  }
`;
export const Results = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #1f3349;
  margin-bottom: 10px;
`;
