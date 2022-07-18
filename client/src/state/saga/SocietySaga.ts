import { call, put } from 'redux-saga/effects';
import { Api } from '../../settings/Api';
import { IAction } from '../core';
// import { requestRoomDataSuccess} from '../state/AuthState';
import axios from 'axios';
import { requestCreateSocietyDataError, requestCreateSocietyDataSuccess, requestSocietyDataError, requestSocietyDataSuccess } from '../state/SocietyState';
import { Action } from 'redux';
export const ChatAuthHeaders = {
    'Content-Type': ' application/json',
    'OCS-APIRequest' : true,
    'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT",
    mode: 'no-cors'
}
function* getSociety() {
    try {
        const society = yield call(axios.get, Api.getSociety, {headers:ChatAuthHeaders});
        yield put(requestSocietyDataSuccess(society.data.data));
    } catch (error) {
        yield put(requestSocietyDataError(error.message));
    }
}
function* createSociety(action: IAction) {
    try {
        const society = yield call(axios.post, Api.getSociety, action.payload, {headers:ChatAuthHeaders});
        yield put(requestCreateSocietyDataSuccess(society));
        yield getSociety();
    } catch (error) {
        yield put(requestCreateSocietyDataError(error.message));
    }
}


export const SocietyCloud = {
    getSociety,
    createSociety,
};

