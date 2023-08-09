
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBc1lGwygPKpS9l5_9gIkG0h6iPaB3DqYE",
  authDomain: "mini-32ac1.firebaseapp.com",
  projectId: "mini-32ac1",
  storageBucket: "mini-32ac1.appspot.com",
  messagingSenderId: "261799125130",
  appId: "1:261799125130:web:f23a9902b2a16881f14d73",
  measurementId: "G-X0RB8L4X7X"
};

const app = initializeApp(firebaseConfig);

const auth=getAuth();

export {app,auth};