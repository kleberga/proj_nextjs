'use client';

import {useState, useEffect} from "react"
import Image from 'next/image'
import ImagemGlobalNews from '../../images/global_news.png'
import { db } from '../../infra/firebase'
import { useUser } from "@/contexts/userContext";
import { addDoc, collection } from "firebase/firestore";
import CustomAlert from "@/components/customAlert";
import PrivateRoute from "@/components/privateRoute";

export default function Contato(){
    const[mensagem, setMensagem] = useState({nome: "", email: "", assunto: "", mensagem: ""})
    const [validMensagem, setValidMensagem] = useState(false)
    const [validAssunto, setValidAssunto] = useState(false)
    const [disabledButton, setDisabledButton] = useState(true)
    const { user } = useUser();
    const [alertVisible, setAlertVisible] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setMensagem(prevState => ({
          ...prevState,
          [name]: value,
          nome: user.nome,
          email: user.email
        }));
      };
    
    useEffect(() => {
        setValidAssunto(mensagem.assunto.length >= 5)
        setValidMensagem(mensagem.mensagem.length >= 10)
        setDisabledButton(!(validMensagem && validAssunto))
    }, [mensagem, validAssunto, validMensagem])


    const handleSubmit = async () => {
        event.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "contato"), {
            contato:  mensagem,    
        });
        console.log("Document written with ID: ", docRef.id);
        setAlertVisible(true)
        setMensagem({ nome: "", email: "", assunto: "", mensagem: "" });
        } catch (e) {
        console.log("Error adding document: ", e);
        }
    }

    const handleCloseAlert = () => { 
        setAlertVisible(false); 
    };

    return(
        <PrivateRoute>
            <div>
            <meta name="descricao" content="Página contendo formulário para envio de críticas, dúvidas e sugestões."></meta>
            {alertVisible && <CustomAlert message="Contato enviado com sucesso!" onClose={handleCloseAlert} />}
            <div className="ml-12">
                <div >
                <Image src={ImagemGlobalNews} alt="Global News" width="130" height="60" className="border-solid border-2 border-green-500"/>
                </div>
                <h2 className="text-lg font-bold my-6">Entre em contato:</h2>
            <div className="container">
                <form name="form_react" method="post" onSubmit={handleSubmit} 
                    className="bg-green-300 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-6/12"
                    data-netlify="true" data-netlify-honeypot="bot-field">
                    <input type="hidden" name="form-name" value="form_react"/>
                    <label className="font-semibold">
                        Assunto
                        <input 
                        type="text" 
                        name="assunto" 
                        value={mensagem.assunto}
                        onChange={handleInputChange}
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        />
                        {!validAssunto && <p className="text-red-500 text-sm">Assunto precisa ter pelo menos 5 caracteres</p>}
                    </label>
                    {validAssunto && <br/>}
                    <br/>
                    <label className="font-semibold">
                        Mensagem
                        <textarea 
                        rows="5" 
                        name="mensagem" 
                        onChange={handleInputChange}
                        value={mensagem.mensagem}
                        className="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                        >
                        </textarea>
                        {!validMensagem && <p className="text-red-500 text-sm">Mensagem precisa ter pelo menos 10 caracteres</p>}
                    </label>
                    <br/>
                    <br/>
                    <input type="submit" disabled={disabledButton}  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" value="Enviar" />
                    <input type="reset" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" value="Limpar" />
                </form>
            </div>
            </div>
            </div>
        </PrivateRoute>
    )
}

export const Head = () => <title>Contato</title>

