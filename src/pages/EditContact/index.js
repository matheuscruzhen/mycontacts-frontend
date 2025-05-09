import React from 'react';

import useEditContact from './useEditContact';

import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function EditContact() {
  const { isLoading, contactName, contactFormRef, handleSubmit } =
    useEditContact();

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
          onSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
