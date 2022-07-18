
   
import { WEBSOCKET_STATE } from './WebSocketConstants';

export const isWebsocketConnected = state => state[WEBSOCKET_STATE].connected;

export const isWebsocketDisconnected = state =>
  state[WEBSOCKET_STATE].disconnected;