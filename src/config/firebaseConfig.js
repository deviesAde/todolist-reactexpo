import {initializeApp} from '@react-native-firebase/app';
import {getFirestore} from '@react-native-firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCAKzLiQHj8gkPDjeol847RA0ZAd_GgFsQ",
  authDomain: "to-do-list-8d36d.firebaseapp.com",
  projectId: "to-do-list-8d36d",
  storageBucket: "to-do-list-8d36d.firebasestorage.app",
  messagingSenderId: "658204307787",
  appId: "1:658204307787:web:02757cfbceed81c729f8ce",
  measurementId: "G-4K73SNQ7BK"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);