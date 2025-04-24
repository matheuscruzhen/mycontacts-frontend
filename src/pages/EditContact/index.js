import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import toast from '../../utils/toast';

import Loader from '../../components/Loader';
import PageHeader from '../../components/PageHeader';
import ContactForm from '../../components/ContactForm';
import ContactsService from '../../services/ContactsService';

export default function EditContact() {
  const { id } = useParams();
  const history = useHistory();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadContact() {
      try {
        const contactData = await ContactsService.getContactById(id);

        setIsLoading(false);
      } catch {
        history.push('/');
        toast({
          type: 'danger',
          text: 'Contato não encontrado!',
        });
      }
    }
    loadContact();
  }, [id, history]);

  function handleSubmit() {
    //
  }

  return (
    <>
      <Loader isLoading={isLoading} />
      <div>
        <PageHeader title="Editar Mateus Silva" />

        <ContactForm buttonLabel="Salvar alterações" onSubmit={handleSubmit} />
      </div>
    </>
  );
}
