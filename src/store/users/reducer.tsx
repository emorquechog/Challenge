import { UsersActionType } from "./constants";
import { IUser } from "./models";
import { Action } from "./actions";
import { ReadonlyNullable } from "utilis/typingsGenerics";

export interface IUserState {
  info: IUser[];
}

const initialState: IUserState = {
  info: [],
};
type UserStateProps = ReadonlyNullable<typeof initialState>;

const userReducer = (
  state: UserStateProps = initialState,
  action: Action
): UserStateProps => {
  switch (action.type) {
    case UsersActionType.ADD_USER_INFO:
      const dataAssign = [action.data, ...state.info];
      return {
        info: [...dataAssign],
      };
    case UsersActionType.DELETE_USER:
      const deleteUser = [...state.info];
      const findIndex = state.info.findIndex((x) => x.id === Number(action.id));
      deleteUser.splice(findIndex, 1);
      return {
        info: [...deleteUser],
      };
    default:
      return state;
  }
};

export default userReducer;
