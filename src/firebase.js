import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: "p2p-chatapp-firebase",
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const authentication = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const database = firebase.database();

export { authentication, provider, database };
