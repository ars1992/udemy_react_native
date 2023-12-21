import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCpesPz-cceB5PvF_XpN4KrMlF0WqyQ-Cs",
    authDomain: "udemy-nicequotes-d6aa4.firebaseapp.com",
    projectId: "udemy-nicequotes-d6aa4",
    storageBucket: "udemy-nicequotes-d6aa4.appspot.com",
    messagingSenderId: "354326233948",
    appId: "1:354326233948:web:65823df090cec99ada7799"
};

export default class Firebase {

    static db

    static init(){
        const app = initializeApp(firebaseConfig)
        Firebase.db = getFirestore(app)
    }

    static async saveZitat(zitat, autor){
        const docRef = await addDoc(collection(Firebase.db, "zitate"), {zitat, autor})
        return docRef.id
    }
}