import { call, all, put, takeEvery, takeLatest } from "redux-saga/effects";
import {  fetchProductDataAsync } from "./productData/productData.saga";

export function* rootSaga(){
    yield all([call(fetchProductDataAsync)]);
} 