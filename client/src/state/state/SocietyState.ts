import { Reducer } from "redux";
import { IAction, AppAction } from "../core";

// --- Action Type--- //
export const SocietyActionMap = {
  REQUEST_SOCIETY_DATA: "@auth/request-society-data",
  REQUEST_SOCIETY_DATA_SUCCESS: "@auth/request-society-data-success",
  REQUEST_SOCIETY_DATA_ERROR: "@auth/request-society-data-error",
  REQUEST_CREATE_SOCIETY_DATA: "@auth/request-create-society-data",
  REQUEST_CREATE_SOCIETY_DATA_SUCCESS: "@auth/request-create-society-data-success",
  REQUEST_CREATE_SOCIETY_DATA_ERROR: "@auth/request-create-society-data-error",
  RESET: "@auth/reset",
};

// --- Action Creator --- //
export const requestSocietyData = (payload) =>
  AppAction.create(SocietyActionMap.REQUEST_SOCIETY_DATA, payload);
export const requestSocietyDataSuccess = (payload) =>
  AppAction.create(SocietyActionMap.REQUEST_SOCIETY_DATA_SUCCESS, payload);
export const requestSocietyDataError = (payload) =>
  AppAction.create(SocietyActionMap.REQUEST_SOCIETY_DATA_ERROR, payload);
  export const requestCreateSocietyData = (payload) =>
  AppAction.create(SocietyActionMap.REQUEST_CREATE_SOCIETY_DATA, payload);
  export const requestCreateSocietyDataError = (payload) =>
  AppAction.create(SocietyActionMap.REQUEST_CREATE_SOCIETY_DATA_ERROR, payload);
  export const requestCreateSocietyDataSuccess = (payload) =>
  AppAction.create(SocietyActionMap.REQUEST_CREATE_SOCIETY_DATA_SUCCESS, payload);
export const reset = () => AppAction.create(SocietyActionMap.RESET);

export type SocietyState = Readonly<{
  loading?: boolean;
  error?: any;
  success?: any;
  data?: {
    authenticated: boolean;
  };
  societies?: any;
  phase?: any;
  block?: any;
}>;

const initialState: SocietyState = {
  loading: false,
  error: null,
  success: true,
  data: {
    authenticated: true,
  },
  societies: [],
  phase: [],
};
export const societyReducer: Reducer<SocietyState, IAction> = (
  state = initialState,
  action
) => {
  let newState: SocietyState = { ...initialState };

  switch (action.type) {
    case SocietyActionMap.REQUEST_SOCIETY_DATA_SUCCESS:
      newState = {
        ...state,
        loading: false,
        success: true,
        error: null,
        societies: action.payload,
      };
      break;
    case SocietyActionMap.REQUEST_CREATE_SOCIETY_DATA_SUCCESS:
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
