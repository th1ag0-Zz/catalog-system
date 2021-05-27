import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionBox = styled.button`
  margin: 18px 0;
  padding: 0 12px;
  height: 32px;
  border: none;
  border-radius: 4px;
  background-color: #4287f5;
  color: white;
  font-size: 18px;
  cursor: pointer;
  width: 100%;
`;