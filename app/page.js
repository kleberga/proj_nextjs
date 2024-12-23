'use client';

import Formulario_Login from '../components/formulario_login';
import { Login } from "../components/login"
import { useState } from "react"
import { useUser } from '../contexts/userContext';
import { useRouter } from 'next/navigation';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../infra/firebase'

export default function Entrar() {
  
  const [usuario, setUsuario] = useState({nome: '', email: '', password: ''})
  const [errors, setErrors] = useState({login: ''});
  const { setUser } = useUser();
  const router = useRouter();

  const handleChange = (event) => {
    setUsuario((objeto) => {
      return {...objeto, [event.target.name]: event.target.value}
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    let user = await Login(usuario)
    if(user == 'auth/invalid-credential'){
      setErrors({login: 'E-mail e/ou senha inválido(s).'})
      setUser({id: '', nome: '', email: ''});
    } else {
      await getDocs(collection(db, "usuarios"))
      .then((querySnapshot)=>{               
          const newData = querySnapshot.docs
              .filter((doc) => (doc.data().usuario.id === user.id));     
              newData.forEach((doc) => { 
                setUser({id: user.id, nome: doc.data().usuario.nome, email: user.email});
              });
      })
      setErrors({login: ''})
      router.push('/home');
    }
  }

  return (
        <main>
          <Formulario_Login 
            titulo={"Efetue login:"} 
            funcaoHandle={handleChange} 
            funcaoSubmit={handleSubmit} 
            mensagemErro={errors} 
            textoDireciona1={'Não possui login? '} 
            textoDireciona2={'Registre-se'} 
            linkDireciona={"/registro"}
            />
        </main> 
  );
}