import {getApp, getApps ,initializeApp} from 'firebase/app';//will help to access and initiliaze the app
import {getStorage} from "firebase/storage"
//will help to access the storage
const firebaseConfig = {
    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID,
    // measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
    apiKey: "AIzaSyDqPC8lHCp2zGQsLtJOg1dAfAxgW12RXgA",
    authDomain: "music-app-sgp.firebaseapp.com",
    databaseURL: "https://music-app-sgp-default-rtdb.firebaseio.com",
    projectId: "music-app-sgp",
    storageBucket: "music-app-sgp.appspot.com",
    messagingSenderId: "987739148619",
    appId: "1:987739148619:web:e5ae695b5e5d5d55d4d8ce",
    measurementId: "G-8RGYDVVD6T"
  };

  const app = getApp.length >0 ?getApp() : initializeApp(firebaseConfig);
  const storage = getStorage(app) //instance for firebase storage

  export {app,storage};