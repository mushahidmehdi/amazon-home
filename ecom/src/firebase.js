import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp( {
		apiKey: "AIzaSyDaj2MAnED2mAB4Jr2iVIAuRRj6f3P_rsM",
		authDomain: "fir-f9d8d.firebaseapp.com",
		projectId: "fir-f9d8d",
		storageBucket: "fir-f9d8d.appspot.com",
		messagingSenderId: "19427022699",
		appId: "1:19427022699:web:1e6dc2dfb682d1d984de2e"
})

const db = firebase.firestore();

export { db }


