import firebase from "firebase/app";
import "firebase/firestore";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCSD-akv8QzRFym-T8XrhQW8cQLffWFbNM",
    authDomain: "electronics-shop-196e0.firebaseapp.com",
    projectId: "electronics-shop-196e0",
    storageBucket: "electronics-shop-196e0.appspot.com",
    messagingSenderId: "749155418692",
    appId: "1:749155418692:web:3ffe66caf03cecd0e77211",
    measurementId: "G-W2F2Y5TZGG"
  };

  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const savingUserInfo = async (userAuth,additionalData) => {
    
    if (!userAuth){
      console.log("userAuth is null"); 
      return;
    };

    // fatcheing data from firestore
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const getUser = await userRef.get(); 
    if(!getUser.exists){
      const { displayName, email } = userAuth;
      const createdDate = new Date();     
      try{
        await userRef.set({
          displayName,
          email,
          createdDate,
          ...additionalData
        });
      }catch(error){
        console.log(error);   
      }
    }
    return userRef;
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt:'select_account' })
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;