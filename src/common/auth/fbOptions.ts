// https://firebase.google.com/docs/auth/where-to-start?authuser=0
// https://firebase.google.com/docs/auth/web/email-link-auth?authuser=0
// https://firebase.google.com/docs/web/setup?authuser=0

import {initializeApp} from "firebase/app";
import {getFirestore,collection,getDocs,Firestore} from "firebase/firestore/lite";
import firebase from "firebase/compat";


const firebaseConfig = {};

const app= initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getCities(db:Firestore) {
    const citiesCol = collection(db, 'cities');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    return cityList;
}
