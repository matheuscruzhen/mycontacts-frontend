import React, { useState } from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../FormGroup';
import Input from '../Input';
import Select from '../Select';
import Button from '../Button';

import { Form, ButtonContainer } from './styles';

export default function ContactForm({ buttonLabel }) {
  const [name, setName] = useState('');

  return (
    <Form>
      <FormGroup>
        <Input
          placeholder="Nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </FormGroup>
      <FormGroup error="O formato do e-mail é inválido.">
        <Input placeholder="E-mail" error />
      </FormGroup>
      <FormGroup>
        <Input placeholder="Telefone" />
      </FormGroup>
      <FormGroup>
        <Select>
          <option value="instagram">Instagram</option>
        </Select>
      </FormGroup>

      <ButtonContainer>
        <Button>{buttonLabel}</Button>
      </ButtonContainer>
    </Form>
  );
}

ContactForm.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
};
