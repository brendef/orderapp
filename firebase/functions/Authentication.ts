import { auth } from '../config'
import { createUserWithEmailAndPassword } from "firebase/auth"

export const createUser = (email: any, password: any) => {

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential:any) => {
            const user = userCredential.user;
        })
        .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}