import React, { useState } from "react";
import PageDefault from "../../../components/PageDefault";
import { Link } from "react-router-dom";

function Categoria() {
  const [categories, setCategories] = useState([]);

  const [category, setCategory] = useState({
    name: "Gaba",
    description: "",
    color: "#000",
  });

  function setValue(key, value) {  
    setCategory({
      ...category,
      [key]: value,
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {category.name}</h1>

      <form
        onSubmit={function handleSubmit(oEvent) {
          oEvent.preventDefault();
          setCategories([...categories, category]);
        }}
      >
        <div>
          <label>
            Nome da Categoria:
            <input
              type="text"
              value={category.name}
              onChange={(oEvent) => {
                setValue("name", oEvent.target.value);
              }}
            />
          </label>
        </div>
        <div>
          <label>
            Categoria:
            <textarea
              type="text"
              value={category.description}
              onChange={(oEvent) => {
                setValue("description", oEvent.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              value={category.color}
              onChange={(oEvent) => {
                setValue("color", oEvent.target.value);
              }}
            />
          </label>
        </div>

        <button>Cadastrar</button>
      </form>

      <ul>
        {categories.map((cat, idx) => {
          return <li key={`${cat}${idx}`}>{cat}</li>;
        })}
      </ul>
      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}
export default Categoria;
