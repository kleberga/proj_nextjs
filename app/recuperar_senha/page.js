'use client';

import { useState } from "react"
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import Formulario_Recuperar from '../../components/formulario_recuperar';
import CustomAlert from "@/components/customAlert";
import PrivateRoute from "@/components/privateRoute";

export default function Entrar() {
  
  const [usuario, setUsuario] = useState({email: ''})
  const [errors, setErrors] = useState({email: ''});
  const auth = getAuth();
  const [alertVisible, setAlertVisible] = useState(false);

  const handleChange = (event) => {
    setUsuario((objeto) => {
      return {...objeto, [event.target.name]: event.target.value}
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    sendPasswordResetEmail(auth, usuario.email)
    .then((response) => {
      setAlertVisible(true); 
      setUsuario({email: ''})
    })
    .catch((error) => {
      setErrors({email: "Erro ao enviar e-mail de recuperação de senha. Tente novamente"});
    });
  }

  const handleCloseAlert = () => { 
    setAlertVisible(false); 
};

  return (
        <main>
          <PrivateRoute>
            {alertVisible && <CustomAlert message="Foi enviado um e-mail para resetar a senha." onClose={handleCloseAlert} />}
            <Formulario_Recuperar 
              titulo={"Recuperar a senha:"} 
              funcaoHandle={handleChange} 
              funcaoSubmit={handleSubmit} 
              mensagemErro={errors} 
              textoDireciona1={'Já possui acesso? '} 
              textoDireciona2={'Efetue login'} 
              linkDireciona={"/"}
              />
          </PrivateRoute>
        </main> 
  );
}