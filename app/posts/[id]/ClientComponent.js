'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@/contexts/userContext';
import { addDoc, collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../../infra/firebase';
import Comentario from '@/components/comentario';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

export default function ClientComponent({ id }) {
  const [comment, setComment] = useState('');
  const { user } = useUser();
  const [colecaoComments, setColecaoComments] = useState([]);
  const [editMode, setEditMode] = useState(null);
  const [editComment, setEditComment] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setComment(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const addDocumento_comment = async (colecao) => {
    let date = new Date();
    let formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    try {
      const docRef = await addDoc(collection(db, colecao), {
        comment: { 
          id: user.id, 
          nome: user.nome,  
          comentario: comment.comment, 
          dia: formattedDate, 
          hora: `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`, 
          noticia: id 
        },
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  };

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "comments"));
      const newData = querySnapshot.docs
        .map((doc) => ({ ...doc.data().comment, docId: doc.id })) 
        .filter((comment) => comment.noticia === id);
      setColecaoComments(newData)
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await addDocumento_comment("comments");
    fetchPost();
  };

  const handleEditChange = (event) => {
    setEditComment(event.target.value);
  };

  const handleUpdate = async (comment) => {
    let date = new Date();
    let formattedDate = date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    let currentTime = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
    try {
      const commentRef = doc(db, "comments", comment.docId);
      await updateDoc(commentRef, {
        "comment.comentario": editComment,
        "comment.dia": formattedDate,
        "comment.hora": currentTime
      });
      setEditMode(null);
      fetchPost();
    } catch (e) {
      console.log("Error updating document: ", e);
    }
  };

  const handleDelete = async (docId) => {
    try {
      await deleteDoc(doc(db, "comments", docId));
      fetchPost();
    } catch (e) {
      console.log("Error deleting document: ", e);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  return (
    <div key="comentario" className="bg-gray-100 p-6 bg-white p-4 rounded-lg shadow-md">
      <Comentario handleChange={handleChange} handleSubmit={handleSubmit} />
      <br />
      <h2 className="text-lg font-bold mb-4">Comentários</h2>
      <div className="flex flex-col space-y-4">
        {Array.isArray(colecaoComments) && colecaoComments.length > 0 ? (
          colecaoComments.map(comment => (
            <div className="bg-gray-100 p-4" key={`${comment.noticia}-${comment.id}-${comment.dia}-${comment.hora}`}>
              <div className="bg-white p-2 rounded-lg shadow-md">
                <h3 className="text-lg font-bold">{comment.nome}</h3>
                <p className="text-gray-700 text-sm mb-4">Postado em {comment.dia} às {comment.hora}</p>
                <p className="text-gray-700">{editMode === comment.docId ? (
                  <input
                    type="text"
                    value={editComment}
                    onChange={handleEditChange}
                    className={`${editMode === comment.docId ? 'border-4 border-yellow-300 p-2 w-full' : 'border-transparent p-2 w-full'}` }
                  />
                ) : (
                  comment.comentario
                )}</p>
                {user.id === comment.id && (
                  <div>
                    {editMode === comment.docId ? (
                      <button onClick={() => handleUpdate(comment)} id='icon-save' className='px-2 py-2 me-2 mt-2'><FaSave /></button>
                    ) : (
                    <button onClick={() => { setEditMode(comment.docId); setEditComment(comment.comentario); }} id='icon-edit' className='px-2 py-1 me-2 mb-2'><FaEdit /></button>
                    )}
                    <button onClick={() => handleDelete(comment.docId)} className='px-2 py-2 me-2 mt-2' id='icon-trash'><FaTrash /></button>
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <p>Sem comentários disponíveis.</p>
        )}
      </div>
    </div>
  );
}









