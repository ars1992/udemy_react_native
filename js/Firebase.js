import { initializeApp } from 'firebase/app'
import { addDoc, collection, getFirestore, getDocs, doc, deleteDoc } from "firebase/firestore"

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
    static dbName = "zitate"

    static init(){
        const app = initializeApp(firebaseConfig)
        Firebase.db = getFirestore(app)
    }

    static async saveZitat(zitat, autor){
        const docRef = await addDoc(collection(Firebase.db, Firebase.dbName), {zitat, autor})
        return docRef.id
    }

    static async getZitate(){
        const zitate = []
        const querySnapshot = await getDocs(collection(Firebase.db, Firebase.dbName))
        querySnapshot.forEach((zitat) => {
            zitate.push({
                id: zitat.id,
                zitat: zitat.data().zitat,
                autor: zitat.data().autor,
            })
        })
        return zitate
    }

    static removeZitat(id){
        deleteDoc(doc(Firebase.db, Firebase.dbName, id))
    }
}