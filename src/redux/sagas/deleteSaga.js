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

function* deleteOrg(action) {
    try{
        yield axios.delete(`/events/${action.payload}/org`);
        yield put({ type: 'FETCH_ORG' });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });

    }catch (error){
        console.log('delete saga failed for org', error);
    }
}

function* deleteConvention(action) {
    try{
        yield axios.delete(`/events/${action.payload}/convention`);
        yield put({ type: 'FETCH_CONVENTION' });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });

    }catch (error){
        console.log('delete saga failed for convention', error);
    }
}

function* deleteUsers(action) {
    try{
        yield axios.delete(`/events/${action.payload}/count`);
        yield put({ type: 'FETCH_USER_LIST' });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });

    }catch (error){
        console.log('delete saga failed for convention', error);
    }
}

function* deleteInterests(action) {
    try{
        yield axios.delete(`/events/interest/${action.payload.person_id}`, { data: action.payload });
        yield put({ type: 'FETCH_USER', payload: action.payload.user });

    }catch (error){
        console.log('delete saga failed for convention', error);
    }
}



function* deleteSaga() {
    yield takeEvery('DELETE_EVENT', deleteEvent)
    yield takeEvery('DELETE_ORG', deleteOrg)
    yield takeEvery('DELETE_CONVENTION', deleteConvention)
    yield takeEvery('DELETE_USERS', deleteUsers)
    yield takeEvery('DELETE_INTEREST', deleteInterests)
}

export default deleteSaga;