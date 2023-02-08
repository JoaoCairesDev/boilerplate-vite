import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Utilizando o react-router-dom@v6

//Páginas importadas para endereçamento e identificação de rotas
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
//Componentes
import Header from "./components/Header";

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
