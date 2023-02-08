import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  document.title = "Inicío | Clover";
  return (
    <div>
      <h1>Home</h1>
      <Link to={"/contatos"}>Contatos</Link>
    </div>
  );
}
