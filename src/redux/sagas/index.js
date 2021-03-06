import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import eventsSaga from './eventsSaga';
import deleteSaga from './deleteSaga';
import editSaga from './editSaga';
import organizationSaga from './organizationSaga';
import conventionSaga from './conventionSaga';
import userListSaga from './userListSaga';
import interestSaga from './interestsSaga';



// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    eventsSaga(),
    deleteSaga(),
    editSaga(),
    organizationSaga(),
    conventionSaga(),
    userListSaga(),
    interestSaga()
  ]);
}
