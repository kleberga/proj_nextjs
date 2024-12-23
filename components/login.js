import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../infra/firebase'

export async function Login(usuario) {
    
    let user;
    await signInWithEmailAndPassword(auth, usuario.email, usuario.password)
       .then((userCredential) => {
            console.log('User signed in successfully!', userCredential.user.uid + ' ' + userCredential.user.email);
            user = {id: userCredential.user.uid, email: userCredential.user.email}
        })
       .catch((error) => {
            console.log(`Error signing in with email and password: + ${error.code}`);
            user = error.code;
        });
    return user;
}