import Link from 'next/link';

export default function Comentario({handleSubmit, handleChange}){

    return(
        <div>
            <form>
            <div className="w-1/3 mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
                    <label htmlFor="comment" className="sr-only">Seu comentário</label>
                    <textarea onChange={handleChange} name="comment" id="comment" rows="5" className="p-2 w-full text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Escreva um comentário..." required ></textarea>
                </div>
                <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
                    <button type="submit" onClick={handleSubmit} className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
                        Postar
                    </button>
                </div>
            </div>
            </form>
            <p className="ms-auto text-xs text-gray-500 dark:text-gray-400">Lembre-se, contribuições para este tópico devem seguir a nossa <Link href="/politica_comentarios" className="text-green-600 dark:text-green-500 hover:underline">Política de Comentários</Link>.</p>
        </div>
    )
}