import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer/root/rootReducer";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
