import { Link } from 'react-router-dom';
import { Container, Content, OptionBox } from './styles';

function Home() {
  return (
    <Container>
      <Content>
        <Link to="/create-product">
          <OptionBox>Cadastrar Produto</OptionBox>
        </Link>

        <Link to="/my-products">
          <OptionBox>Meus Produtos</OptionBox>
        </Link>
      </Content>
    </Container>
  );
}

export default Home;
