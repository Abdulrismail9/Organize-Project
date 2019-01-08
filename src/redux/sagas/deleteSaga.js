import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';


function* deleteEvent(action) {
    try{
     
        yield axios.delete(`/events/${action.payload}`);
        yield put({ type: 'FETCH_EVENTS' });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });
        console.log('delete saga working');
    } catch (error) {
        console.log('Delete saga failed', error);
    }
}

function* deleteSaga() {
    yield takeEvery('DELETE_EVENT', deleteEvent)
}

export default deleteSaga;