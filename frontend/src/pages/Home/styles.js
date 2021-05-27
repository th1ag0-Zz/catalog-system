import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: .8rem .8rem 0;

  @media (min-width: 700px) {
    margin: 0 auto;
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
  }
`;

