import { ACTION_TYPES } from '../constants/actionTypes';

export async function req(dispatch: any, getState: any, actions: any[], subUrl: string, extraFunc: any[] = [], method: string = 'GET', body: any = null) {
  dispatch(awaitResponse(actions[0]));
  try {
    const res = await fetch(`https://demo.icon24.pl/WebApi/${subUrl}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
    });
    const json = await res;
    if (json.status === 200) {
      const parsedData = await res.json();
      (dispatch(dispatchResponse(parsedData, actions[1])));
      if (extraFunc !== []) {
        extraFunc.forEach((func: Function) => {
          dispatch(func);
        });
      }
    } else {
      const error = await res.json();
      dispatch(dispatchResponse(error.Message, actions[2]));
    }
  } catch (err) {
    dispatch(dispatchResponse(err.message, actions[2]));
  }
}

export async function reqStatus(dispatch: any, getState: any, actions: any[], subUrl: string, extraFunc: any[] = [], method: string = 'GET', body: any = null) {
  dispatch(awaitResponse(actions[0]));
  try {
    const res = await fetch(`https://demo.icon24.pl/WebApi/${subUrl}`, {
      method,
      body: body ? JSON.stringify(body) : undefined,
    });
    const json = await res;
    if (json.status === 200) {
      (dispatch(awaitResponse(actions[1])));
      if (extraFunc !== []) {
        extraFunc.forEach((func: Function) => {
          dispatch(func);
        });
      }
    } else {
      const error = await res.json();
      dispatch(dispatchResponse(error.Message, actions[2]));
    }
  } catch (err) {
    dispatch(dispatchResponse(err.message, actions[2]));
  }
}

export function awaitResponse(type: string) {
  return {
    type,
  };
}

export function dispatchResponse(payload: any, type: string) {
  return {
    payload,
    type,
  };
}

