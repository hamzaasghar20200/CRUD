import { applyMiddleware, createStore, compose, Middleware } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { persistStore } from "redux-persist";
import { SagaWatcher } from "./saga/SagaWatcher";
import { RootReducer } from "./state/RootReducer";
import { websocketManager } from "./saga/webSocketSaga";
const websocketMiddleware = createSagaMiddleware();
const middlewares: Array<Middleware> = [websocketMiddleware];
const enhancers = [applyMiddleware(...middlewares)];
const sagaMiddleware = createSagaMiddleware();

if (process.env.NODE_ENV !== "production") {
  middlewares.push(createLogger());
}
middlewares.push(sagaMiddleware);
enhancers.push(applyMiddleware(...middlewares));

export const configureStore = () => {
  const Store = createStore(RootReducer(), compose(...enhancers));
  sagaMiddleware.run(SagaWatcher);
  // websocketMiddleware.run(websocketManager);
  const Persistor = persistStore(Store);

  if (process.env.NODE_ENV !== "production") {
    (window as any).Store = Store;
  }

  return { Store, Persistor };
};
