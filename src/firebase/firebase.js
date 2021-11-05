import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// images for product data
import sockets from "../images/categories.images/socket.jpg";
import switches from "../images/categories.images/switches.jpg";
import coollers from "../images/categories.images/coolers.jpg";
import bulbs from "../images/categories.images/bulbs.jpg";
import fans from "../images/categories.images/fans.jpg";
import holders from "../images/categories.images/holders.jpg";

var firebaseConfig = {
  apiKey: "AIzaSyCSD-akv8QzRFym-T8XrhQW8cQLffWFbNM",
  authDomain: "electronics-shop-196e0.firebaseapp.com",
  projectId: "electronics-shop-196e0",
  storageBucket: "electronics-shop-196e0.appspot.com",
  messagingSenderId: "749155418692",
  appId: "1:749155418692:web:3ffe66caf03cecd0e77211",
  measurementId: "G-W2F2Y5TZGG",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const savingProductsCollection = async (collection, itemsToAdd) => {
  const productCollectionRef = firestore.collection(collection);

  // BATCH - to call multipal data save call at a Time.
  const batch = firestore.batch();

  itemsToAdd.forEach((item) => {
    const newDocRef = productCollectionRef.doc();
    batch.set(newDocRef, item);
  });

  return await batch.commit();
};

export const savingUserInfo = async (userAuth, additionalData) => {
  if (!userAuth) {
    console.log("userAuth is null");
    return;
  }

  // fatcheing data from firestore
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const getUser = await userRef.get();
  if (!getUser.exists) {
    const { displayName, email } = userAuth;
    const createdDate = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdDate,
        ...additionalData,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return userRef;
};

export const convertCollectionSnapshotToMap = (snapshot) => {
  const imagesArray = { sockets, switches, coollers, bulbs, fans, holders };
  return snapshot.docs.map((doc) => {
    const { category, items } = doc.data();
    return {
      img: imagesArray[category.toLowerCase()],
      forURL: encodeURI(category.toLowerCase()),
      _id: doc.id,
      category,
      items,
    };
  });
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
