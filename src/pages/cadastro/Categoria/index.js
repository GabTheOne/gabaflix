import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoryRepository from '../../../repositories/categorias';

function Categoria() {
  const [categories, setCategories] = useState([]);

  const initialCategory = {
    title: '',
    description: '',
    color: '#000',
  };

  const {
    values, setValue, clearForm,
  } = useForm(initialCategory);

  useEffect(() => {
    categoryRepository.getAll().then((resp) => {
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
        {values.title}
      </h1>

      <form
        onSubmit={function handleSubmit(oEvent) {
          oEvent.preventDefault();
          setCategories([...categories, values]);
          clearForm();
        }}
      >

        <FormField
          label="Nome da Categoria"
          name="title"
          type="text"
          value={values.title}
          onChange={setValue}
        />

        <FormField
          label="Descrição"
          name="description"
          type="textarea"
          value={values.description}
          onChange={setValue}
        />

        <FormField
          label="Cor"
          name="color"
          type="color"
          value={values.color}
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
        {categories.map((cat) => <li key={`${cat.title}`}>{cat.title}</li>)}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
export default Categoria;
