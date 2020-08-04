/*
eslint linebreak-style: ["error", "windows"]
*/

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function Categoria() {
  const [categories, setCategories] = useState([]);

  const initialCategory = {
    name: '',
    description: '',
    color: '#000',
  };

  const [category, setCategory] = useState(initialCategory);

  function setValue(oEvent) {
    setCategory({
      ...category,
      [oEvent.target.getAttribute('name')]: oEvent.target.value,
    });
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria
        {category.name}
      </h1>

      <form
        onSubmit={function handleSubmit(oEvent) {
          oEvent.preventDefault();
          setCategories([...categories, category]);
          setCategory(initialCategory);
        }}
      >

        <FormField
          label="Nome da Categoria"
          name="name"
          type="text"
          value={category.name}
          onChange={setValue}
        />

        <FormField
          label="Descrição"
          name="name"
          type="textarea"
          value={category.name}
          onChange={setValue}
        />

        <FormField
          label="Cor"
          name="color"
          type="color"
          value={category.color}
          onChange={setValue}
        />

        <Button>Cadastrar</Button>
      </form>

      <ul>
        {categories.map((cat, idx) => <li key={`${cat.name}${idx}`}>{cat.name}</li>)}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
export default Categoria;
