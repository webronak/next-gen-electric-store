import { call, put, takeEvery, takeLatest } from "redux-saga/effects";

//firestore
import { firestore,convertCollectionSnapshotToMap } from "../../firebase/firebase";

import { SetProductData } from "./productData.action";

function* fetchData() {
  
  try {
    
    const productsRef = yield firestore.collection("Products");
    const snapshot = yield productsRef.get();
    // yield console.log("ebhcvhevcie",snapshot)

    const dataFromFirebase = yield call(convertCollectionSnapshotToMap, snapshot);
    yield put(
      SetProductData(
        dataFromFirebase.reduce((acc, data) => {
          acc[data.category.toLowerCase()] = data;
          return acc;
        }, {})
      )
    );
  } catch (error) {
    console.log(error);
  }
}

export function* fetchProductDataAsync() {
  yield takeEvery("START_FETCHING", fetchData);
}
