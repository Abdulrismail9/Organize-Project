import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* editEvent(action) {
    console.log('editEvent');
    try{
        yield axios.put(`/events/${action.payload.id}`, action.payload );
        yield put({ type: 'FETCH_EVENTS' });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });
    }catch (error) {
        console.log('problem with edit saga', error)
    }
}




function* editSaga() {
    yield takeEvery( 'EDIT_EVENT', editEvent );
}

export default editSaga;
