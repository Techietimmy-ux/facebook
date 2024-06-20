import { initializeApp } from "firebase/app";

import {
    getFirestore, collection, getDocs,
    addDoc, serverTimestamp, onSnapshot
} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCeVoRBOvn0B_vn8zE_fo3WV2-zbzgcIIY",
    authDomain: "facebook-clone-1c373.firebaseapp.com",
    projectId: "facebook-clone-1c373",
    storageBucket: "facebook-clone-1c373.appspot.com",
    messagingSenderId: "94622417640",
    appId: "1:94622417640:web:05a6fe95af59db812b7f5d"
};

// init firebaseApp

initializeApp(firebaseConfig)

// init firestore db

const db = getFirestore()

// init collection reference

const colRef = collection(db, 'details')

// logging out details


// getDocs(colRef)
//     .then((snapshot)=>{
//     let details =[]
//     snapshot.forEach(doc =>{
//         details.push({
//             ...doc.data(), id:doc.id
//         })
//     })

//     console.log(details);
// }).catch(err =>{
//     console.log(err.message);
// })

onSnapshot(colRef, (snapshot) => {
    let details = []
    snapshot.forEach(doc => {
        details.push({
            ...doc.data(), id: doc.id
        })
    })

    console.log(details);
})




// adding docs

const logInForm = document.querySelector('form')

logInForm.addEventListener('submit', e => {
    e.preventDefault()
    addDoc(colRef, {
        email: logInForm.email.value,
        password: logInForm.password.value,
        createdAt: serverTimestamp()
    })
})










