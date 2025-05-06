import PropTypes from 'prop-types';
import { Container } from './styles';

export default function InputSearch({ searchTerm, onChange }) {
  return (
    <Container>
      <input
        value={searchTerm}
        onChange={onChange}
        type="text"
        placeholder="Pesquisar contato"
      />
    </Container>
  );
}

InputSearch.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
