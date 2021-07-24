import React, { useState } from 'react';
import { CustomForm } from './Form.styled';
import Button from '../Button/Button';
import Input from '../Input/Input';

export default function Form({ handleSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  const handleSetInfo = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    //   console.log(this.state);
  };

  const handleAddContact = e => {
    e.preventDefault();

    handleSubmit(name, number, id);
    // console.log('Стейт формы>', this.state);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    setId('');
  };

  return (
    <CustomForm onSubmit={handleAddContact}>
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        onChange={handleSetInfo}
      />
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
        required
        onChange={handleSetInfo}
      />
      <Button type="submit" text="Add contact" />
    </CustomForm>
  );
}
