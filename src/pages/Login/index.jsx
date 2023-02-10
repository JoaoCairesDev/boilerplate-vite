import React, { useState } from "react";
import firebase from "../../services/api";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  //criação de perfil na firestore

  const navigate = useNavigate();

  async function login() {
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then(async (value) => {
        navigate("/");
        await firebase
          .firestore()
          .collection("users")
          .doc(value.user.uid)
          .get()
          .then((snapshot) => {
            setUser({
              nome: snapshot.data().nome,
              email: value.user.email,
            });
          });
      })
      .catch((error) => {
        console.log("ERRO AO LOGAR" + error);
      });
  }

  return (
    <div className="container">
      <div className="box-form">
        <div>
          <h3>Entrar</h3>

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
          <button onClick={login}>Entrar</button>
        </div>
        <Link to="/cadastro">
          <p>ainda não tem cadastro?</p>
        </Link>
      </div>
    </div>
  );
}
