import React from 'react';

import useNewContact from './useNewContact';

import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';

export default function NewContact() {
  const { handleSubmit, contactFormRef } = useNewContact();

  return (
    <div>
      <PageHeader title="Novo contato" />

      <ContactForm
        buttonLabel="Cadastrar"
        onSubmit={handleSubmit}
        ref={contactFormRef}
      />
    </div>
  );
}
