import React, { useState } from "react";
import firebase from "../../services/api";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import "./style.css";

export default function Cadastro() {
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  //criação de perfil na firestore

  const navigate = useNavigate();

  async function novoUsuario() {
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then(async (value) => {
        //redireciona após conta criada com sucesso
        navigate("/");
        //cira um perfil de usuario novo

        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .set({
            nome: nome,
            email: email,
            status: true,
          })
          .then(() => {
            setNome("");
            setEmail("");
            setSenha("");
          });
      })
      //tratamento de erros
      .catch((error) => {
        alert(error, "isso");
        if (error.code === "auth/weak-password") {
          alert("Senha muito fraca..");
        } else if (error.code === "auth/email-already-in-use") {
          alert("Esse email já existe!");
        }
      });
  }

  return (
    <div className="container">
      <div className="box-form">
        <div>
          <h3>Cadastre-se</h3>
          <br />
          <input
            placeholder="Email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Senha"
            type="text"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input
            placeholder="username"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button onClick={novoUsuario}>Cadastrar</button>
        </div>
        <Link to="/login">
          <p>Já tem cadastro?</p>
        </Link>
      </div>
    </div>
  );
}
