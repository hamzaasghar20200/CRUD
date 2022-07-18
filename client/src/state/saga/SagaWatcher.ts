import { takeLatest } from 'redux-saga/effects';

import {SocietyActionMap } from '../state/SocietyState';
import { AuthSaga } from './AuthSaga';
import { SocietyCloud } from './SocietySaga';
import { ChatActionMap } from '../state/ChatState'
import { WebSocketSagas } from "./webSocketSaga"
import { AuthActionApiMap } from '../state/AuthStateAPI';
export function* SagaWatcher() {
    yield takeLatest(AuthActionApiMap.REQUEST_AUTH_LOGIN, AuthSaga.Authlogin);
    // yield takeLatest(AuthActionMap.REQUEST_SOCIETY_DATA, AuthSaga.formSubmit);
    yield takeLatest(AuthActionApiMap.REQUEST_SIGN_UP, AuthSaga.authSignup);
    yield takeLatest(SocietyActionMap.REQUEST_SOCIETY_DATA, SocietyCloud.getSociety);
    yield takeLatest(SocietyActionMap.REQUEST_CREATE_SOCIETY_DATA, SocietyCloud.createSociety);
    yield takeLatest(AuthActionApiMap.REQUEST_Auth_FORGOT_PASSWORD, AuthSaga.authForgetPassword);
    // yield takeLatest(AuthActionMap.REQUEST_SOCKET_CONNECTION, WebSocketSagas.websocketManager);
}
