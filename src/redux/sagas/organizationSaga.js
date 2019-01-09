import axios from 'axios';
import { put, takeEvery} from 'redux-saga/effects';


function* fetchOrg() {
    console.log(' in fetchOrg');
    try{
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };


          const results = yield axios.get('/events/org', config );
        yield put({type: 'SET_ORGANIZATION', payload: results.data });
    }
    catch(error) {
        console.log('error in get', error);
    }
}

function* organizationSaga() {
    yield takeEvery('FETCH_ORG', fetchOrg );
}

export default organizationSaga;







