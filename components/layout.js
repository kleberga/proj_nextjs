'use client';

import * as React from "react"
import { useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import economia from "../images/economia3.png"
import { useUser } from "../contexts/userContext"
import { signOut } from "firebase/auth";
import { auth } from '../infra/firebase'
import { useRouter } from 'next/navigation';

export default function Layout({children}) {

    const [isOpen, setIsOpen] = useState(false);
    const { user, setUser } = useUser();
    const router = useRouter();

    const toggleMenu = () => { 
        setIsOpen(!isOpen); 
    };

    function Logout(){
        try {
            signOut(auth)
            console.log('User signed out successfully!');
            setUser({id: '', name: '', email: ''})
            router.push('/');
        } catch(error){
            console.log('Error signing out: ' + error);
        };
    }
    
    return(
        <div className="flex flex-col min-h-screen bg-green-100" lang="pt-br">
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-1.5 dark:bg-gray-800">
                    <div className="flex flex-wrap justify-between items-center mx-12">
                        <Link href="/" className="flex items-center">
                            <Image src={economia} className="w-full max-w-20 h-auto mr-3"  alt="Notícias de Economia" width={20} height={20}/>
                            <span className="self-center text-xl font-bold whitespace-nowrap text-green-800">Notícias de Economia</span>
                        </Link>
                       <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"> 
                        <div className="relative flex items-center justify-between h-16"> 
                            <div className="flex items-center lg:order-2"> 
                                <button onClick={toggleMenu} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded={isOpen ? "true" : "false"}> 
                                    <span className="sr-only">Open main menu</span> 
                                    <svg className={`${isOpen ? 'hidden' : 'block'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> 
                                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path> </svg> 
                                    <svg className={`${isOpen ? 'block' : 'hidden'} w-6 h-6`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> 
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path> </svg> </button> </div> 
                                    <div className={`lg:flex lg:items-center lg:w-auto lg:order-1 ${isOpen ? 'block' : 'hidden'}`}  id="mobile-menu-2"> 
                                        {user.id && 
                                        <div className="flex flex-col p-4 mt-2 bg-gray-50 border border-gray-100 rounded-lg lg:flex-row lg:space-x-14 lg:mt-0 lg:text-medium lg:font-medium lg:border-0 lg:bg-white dark:bg-gray-800 lg:dark:bg-gray-900 dark:border-gray-700">
                                            <Link href="/home" className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ">Home</Link> 
                                            <Link href="/sobre_nos" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sobre nós</Link> 
                                            <Link href="/contato" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contato</Link> 
                                        </div> 
                                    }
                                </div> 
                            </div> 
                        </div>
                        {user.id && 
                        <div className="max-w-fit flex items-center p-2 bg-green-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <h5 className="mb-1 text-xs font-bold tracking-tight text-gray-900 dark:text-white">Bem vindo, </h5>
                            <h5 className="mb-1 mx-1 text-xs font-bold tracking-tight text-gray-900 dark:text-white">{user.nome}</h5>
                            <button type="button" onClick={Logout} className="mx-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs w-full sm:w-auto px-3 py-1.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Sair</button>
                        </div>
                        }
                    </div>
                </nav>
            </header>
            <main className="mx-6 my-4 flex-grow">
                {children}
             </main>
            <footer className="bg-white rounded-lg shadow dark:bg-gray-900 ">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-4">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={economia} className="h-6 w-12" alt="Notícias de Economia" width={20} height={20}/>
                            <span className="self-center text-1xl font-semibold whitespace-nowrap text-green-800">Notícias de Economia</span>
                        </div>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li >
                                <Link href="/sobre_nos" className="hover:underline me-4 md:me-6">Sobre nós</Link>
                            </li>
                            <li >
                                <Link href="/politica_privacidade" className="hover:underline me-4 md:me-6">Política de Privacidade</Link>
                            </li>
                            <li>
                                <Link href="/contato" className="hover:underline">Contato</Link>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-4" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 Global News&reg;. Todos os direitos reservados.</span>
                </div>
            </footer>    
        </div>
    )
}