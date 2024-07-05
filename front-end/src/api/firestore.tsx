import {db} from "@/config/firebase-config";
import {FirebaseError} from "@firebase/app";
import {doc, setDoc, updateDoc} from "@firebase/firestore";

export const firestoreCreateDocument = async (collectionName: string, documentID: string, data: object) => {
    try {
        const documentRef = doc(db, collectionName, documentID)
        await setDoc(documentRef, data)
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
export const firestoreUpdateDocument = async (collectionName: string, documentID: string, data: object) => {
    try {
        const documentRef = doc(db, collectionName, documentID)
        await updateDoc(documentRef, data)
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