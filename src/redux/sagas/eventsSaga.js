import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

function* AddEvent(action) {
    console.log('in addEvent saga', action.payload )
    try{
        yield call(axios.post, '/events', action.payload)
        yield put({type: 'FETCH_EVENTS' });
        console.log('testing', action.payload )
    }
    catch(error) {
        console.log('error in post', error) 
    }
}

function* fetchEvents() {
      console.log(' in fetchEvents');
      try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };


          const results = yield axios.get('/events', config );
          yield put({type: 'SET_EVENTS', payload: results.data });
      }
      catch(error) {
          console.log('error in get', error);
      }
}


function* eventsSaga() {
    yield takeEvery('FETCH_EVENTS', fetchEvents );
  yield takeEvery('ADD_NEW', AddEvent );
}

export default eventsSaga;
