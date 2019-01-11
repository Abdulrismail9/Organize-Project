import axios from 'axios';
import { takeEvery, call } from 'redux-saga/effects';

function* postInterest(action) {
    yield call(axios.post, `/events/interests`, action.payload)
    
}


function* interestSaga() {
    yield takeEvery( 'POST_INTEREST', postInterest );
}

export default interestSaga;