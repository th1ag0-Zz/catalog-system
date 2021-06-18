import styled from 'styled-components';

export const Container = styled.div`
  width: 400px;
  height: 60px;
  border: 1px solid black;
  border-radius: 8px;
  display: ${props => (props.isDeleted ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  margin-bottom: 20px;

  @media (max-width: 420px) {
    width: 90%;
  }
`;

export const TitleProduct = styled.p`
  font-size: 17px;
  font-weight: 500;
  color: #21201e;
`;

export const DeleteButton = styled.button`
  padding: 8px 10px;
  background-color: #e01919;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  font-size: 15px;
  color: white;
`;
