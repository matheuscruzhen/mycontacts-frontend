import { useCallback, useEffect, useMemo, useState } from 'react';

import toast from '../../utils/toast';
import ContactsService from '../../services/ContactsService';

export default function useHome() {
  const [contacts, setContacts] = useState([]);
  const [orderBy, setOrderBy] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [contactToBeDeleted, setContactToBeDeleted] = useState(null);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);

  const filteredContacts = useMemo(
    () =>
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [contacts, searchTerm]
  );

  const loadContacts = useCallback(async () => {
    try {
      setIsLoading(true);

      const contactsList = await ContactsService.listContacts(orderBy);

      setHasError(false);
      setContacts(contactsList);
    } catch (error) {
      setHasError(true);
      setContacts([]);
    } finally {
      setIsLoading(false);
    }
  }, [orderBy]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  function handleToggleOrderBy() {
    setOrderBy((prevState) => (prevState === 'asc' ? 'desc' : 'asc'));
  }

  function handleChangeSearchTerm(event) {
    setSearchTerm(event.target.value);
  }

  function handleTryAgain() {
    loadContacts();
  }

  function handleOpenDeleteModal(contact) {
    setContactToBeDeleted(contact);
    setIsDeleteModalOpen(true);
  }

  function handleCloseDeleteModal() {
    setIsDeleteModalOpen(false);
    setContactToBeDeleted(null);
  }

  async function handleDeleteContact() {
    try {
      setIsLoadingDelete(true);
      await ContactsService.deleteContact(contactToBeDeleted.id);
      setContacts((prevState) =>
        prevState.filter((contact) => contact.id !== contactToBeDeleted.id)
      );
      handleCloseDeleteModal();
      toast({ type: 'success', text: 'Contato deletado com sucesso!' });
    } catch {
      toast({ type: 'danger', text: 'Erro ao deletar o contato!' });
    } finally {
      setIsLoadingDelete(false);
    }
  }

  return {
    orderBy,
    contacts,
    contactToBeDeleted,
    filteredContacts,
    searchTerm,
    hasError,
    isLoading,
    isLoadingDelete,
    isDeleteModalOpen,
    handleTryAgain,
    handleToggleOrderBy,
    handleOpenDeleteModal,
    handleChangeSearchTerm,
    handleCloseDeleteModal,
    handleDeleteContact,
  };
}
