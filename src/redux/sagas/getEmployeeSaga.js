import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

//Create Generator Funcitons for sagas
//Generator function that uses saga to ajax get request
function* fetchAllEmployeeSaga ( action ){
    try {
        console.log('fetchAllEmployeeSaga');
        //Making async AJAX (axios) request
        const response = yield axios.get('/api/employee/get');
        //Once that is back successfully, dispatch action to the reducer
        yield put({ type: 'SET_EMPLOYEES', payload: response.data});
    } catch(error) {
        console.log('error with employees get request', error);
    }
}

function* getKittenSaga() {
    yield takeLatest('FETCH_ALL_EMPLOYEE', fetchAllEmployeeSaga);
}

export default getKittenSaga;