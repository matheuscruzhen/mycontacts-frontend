/* eslint-disable no-nested-ternary */

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Header({
  hasError,
  contactListLength,
  filteredContactListLength,
}) {
  const alignement = hasError
    ? 'flex-end'
    : contactListLength > 0
    ? 'space-between'
    : 'center';

  return (
    <Container justifyContent={alignement}>
      {!hasError && contactListLength > 0 && (
        <strong>
          {filteredContactListLength}{' '}
          {filteredContactListLength === 1 ? 'contato' : 'contatos'}
        </strong>
      )}
      <Link to="/new">Novo contato</Link>
    </Container>
  );
}

Header.propTypes = {
  hasError: PropTypes.bool.isRequired,
  contactListLength: PropTypes.number.isRequired,
  filteredContactListLength: PropTypes.number.isRequired,
};
