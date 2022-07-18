import { combineReducers, ReducersMapObject } from 'redux';
import { AuthState, authReducer } from './AuthState';
import { ChatState, chatReducer } from './ChatState';
import { testScanReducer, TestScanState } from './TestScanState';
import { AuthStateApi, authReducerApi } from './AuthStateAPI';


export type RootState = {
    authState: AuthState;
    authStateApi: AuthStateApi;
    chatState: ChatState;
    testScanState: TestScanState;

};

const reducerMap: ReducersMapObject<any, any> = {
    authState: authReducer,
    authStateApi: authReducerApi,
    chatState: chatReducer,
    testScanState: testScanReducer,
};

export const RootReducer = () => {
    return combineReducers<RootState>(reducerMap);
};
