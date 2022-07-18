import { call, put } from 'redux-saga/effects';
import { Api } from '../../settings/Api';
import { IAction } from '../core';
// import { requestRoomDataSuccess} from '../state/AuthState';
import axios from 'axios';
import { requestChatGetUsersMessageSuccess, requestChatMessageError, requestChatMessageSuccess, requestChatFileUploadSuccess, requestChatFileUploadError, requestChatSendFileSuccess, requestChatGetImageSuccess, requestChatGetImageError } from '../state/ChatState';
export const ChatAuthHeaders = {
    'Authorization': 'Basic '+btoa('medalyc:Asdf@1234$@'),
    'Content-Type': ' application/json',
    'OCS-APIRequest' : true,
    'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT",
    mode: 'no-cors'
}
export const MessagesAuthHeaders = {
    'Authorization': 'Basic '+btoa('medalyc:Asdf@1234$@'),
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'OCS-APIRequest' : true,
    'Access-Control-Allow-Methods': "GET,POST,OPTIONS,DELETE,PUT",
    mode: 'no-cors'
}
// function* getRooms() {
//     try {
//         const room = yield call(axios.get, Api.getRooms, {headers:ChatAuthHeaders});
//         yield put(requestRoomDataSuccess(room));
//     } catch (error) {
//         yield put(requestChatMessageError(error.message));
//     }
// }


export const NextCloud = {
};

