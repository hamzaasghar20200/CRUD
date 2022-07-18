import { Reducer } from "redux";
import { IAction, AppAction } from "../core";

// --- Action Type--- //
export const ChatActionMap = {
  REQUEST_CHAT_MESSAGE: "@auth/request-chat-message",
  REQUEST_CHAT_MESSAGE_SUCCESS: "@auth/request-chat-message-success",
  REQUEST_CHAT_FILE_UPLOAD: "@auth/request-chat-file-upload",
  REQUEST_CHAT_FILE_UPLOAD_SUCCESS: "@auth/request-chat-file-upload-success",
  REQUEST_CHAT_FILE_UPLOAD_ERROR: "@auth/request-chat-file-upload-error",

  REQUEST_CHAT_SENF_FILE: "@auth/request-chat-send-file",
  REQUEST_CHAT_SENF_FILE_SUCCESS: "@auth/request-chat-send-file-success",
  REQUEST_CHAT_SENF_FILE_ERROR: "@auth/request-chat-send-file-error",

  REQUEST_CHAT_GET_IMAGE: "@auth/request-chat-get-image",
  REQUEST_CHAT_GET_IMAGE_SUCCESS: "@auth/request-chat-get-image-success",
  REQUEST_CHAT_GET_IMAGE_ERROR: "@auth/request-chat-get-image-error",


  REQUEST_CHAT_CONVERSATION: "@auth/request-chat-conversation",
  REQUEST_CHAT_CONVERSATION_SUCCESS: "@auth/request-chat-conversation-success",
  REQUEST_CHAT_GET_USERS_MESSAGES: "@auth/request-chat-get-users-messages",
  REQUEST_CHAT_GET_USERS_MESSAGES_SUCCESS:
    "@auth/request-chat-get-users-message-success",
  REQUEST_CHAT_MESSAGE_ERROR: "@auth/request-chat-message-error",

  RESET: "@auth/reset",
};

// --- Action Creator --- //

export const requestChatMessage = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_MESSAGE, payload);
export const requestChatMessageSuccess = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_MESSAGE_SUCCESS, payload);
export const requestChatFileUpload = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_FILE_UPLOAD, payload);
export const requestChatFileUploadSuccess = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_FILE_UPLOAD_SUCCESS, payload);
export const requestChatFileUploadError = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_FILE_UPLOAD_ERROR, payload);

export const requestChatSendFile = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_SENF_FILE, payload);
export const requestChatSendFileSuccess = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_SENF_FILE_SUCCESS, payload);
export const requestChatSendFileError = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_SENF_FILE_ERROR, payload);

export const requestChatGetUsersMessage = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_GET_USERS_MESSAGES, payload);
export const requestChatGetUsersMessageSuccess = (payload) =>
  AppAction.create(
    ChatActionMap.REQUEST_CHAT_GET_USERS_MESSAGES_SUCCESS,
    payload
  );
  

  export const requestChatGetImage = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_GET_IMAGE, payload);
export const requestChatGetImageSuccess = (payload) =>
  AppAction.create(
    ChatActionMap.REQUEST_CHAT_GET_IMAGE_SUCCESS,
    payload
  );
  export const requestChatGetImageError = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_GET_IMAGE_ERROR, payload);

export const requestChatConversation = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_CONVERSATION, payload);
export const requestChatConversationSuccess = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_CONVERSATION_SUCCESS, payload);
export const requestChatMessageError = (payload) =>
  AppAction.create(ChatActionMap.REQUEST_CHAT_MESSAGE_ERROR, payload);

export const reset = () => AppAction.create(ChatActionMap.RESET);

export type ChatState = Readonly<{
  loading?: boolean;
  error?: any;
  success?: any;
  data: {
    authenticated: boolean;
  };
  message?: any;
  image?:any;
  getAllMessages?: any;
}>;

const initialState: ChatState = {
  loading: false,
  error: null,
  success: true,
  data: {
    authenticated: true,
  },
  message: [],
  getAllMessages: [],
  image: null
};
export const chatReducer: Reducer<ChatState, IAction> = (
  state = initialState,
  action
) => {
  let newState: ChatState = { ...initialState };

  switch (action.type) {
    case ChatActionMap.REQUEST_CHAT_MESSAGE_SUCCESS:
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
    case ChatActionMap.REQUEST_CHAT_FILE_UPLOAD_SUCCESS:
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
    case ChatActionMap.REQUEST_CHAT_SENF_FILE_SUCCESS:
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
    case ChatActionMap.REQUEST_CHAT_CONVERSATION_SUCCESS:
      newState = {
        ...state,
        loading: false,
        success: true,
        error: null,
        message: action.payload,
      };
      break;
      case ChatActionMap.REQUEST_CHAT_GET_IMAGE_SUCCESS:
      newState = {
        ...state,
        loading: false,
        success: true,
        error: null,
        image: action.payload,
      };
      break;
    case ChatActionMap.REQUEST_CHAT_GET_USERS_MESSAGES_SUCCESS:
      newState = {
        ...state,
        loading: false,
        success: true,
        error: null,
        getAllMessages: action.payload.data.ocs.data,
      };
      break;
    default:
      newState = { ...state };
      break;
  }

  return newState;
};
