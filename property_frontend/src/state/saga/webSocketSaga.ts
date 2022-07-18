import { eventChannel } from 'redux-saga';
import { take, call, put, fork } from 'redux-saga/effects';
import ReconnectingWebSocket from 'reconnecting-websocket';

import {
  websocketOpened,
  websocketClosed,
  websocketMessageReceived,
  websocketErrorThrown,
  websocketConnection,
} from '../state/WebSocketActions';

const createWebsocketChannel = ws =>
  eventChannel(emitter => {
    ws.addEventListener('message', message => {
      emitter(websocketMessageReceived(message.data));
    });

    ws.addEventListener('open', () => {
      emitter(websocketOpened());
    });
    ws.addEventListener('connection', () =>{
      emitter(websocketConnection());
    })
    ws.addEventListener('error', () => {
      emitter(websocketErrorThrown());
    });

    ws.addEventListener('close', () => {
      emitter(websocketClosed());
    });

    return () => ws.close();
  });

function* websocketMessageSender(ws) {
  while (true) {
    const action = yield take(a => a.websocket);
    ws.send(JSON.stringify(action.websocket));
  }
}

export function* websocketManager() {
  const ws = new ReconnectingWebSocket('wss://localhost:3000');
  const wsChannel = yield call(createWebsocketChannel, ws);
  yield fork(websocketMessageSender, ws);
  while (true) {
    const action = yield take(wsChannel);
    yield put(action);
  }
}

export const WebSocketSagas = {
  websocketManager,
};