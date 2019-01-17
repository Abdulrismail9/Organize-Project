import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';

function* postInterest(action) {
    yield call(axios.post, `/events/interests`, action.payload)
    yield put({type: 'FETCH_INTERESTS' });
    
}

function* fetchInterests() {
    console.log(' in fetchInterests');
    try{
        const results = yield axios.get('/events/clickedInterest' );
        console.log('======================', results)
        yield put({type: 'SET_INTEREST', payload: results.data });
    }
    catch(error) {
        console.log('error in get saga for interest', error);
    }
}



function* interestSaga() {
    yield takeEvery( 'FETCH_INTERESTS', fetchInterests );
    yield takeEvery( 'POST_INTEREST', postInterest );
    

}

export default interestSaga;