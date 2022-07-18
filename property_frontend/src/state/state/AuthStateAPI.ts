import { Reducer } from 'redux';
import { IAction, AppAction } from '../core';

// --- Action Type--- //
export const AuthActionApiMap = {
    REQUEST_AUTH_LOGIN: '@auth/request-auth-login',
    REQUEST_AUTH_LOGIN_SUCCESS: '@auth/request-auth-login-success',
    REQUEST_AUTH_LOGIN_ERROR: '@auth/request-auth-login-error',
    

    REQUEST_SIGN_UP: '@auth/request-auth-sign-up',
    REQUEST_SIGN_UP_SUCCESS: '@auth/request-auth-sign-up-success',
    REQUEST_SIGN_UP_ERROR: '@auth/request-auth-sign-up-error',

    REQUEST_Auth_FORGOT_PASSWORD: '@auth/request-auth-forgot-password',
    REQUEST_Auth_FORGOT_PASSWORD_SUCCESS: '@auth/request-auth-forgot-password-success',
    REQUEST_Auth_FORGOT_PASSWORD_ERROR: '@auth/request-auth-forgot-password-error',

    RESET: '@auth/reset',
};

// --- Action Creator --- //

export const requestAuthLogin = (payload) => AppAction.create(AuthActionApiMap.REQUEST_AUTH_LOGIN, payload);
export const requestAuthLoginSuccess = (payload) => AppAction.create(AuthActionApiMap.REQUEST_AUTH_LOGIN_SUCCESS, payload);
export const requestAuthLoginError = (payload) => AppAction.create(AuthActionApiMap.REQUEST_AUTH_LOGIN_ERROR, payload);

export const requestAuthSignUp = (payload) => AppAction.create(AuthActionApiMap.REQUEST_SIGN_UP, payload);
export const requestAuthSignUpSuccess = (payload) => AppAction.create(AuthActionApiMap.REQUEST_SIGN_UP_SUCCESS, payload);
export const requestAuthSignUpError = (payload) => AppAction.create(AuthActionApiMap.REQUEST_SIGN_UP_ERROR, payload);

export const requestAuthFrogetPassword = (payload) => AppAction.create(AuthActionApiMap.REQUEST_Auth_FORGOT_PASSWORD, payload);
export const requestAuthFrogetPasswordSuccess = (payload) => AppAction.create(AuthActionApiMap.REQUEST_Auth_FORGOT_PASSWORD_SUCCESS, payload);
export const requestAuthFrogetPasswordError = (payload) => AppAction.create(AuthActionApiMap.REQUEST_Auth_FORGOT_PASSWORD_ERROR, payload);

export const reset = () => AppAction.create(AuthActionApiMap.RESET);

export type AuthStateApi = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data: {
        authenticated: boolean;
    };
}>;

const initialState: AuthStateApi = {
    loading: false,
    error: null,
    success: true,
    data: {
        authenticated: true,
    },
};
export const authReducerApi: Reducer<AuthStateApi, IAction> = (state = initialState, action) => {
    let newState: AuthStateApi = { ...initialState };

    switch (action.type) {
        case AuthActionApiMap.REQUEST_AUTH_LOGIN:
            newState = {
                ...state,
                loading: false,
                success: true,
                error: null,
                data: {
                    authenticated: false,
                },
            };
            break;
        default:
            newState = { ...state };
            break;
    }

    return newState;
};
