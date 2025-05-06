import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function Presentation({
  isLoading,
  contactName,
  contactFormRef,
  onSubmit,
}) {
  return (
    <>
      <Loader isLoading={isLoading} />
      <div>
        <PageHeader
          title={isLoading ? 'Carregando...' : `Editar ${contactName}`}
        />

        <ContactForm
          ref={contactFormRef}
          buttonLabel="Salvar alterações"
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
}

Presentation.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  contactName: PropTypes.string.isRequired,
  contactFormRef: PropTypes.shape().isRequired,
  onSubmit: PropTypes.func.isRequired,
};
