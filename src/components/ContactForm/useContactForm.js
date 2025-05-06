import { useState, useEffect, useImperativeHandle } from 'react';

import useErrors from '../../hooks/useErrors';
import useSafeAsyncState from '../../hooks/useSafeAsyncState';

import isEmailValid from '../../utils/isEmailValid';
import formatPhone from '../../utils/formatPhone';

import CategoriesService from '../../services/CategoriesService';

export default function useContactForm(onSubmit, ref) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [categories, setCategories] = useSafeAsyncState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useSafeAsyncState(true);

  const { errors, setError, removeError, getErrorMessageByFieldName } =
    useErrors();

  const isFormValid = name && errors.length === 0;

  useImperativeHandle(
    ref,
    () => ({
      setFieldsValues: (contact) => {
        setName(contact.name ?? '');
        setEmail(contact.email ?? '');
        setPhone(formatPhone(contact.phone) ?? '');
        setCategoryId(contact.category.id ?? '');
      },
      resetFields: () => {
        setName('');
        setEmail('');
        setPhone('');
        setCategoryId('');
      },
    }),
    []
  );

  useEffect(() => {
    async function loadCategories() {
      try {
        const categories = await CategoriesService.listCategories();

        setCategories(categories);
      } catch {
      } finally {
        setIsLoadingCategories(false);
      }
    }

    loadCategories();
  }, [setCategories, setIsLoadingCategories]);

  function handleNameChange(event) {
    setName(event.target.value);

    if (!event.target.value) {
      setError({ field: 'name', message: 'Nome é obrigatório' });
    } else {
      removeError('name');
    }
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);

    if (event.target.value && !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePhoneChange(event) {
    setPhone(formatPhone(event.target.value));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit({
      name,
      email,
      phone,
      categoryId,
    });
    setIsSubmitting(false);
  }

  return {
    name,
    email,
    phone,
    categories,
    categoryId,
    setCategoryId,
    isLoadingCategories,
    isFormValid,
    isSubmitting,
    handleSubmit,
    handleNameChange,
    handleEmailChange,
    handlePhoneChange,
    getErrorMessageByFieldName,
  };
}
