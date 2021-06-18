import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  font-size: 18px;
`;

export const InputName = styled.input`
  font-size: 18px;
  padding: 4px 10px;
  width: 100%;
  margin-bottom: 15px;
`;

export const InputPrice = styled.input`
  font-size: 18px;
  padding: 4px 10px;
  width: 100%;
  margin-bottom: 15px;
`;

export const InputImageContainer = styled.div`
  margin: 5px 0 10px;
  border: 1px solid gray;

  width: 100%;
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputImage = styled.input`
  margin-bottom: 15px;
`;

export const MoreImagesButton = styled.div`
  border: none;
  padding: 10px;
  border-radius: 8px;
  background-color: #32a852;
  color: white;

  cursor: pointer;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  font-size: 18px;
  margin: 20px 0 10px;
  background-color: #0366fc;
  color: white;
`;
