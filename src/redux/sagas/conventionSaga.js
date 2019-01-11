import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';


function* fetchConvention() {
    console.log(' in fetchConvention');
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };


          const results = yield axios.get('/events/convention', config );
        yield put({type: 'SET_CONVENTION', payload: results.data });
    }
    catch(error) {
        console.log('error in get', error);
    }
}

function* conventionSaga() {
    yield takeEvery('FETCH_CONVENTION', fetchConvention);
}

export default conventionSaga;







