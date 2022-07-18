import { takeLatest } from 'redux-saga/effects';

import { AuthActionMap } from '../state/AuthState';
import { AuthSaga } from './AuthSaga';
import { NextCloud } from './NextCloud';
import { ChatActionMap } from '../state/ChatState'
import { WebSocketSagas } from "./webSocketSaga"
import { AuthActionApiMap } from '../state/AuthStateAPI';
export function* SagaWatcher() {
    yield takeLatest(AuthActionApiMap.REQUEST_AUTH_LOGIN, AuthSaga.Authlogin);
    yield takeLatest(AuthActionMap.REQUEST_SOCIETY_DATA, AuthSaga.formSubmit);
    yield takeLatest(AuthActionApiMap.REQUEST_SIGN_UP, AuthSaga.authSignup);
    yield takeLatest(AuthActionApiMap.REQUEST_Auth_FORGOT_PASSWORD, AuthSaga.authForgetPassword);
    // yield takeLatest(AuthActionMap.REQUEST_SOCKET_CONNECTION, WebSocketSagas.websocketManager);
}
