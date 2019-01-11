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

function* editOrg(action) {
    console.log('editOrg');
    try{
        yield axios.put(`/events/${action.payload.id}/org`, action.payload );
        yield put({ type: 'FETCH_ORG' });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });
    }catch (error) {
        console.log('problem with edit saga', error)
    }
}

function* editConvention(action) {
    console.log('editConvention');
    try{
        yield axios.put(`/events/${action.payload.id}/convention`, action.payload );
        yield put({ type: 'FETCH_CONVENTION' });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });
    }catch (error) {
        console.log('problem with edit saga', error)
    }
}

function* editUsers(action) {
    console.log('editConvention');
    try{
        yield axios.put(`/events/${action.payload.id}/admins`, action.payload );
        yield put({ type: 'SET_USER_LIST'});
        yield put({ type: 'FETCH_USER', payload: action.payload.user });
    }catch (error) {
        console.log('problem with edit saga', error)
    }
}



function* editSaga() {
    yield takeEvery( 'EDIT_EVENT', editEvent );
    yield takeEvery( 'EDIT_ORG', editOrg );
    yield takeEvery( 'EDIT_CONVENTION', editConvention );
    yield takeEvery( 'EDIT_USERS', editUsers );
}

export default editSaga;
