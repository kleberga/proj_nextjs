import Link from 'next/link'

export default function Formulario_Registro({titulo, funcaoSubmit, funcaoHandle, mensagemErro={nome:'', email:'', password:'', login: ''}, formValid = true, textoDireciona1, textoDireciona2, linkDireciona}){

    return(
        <div className="max-w-sm mx-auto p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form onSubmit={funcaoSubmit} className="max-w-sm mx-auto">
            <h1 className="text-xl font-bold text-gray-800">{titulo}</h1>
            <br/>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome</label>
                <input 
                    name="nome" 
                    type="nome" 
                    id="nome" 
                    onChange={funcaoHandle} 
                    autoComplete="on" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    {mensagemErro.nome && <div><p className="text-red-500 text-sm">{mensagemErro.nome}</p></div>}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">E-mail</label>
                <input 
                    name="email" 
                    type="email" 
                    id="email" 
                    onChange={funcaoHandle} 
                    autoComplete="on" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    {mensagemErro.email && <div><p className="text-red-500 text-sm">{mensagemErro.email}</p></div>}
            </div>
            <div className="mb-5">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                <input 
                    name="password" 
                    type="password" 
                    id="password" 
                    autoComplete="on" 
                    onChange={funcaoHandle} 
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                    {mensagemErro.password && <div><p className="text-red-500 text-sm">{mensagemErro.password}</p></div>}
            </div>
            {mensagemErro.login && <div><p className="text-red-500 text-sm">{mensagemErro.login}</p><br/></div>}
            <button type="submit" disabled={!formValid} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Enviar</button>
            <button type="reset" className="ml-6 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Limpar</button>
            <hr className="my-6 h-1 border-t-2 bg-green-600 dark:bg-dark" />
            <h1>{textoDireciona1}<Link href={String(linkDireciona)} className="text-green hover:text-green-800 focus:outline-none font-medium rounded-lg text-base w-full sm:w-auto text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">{textoDireciona2}</Link></h1>
        </form>
        </div>    
    )
}