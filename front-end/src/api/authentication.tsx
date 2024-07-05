import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail
} from "firebase/auth";
import {auth} from "@/config/firebase-config";
import {FirebaseError} from "@firebase/app";

export const fireBaseCreateUser = async (email: string, password: string) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        return {data: userCredential.user}
    } catch (err) {
        const firebaseError = err as FirebaseError
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }
        }
    }
}
export const fireBaseSignUser = async (email: string, password: string) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        return {data: userCredential.user}
    } catch (err) {
        const firebaseError = err as FirebaseError
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }
        }
    }
}
export const fireBaseLogoutUser = async () => {
    try {
        await signOut(auth)
        return {data: true}
    } catch (err) {
        const firebaseError = err as FirebaseError
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }
        }
    }
}
export const sendEmailToResetPassword = async (email: string) => {
    try {
        await sendPasswordResetEmail(auth, email)
        return {data: true}
    } catch (error) {
        const firebaseError = error as FirebaseError
        return {
            error: {
                code: firebaseError.code,
                message: firebaseError.message,
            }
        }
    }
}