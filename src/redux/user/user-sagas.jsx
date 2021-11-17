import { call, put, all, takeEvery, takeLatest } from "redux-saga/effects";
import {
  StartSignIn,
  SetUser,
  StartSignFilure,
  SuccessSignOut,
} from "./user-action";
//firestore
import {
  signInWithGoogle,
  savingUserInfo,
  auth,
} from "../../firebase/firebase";

function* saveUserData(user) {
  try {
    const userRef = yield call(savingUserInfo, user);
    const userSnapshot = yield userRef.get();
    yield put(SetUser(userSnapshot.data()));
  } catch (err) {
    yield put(StartSignFilure(err));
  }
}

function* saveUserDataWithGoogle() {
  const { user } = yield signInWithGoogle();
  yield saveUserData(user);
}

function* saveUserDataWithEmail({ payload: { email, pass } }) {
  const { user } = yield auth.signInWithEmailAndPassword(email, pass);
  yield saveUserData(user);
}

export function* startSignInWithGoogle() {
  yield takeLatest("START_SIGN_IN_WITH_GOOGLE", saveUserDataWithGoogle);
}

export function* startSignInWithEmail() {
  yield takeLatest("START_SIGN_IN_WITH_EMAIL", saveUserDataWithEmail);
}

export function* startSignUp() {
  yield takeLatest("START_SIGN_IN_WITH_GOOGLE", saveUserDataWithGoogle);
}

function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(SuccessSignOut());
  } catch (err) {
    console.log(err);
  }
}

function* startSignOut() {
  yield takeLatest("START_SIGN_OUT", signOutUser);
}

export function* userRootSagas() {
  yield all([
    call(startSignInWithGoogle),
    call(startSignInWithEmail),
    call(startSignOut),
  ]);
}
