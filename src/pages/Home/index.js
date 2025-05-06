/* eslint-disable no-nested-ternary */
import { Container } from './styles';

import useHome from './useHome';

import ContactsList from './components/ContactsList';
import EmptyList from './components/EmptyList';
import ErrorStatus from './components/ErrorStatus';
import Header from './components/Header';
import InputSearch from './components/InputSearch';
import Modal from '../../components/Modal';
import Loader from '../../components/Loader';
import SearchNotFound from './components/SearchNotFound';

export default function Home() {
  const {
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
  } = useHome();

  const hasContacts = !hasError && contacts.length > 0;
  const isListEmpty = !hasError && !hasContacts && !isLoading;
  const isSearchEmpty = !hasError && hasContacts && filteredContacts.length < 1;

  return (
    <Container>
      <Loader isLoading={isLoading} />

      {hasContacts && (
        <InputSearch
          searchTerm={searchTerm}
          onChange={handleChangeSearchTerm}
        />
      )}

      <Header
        hasError={hasError}
        contactListLength={contacts.length}
        filteredContactListLength={filteredContacts.length}
      />

      {hasError && <ErrorStatus onTryAgain={handleTryAgain} />}
      {isListEmpty && <EmptyList />}
      {isSearchEmpty && <SearchNotFound searchTerm={searchTerm} />}

      {hasContacts && (
        <ContactsList
          orderBy={orderBy}
          filteredContacts={filteredContacts}
          onToggleOrderBy={handleToggleOrderBy}
          onOpenDeleteModal={handleOpenDeleteModal}
        />
      )}

      <Modal
        danger
        confirmLabel="Deletar"
        isLoading={isLoadingDelete}
        title={`Tem certeza que deseja remover o contato "${contactToBeDeleted?.name}"?`}
        visible={isDeleteModalOpen}
        onCancel={handleCloseDeleteModal}
        onConfirm={handleDeleteContact}
      >
        <p>Esta ação não poderá ser desfeita!</p>
      </Modal>
    </Container>
  );
}
