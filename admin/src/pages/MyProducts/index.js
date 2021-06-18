import { useEffect, useState } from 'react';
import BoxProduct from '../../components/BoxProduct';
import { Container } from './styles';

import api from '../../services/api';

function MyProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get('api/products');
      setProducts(response.data);
    }
    fetchApi();
  }, []);

  return (
    <Container>
      {products.length === 0 && <h2>Nenhum produto cadastrado</h2>}

      {products.map(product => (
        <BoxProduct key={product.id} product={product} />
      ))}
    </Container>
  );
}

export default MyProducts;
