import { useEffect, useState } from 'react';

import { Container } from './styles';

import api from '../../services/api';
import '../../main.css';

import ItemBox from '../../components/ItemBox';

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchApi() {
      const response = await api.get('api/products');
      setData(response.data);
    }
    fetchApi();
  }, []);

  return (
    <Container>
      {data.length === 0 && <h1>Nenhum produto disponível no momento</h1>}

      {data.map(item => (
        <ItemBox
          key={item.product}
          title={item.product}
          price={item.price}
          images={item.images}
        />
      ))}
    </Container>
  );
}

export default Home;
