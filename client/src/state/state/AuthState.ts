import { Reducer } from 'redux';
import { IAction, AppAction } from '../core';

// --- Action Type--- //
export const AuthActionMap = {
    REQUEST_SOCIETY_DATA: '@auth/request-society-data',
    REQUEST_SOCIETY_DATA_SUCCESS: '@auth/request-society-data-success',
    RESET: '@auth/reset',
};

// --- Action Creator --- //
export const requestSocietyData = (payload) => AppAction.create(AuthActionMap.REQUEST_SOCIETY_DATA, payload);
export const requestSocietyDataSuccess = (payload) => AppAction.create(AuthActionMap.REQUEST_SOCIETY_DATA_SUCCESS, payload);
export const reset = () => AppAction.create(AuthActionMap.RESET);

export type AuthState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: any;
    data?: {
        authenticated: boolean;
    };
    societies?:any,
    phase?:any,
    block?:any,
}>;

const initialState: AuthState = {
    loading: false,
    error: null,
    success: true,
    data: {
        authenticated: true,
    },
    societies:[],
    phase:[],
};
export const authReducer: Reducer<AuthState, IAction> = (state = initialState, action) => {
    let newState: AuthState = { ...initialState };

    switch (action.type) {
        case AuthActionMap.REQUEST_SOCIETY_DATA_SUCCESS:
            newState = {
                ...state,
                loading: false,
                success: true,
                error: null,
                societies: [...state.societies, action.payload]
            };
            break;
        default:
            newState = { ...state };
            break;
    }

    return newState;
};
