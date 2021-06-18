import { useState } from 'react';

import {
  ImageContainer,
  ItemBoxContainer,
  ItemPrice,
  ItemTitle,
} from './styles';

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

function ItemBox({ title, price, images }) {
  const [slideFocus, setSlideFocus] = useState(0);

  function handleSlide(value) {
    setSlideFocus(value);
  }

  const numberPrice = Number(price);

  const formatPrice = numberPrice.toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  });

  return (
    <ItemBoxContainer>
      <Carousel value={slideFocus} onChange={handleSlide}>
        {images.map(image => (
          <ImageContainer
            key={image}
            src={`http://localhost:3333/api/products/images/${image}`}
          />
        ))}
      </Carousel>
      <Dots value={slideFocus} onChange={handleSlide} number={images.length} />

      <ItemTitle>{title}</ItemTitle>
      <ItemPrice>{formatPrice}</ItemPrice>
    </ItemBoxContainer>
  );
}

export default ItemBox;
