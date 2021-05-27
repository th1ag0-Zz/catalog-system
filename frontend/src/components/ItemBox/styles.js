import styled from 'styled-components';

import colors from '../../utils/colors'

export const ItemBoxContainer = styled.div`
  width: 100%;
  padding: .9rem;
  background-color: white;
  border-radius: 5px;
  margin-bottom: 1rem;

  @media (min-width: 700px) {
    max-width: 360px;
  }
`

export const ImageContainer = styled.img`
  width: 100%;
`

export const ItemTitle = styled.h1`
  font-size: 1.65rem;
  color: ${colors.text_title};
  margin: .8rem 0;

`

export const ItemPrice = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${colors.text_title}
`