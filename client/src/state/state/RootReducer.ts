import { combineReducers, ReducersMapObject } from 'redux';
import { SocietyState, societyReducer } from './SocietyState';
import { ChatState, chatReducer } from './ChatState';
import { testScanReducer, TestScanState } from './TestScanState';
import { AuthStateApi, authReducerApi } from './AuthStateAPI';


export type RootState = {
    societyState: SocietyState;
    authStateApi: AuthStateApi;
    chatState: ChatState;
    testScanState: TestScanState;

};

const reducerMap: ReducersMapObject<any, any> = {
    societyState: societyReducer,
    authStateApi: authReducerApi,
    chatState: chatReducer,
    testScanState: testScanReducer,
};

export const RootReducer = () => {
    return combineReducers<RootState>(reducerMap);
};
