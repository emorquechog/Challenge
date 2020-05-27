import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import { rootReducer } from "./reducers";
import { IUserState } from "store/users/reducer";

export interface IAppState {
  user: IUserState;
}

export const mockStore = createStore(rootReducer);

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);

export const makeStore = (initialState: any, options: any) => {
  return createStore(rootReducer, composeWithDevTools(applyMiddleware()));
};
