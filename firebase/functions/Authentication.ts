import { auth } from '../config' // Grab instance of auth
import { createUserWithEmailAndPassword } from "firebase/auth" // Firebase method

// Creates a user in the authentication section
export const createUser = (email: any, password: any) => {

    // make this = to a const to save data maybe ?? os is that what const user does?
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential:any) => {
            const user = userCredential.user;
        })
        .catch((error:any) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        })
}