
// import { initializeApp } from "firebase/app";
// import firebase from "firebase/compat/app";

// import { initializeApp } from "firebase/app";
// //import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBGw8R4oggb0LBf4jXPHvx4hju9pFAhNtE",
//   authDomain: "blockchainaidproject.firebaseapp.com",
//   projectId: "blockchainaidproject",
//   storageBucket: "blockchainaidproject.appspot.com",
//   messagingSenderId: "1009926705560",
//   appId: "1:1009926705560:web:1ad39e1839742cc5f2dbed",
//   measurementId: "G-GEF7GKEM4M"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// //const analytics = getAnalytics(app);
// export const auth = app.auth();

// export default app;

import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyBGw8R4oggb0LBf4jXPHvx4hju9pFAhNtE",
  authDomain: "blockchainaidproject.firebaseapp.com",
  projectId: "blockchainaidproject",
  storageBucket: "blockchainaidproject.appspot.com",
  messagingSenderId: "1009926705560",
  appId: "1:1009926705560:web:1ad39e1839742cc5f2dbed",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
// export 📦
export default app;
