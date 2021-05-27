import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FormBox = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid gray;
  border-radius: 8px;
  text-align: center;

  & > form > input {
    width: 100%;
    margin: 5px 0 15px;
    font-size: 16px;
    padding: 5px;
  }
`

export const ButtonForm = styled.button`
  width: 100%;
  height: 32px;

  border: none;
  background-color: teal;
  color: white;
  font-weight: bold;
  border-radius: 4px;
  font-size: 16px;
`