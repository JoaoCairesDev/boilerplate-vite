import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import "./style.css";
//componentes de tarefa
import AddTask from "../../components/addTask/addTask";

import firebase from "../../services/api";

export default function Home() {
  const [UserLogged, setUserLogged] = useState({});
  const [user, setUser] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    async function checkLogin() {
      await firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //se tem usuario logado
          setUser(true);
          setUserLogged({
            uid: user.uid,
            email: user.email,
          });
        } else {
          //não possui usuario logado
          setUser(false);
          setUserLogged({});
          navigate("/login");
        }
      });
    }
    checkLogin();
  }, []);

  //botão de deslogar
  async function logout() {
    await firebase.auth().signOut();
  }
  return (
    <div className="container-home">
      <div className="box-home"></div>
    </div>
  );
}
