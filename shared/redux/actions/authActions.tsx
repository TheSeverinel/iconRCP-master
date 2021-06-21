import { ACTION_TYPES } from '../constants/actionTypes';
import { req, reqStatus } from './globalActions';

export function login(code: string) {
  return async (dispatch: any, getState: any) => {
    req(dispatch, getState, [ACTION_TYPES.AUTH, ACTION_TYPES.AUTH_SUCCESS, ACTION_TYPES.AUTH_FAILURE],
      `/RCP/ManualScan?code=${code}`, [], "POST");
  };
}

export function update(cardScanLogId: number, eventTypeId: number) {
  return async (dispatch: any, getState: any) => {
    reqStatus(dispatch, getState, [ACTION_TYPES.UPDATE, ACTION_TYPES.UPDATE_SUCCESS, ACTION_TYPES.UPDATE_FAILURE],
      `/RCP/UpdateScan?cardScanLogId=${cardScanLogId}&eventTypeId=${eventTypeId}`, [], "POST");
  };
}

export function cardLogin(cardCode: string) {
  return async (dispatch: any, getState: any) => {
    req(dispatch, getState, [ACTION_TYPES.AUTH, ACTION_TYPES.AUTH_SUCCESS, ACTION_TYPES.AUTH_FAILURE],
      `/RCP/CardScan?code=${cardCode}`, [], "POST");
  };
}

export function clearUserData() {
  return {
    type: ACTION_TYPES.CLEAR_USER_DATA,
  };
}

