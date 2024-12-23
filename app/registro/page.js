'use client';

import Formulario_Registro from '../../components/formulario_registro';
import { Register } from "../../components/register"
import { useState, useEffect } from "react"
import { useUser } from '../../contexts/userContext';
import { useRouter } from 'next/navigation';

export default function Registro() {
  
  const [usuario, setUsuario] = useState({nome: '', email: '', password: '', login: ''})
  const [errors, setErrors] = useState({nome: '', email: '', password: '', login: ''});
  const [isFormValid, setIsFormValid] = useState(false);
  const { setUser } = useUser()
  const router = useRouter();

  useEffect(() => {
    validateForm();
  }, [usuario]);

  const validateForm = () => {
      let errors = {};
      if (!usuario.nome) {
          errors.nome = 'Nome é obrigatório.';
      } else if (usuario.nome.length < 4) {
          errors.nome = 'O nome deve ter pelo menos 4 letras.';
      } else {
        errors.nome = '';
      }
      if (!usuario.email) {
          errors.email = 'E-mail é obrigatório.';
      } else if (!/\S+@\S+\.\S+/.test(usuario.email)) {
          errors.email = 'E-mail é inválido.';
      } else {
         errors.email = '';
      }
      if (!usuario.password) {
          errors.password = 'Senha é obrigatória.';
      } else if (usuario.password.length < 6) {
          errors.password = 'A senha deve ter pelo menos 6 letras e/ou números.';
      } else {
         errors.password = '';
      }
      setErrors(errors);
      setIsFormValid(Object.values(errors).every((values) => values === ''));
  };

  const handleChange = (event) => {
      setUsuario((objeto) => {
          return {...objeto, [event.target.name]: event.target.value}
      });
  }

  const handleSubmit = async (event) => {
      event.preventDefault();
      let user = await Register(usuario)
      if(user.id){
        setUser({id: user.id, nome: usuario.nome, email: usuario.email})
        setUsuario({nome: '', email: '', password: ''})
        router.push('/home');
      }  else if (user == 'auth/email-already-in-use'){
        setErrors({login: 'Erro: o e-mail já está registrado. Efetue login.'})
      } else {
        setErrors({login: 'Não foi possível efetuar o registro. Tente novamente.'})
      }
  }

  return (
        <main>
          <Formulario_Registro 
            titulo={"Efetue o registro:"} 
            funcaoHandle={handleChange} 
            funcaoSubmit={handleSubmit} 
            mensagemErro={errors} 
            formValid={isFormValid}
            textoDireciona1={'Já possui acesso? '} 
            textoDireciona2={'Efetue login'} 
            linkDireciona={"/"}
            />
        </main> 
  );
}