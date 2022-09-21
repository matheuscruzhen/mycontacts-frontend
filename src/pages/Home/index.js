import { Link } from 'react-router-dom';
import {
  Card,
  Container,
  Header,
  InputSearchContainer,
  ListContainer,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquisar contato" />
      </InputSearchContainer>
      <Header>
        <strong>3 contatos</strong>
        <Link to="/">Novo contato</Link>
      </Header>
      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="arrow" />
          </button>
        </header>
      </ListContainer>

      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>instagram</small>
          </div>
          <span>mateus@devacademy.com.br</span>
          <span>(41) 99999-9999</span>
        </div>
        <div className="actions">
          <Link to="/">
            <img src={edit} alt="edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>instagram</small>
          </div>
          <span>mateus@devacademy.com.br</span>
          <span>(41) 99999-9999</span>
        </div>
        <div className="actions">
          <Link to="/">
            <img src={edit} alt="edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>
      </Card>
      <Card>
        <div className="info">
          <div className="contact-name">
            <strong>Mateus Silva</strong>
            <small>instagram</small>
          </div>
          <span>mateus@devacademy.com.br</span>
          <span>(41) 99999-9999</span>
        </div>
        <div className="actions">
          <Link to="/">
            <img src={edit} alt="edit" />
          </Link>
          <button type="button">
            <img src={trash} alt="trash" />
          </button>
        </div>
      </Card>
    </Container>
  );
}
