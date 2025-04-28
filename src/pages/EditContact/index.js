import React, { useEffect, useRef, useState } from 'react';
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
  const [contactName, setContactName] = useState('');
  const contactFormRef = useRef(null);

  useEffect(() => {
    async function loadContact() {
      try {
        const contact = await ContactsService.getContactById(id);
        contactFormRef.current.setFieldsValues(contact);
        setContactName(contact.name);
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
