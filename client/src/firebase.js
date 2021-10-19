import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDyMKtmfmZ_NP7jPbwXaeWTKDYMOuk5oPI',
	authDomain: 'e-clone-43de8.firebaseapp.com',
	projectId: 'e-clone-43de8',
	storageBucket: 'e-clone-43de8.appspot.com',
	messagingSenderId: '593765011274',
	appId: '1:593765011274:web:cf055ea4007b1852533bb3',
	measurementId: 'G-XJRVW5PBPD',
};

const firebaseApp = firebase.initializeApp( firebaseConfig );

const db = firebaseApp.firestore();
const auth = firebase.auth(); 

export { db, auth };
