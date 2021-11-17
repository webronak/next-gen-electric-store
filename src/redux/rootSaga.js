import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import {  fetchProductDataAsync } from "./productData/productData.saga";
import { userRootSagas } from "./user/user-sagas";

export function* rootSaga(){
    yield all([call(fetchProductDataAsync), call(userRootSagas)]);
} 