import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Utilizando o react-router-dom@v6

//Páginas importadas para endereçamento e identificação de rotas
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/cadastro";
import NotFound from "./pages/NotFound";
//Componentes

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
