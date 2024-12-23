import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../infra/firebase'
import { collection, addDoc } from "firebase/firestore";

export async function Register(usuario) {
    let user;

      await createUserWithEmailAndPassword(auth, usuario.email, usuario.password)
      .then((userCredential) => {
        console.log('User created in successfully!', userCredential.user.uid + ' ' + userCredential.user.email);
        user = {id: userCredential.user.uid, email: userCredential.user.email}
        addDocumento(user, usuario, "usuarios");
      })
      .catch((error) => {
          console.log('Error creating user:', error.code);
          user = error.code;
      });
      return user;
}

export const addDocumento = async (user, usuarioInformado, colecao) => {
  try {
      const docRef = await addDoc(collection(db, colecao), {
        usuario:  {id: user.id, email: user.email, nome: usuarioInformado.nome} ,    
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.log("Error adding document: ", e);
    }
}