import { call, put } from 'redux-saga/effects';
import { HttpService } from '../service/HttpService';
import { Api } from '../../settings/Api';
import { IAction } from '../core';
import { requestAuthFrogetPasswordError, requestAuthFrogetPasswordSuccess, requestAuthLoginError, requestAuthLoginSuccess, requestAuthSignUpError, requestAuthSignUpSuccess } from '../state/AuthStateAPI';
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { push } from 'connected-react-router';
import { requestSocietyDataSuccess } from '../state/AuthState';
export const AuthHeader = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
}
function* Authlogin(action: IAction) {
    try {
        const data = yield call(axios.post, Api.authLogin, action.payload, {headers:AuthHeader});        
        yield put(requestAuthLoginSuccess(data));
        yield put(push('/'));
        var token = data.data.data;
        var decoded = jwt_decode(token);
        localStorage.setItem('loginToken', token)
        localStorage.getItem('loginToken')
        localStorage.setItem('decodeLoginToken',  JSON.stringify(decoded))
        var retrievedObject = localStorage.getItem('decodeLoginToken');
        var jsonRetrievedObject = JSON.parse(retrievedObject)
        var medalyc_id = jsonRetrievedObject.medalyc_id;
        localStorage.setItem('medalycId', medalyc_id)
        localStorage.getItem('medalycId')

        // const getToken = localStorage.getItem('loginToken')
        
    } catch (error) {
        yield put(requestAuthLoginError(error));

    }
}

function* authSignup(action: IAction) {
    try {
        const data = yield call(axios.post, Api.authSignup, action.payload, {headers:AuthHeader});
        yield put(requestAuthSignUpSuccess(data));
    } catch (error) {
        yield put(requestAuthSignUpError(error));
    }
}
function* formSubmit(action: IAction) {
    try {
        const data = yield call(axios.post, action.payload);
        yield put(requestSocietyDataSuccess(data));
    } catch (error) {
        yield put(requestAuthSignUpError(error));
    }
}
function* authForgetPassword(action: IAction) {
    try {
        const data = yield call(axios.post, Api.authForgetPassword, action.payload, {headers:AuthHeader});
        yield put(requestAuthFrogetPasswordSuccess(data));
    } catch (error) {
        yield put(requestAuthFrogetPasswordError(error));
    }
}

export const AuthSaga = {
    Authlogin,
    formSubmit,
    authSignup,
    authForgetPassword
};
