import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";
import FormField from "../../../components/FormField";

function Categoria() {
  const [categories, setCategories] = useState([]);

  const initialCategory = {
    name: "",
    description: "",
    color: "#000",
  };

  const [category, setCategory] = useState(initialCategory);

  function setValue(oEvent) {  
    setCategory({
      ...category,
      [oEvent.target.getAttribute("name")]: oEvent.target.value,
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {category.name}</h1>

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
          onChange={setValue} />
        <div>
          <label>
            Categoria:
            <textarea
              type="text"
              name="description"
              value={category.description}
              onChange={setValue}
            />
          </label>
        </div>


        <FormField  
          label="Cor"
          name="color"
          type="color"
          value={category.color} 
          onChange={setValue} />

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((cat, idx) => {
          return <li key={`${cat.name}${idx}`}>{cat.name}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
export default Categoria;
