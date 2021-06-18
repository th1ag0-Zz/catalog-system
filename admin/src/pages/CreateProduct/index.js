import { useState } from 'react';
import { Redirect } from 'react-router';
import {
  Container,
  Form,
  InputName,
  InputPrice,
  Label,
  SubmitButton,
  InputImage,
  InputImageContainer,
  MoreImagesButton,
} from './styles';

import api from '../../services/api';

function CreateProduct() {
  const [product, setProduct] = useState('');
  const [price, setPrice] = useState('');
  const [images, setImages] = useState([]);

  const [countField, setContField] = useState([Math.random()]);
  const [isRedirect, setIsRedirect] = useState(false);

  function addImageField() {
    setContField([...countField, Math.random()]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append('product', product);
    formData.append('price', price);

    images.map(image => {
      formData.append('file', image[0]);
    });

    await api.post('/products', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    setIsRedirect(true);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label>Nome do produto:</Label>
        <InputName
          type="text"
          required
          onChange={e => setProduct(e.target.value)}
        />

        <Label>Preço do produto:</Label>
        <InputPrice
          type="text"
          required
          onChange={e => setPrice(e.target.value)}
        />

        <Label>Imagens do produto:</Label>

        <InputImageContainer>
          {countField.map(item => (
            <InputImage
              key={item}
              type="file"
              required
              onChange={e => setImages([...images, e.target.files])}
            />
          ))}

          <MoreImagesButton onClick={addImageField}>
            + Adicionar outra imagem
          </MoreImagesButton>
        </InputImageContainer>

        <SubmitButton type="submit">Cadastrar</SubmitButton>
      </Form>

      {isRedirect && <Redirect to="/home" />}
    </Container>
  );
}

export default CreateProduct;
