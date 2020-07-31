import React from "react";
import Logo from "../../assets/img/gabaflix_logo.png";
import "./Menu.css";
import Button from "../Button";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Gabaflix" />
      </Link>
      
      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </Button>
    </nav>
  );
}

export default Menu;
