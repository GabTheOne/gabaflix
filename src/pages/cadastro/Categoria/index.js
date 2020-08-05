/*
eslint linebreak-style: ["error", "windows"]
*/

import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    const URL = 'http://localhost:8080/categorias';
    fetch(URL).then(async (response) => {
      const resp = await response.json();
      setCategories([
        ...resp,
      ]);
    });
    // setTimeout(() => {

    // }, 2 * 1000);
  }, []); // Se passar vazio, executa uma vez só quando abre a aplicação

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
          name="description"
          type="textarea"
          value={category.description}
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

      {categories.length === 0 && (
      <div>
        Loading...
      </div>
      )}

      <ul>
        {categories.map((cat) => <li key={`${cat.name}`}>{cat.name}</li>)}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
export default Categoria;
