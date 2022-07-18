import { Reducer } from 'redux';
import { IAction, AppAction } from '../core';
import {TestScanDetailData} from './TestScanJSON';
// --- Action Type--- //
export const TestScanActionMap = {
    REQUEST_LOGIN: '@TestScan/request-login'
};

// --- Action Creator --- //

export const requestLogin = (payload) => AppAction.create(TestScanActionMap.REQUEST_LOGIN, payload);

export type TestScanState = Readonly<{
    loading?: boolean;
    error?: any;
    success?: boolean;
    data: {
        test_scan_detail: any;
    };

}>;

const initialState: TestScanState = {
    loading: false,
    error: null,
    success: false,
    data: {
        test_scan_detail: TestScanDetailData
    }
};
export const testScanReducer: Reducer<TestScanState, IAction> = (state = initialState, action) => {
    let newState: TestScanState = { ...initialState };

    switch (action.type) {
        case TestScanActionMap.REQUEST_LOGIN:
            newState = {
                ...state,
                error: action.payload.error,
                loading: false,
                success: null,
                data: {
                    test_scan_detail: []
                },
            };
            break;
        default:
            newState = { ...state };
            break;
    }

    return newState;
};
