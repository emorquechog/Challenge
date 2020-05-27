import { UsersActionType } from "./constants";
import { IUser } from "./models";

interface IAddUser {
  type: UsersActionType.ADD_USER_INFO;
  data: IUser;
}

interface IDeleteUser {
  type: UsersActionType.DELETE_USER;
  id: number;
}
export type Action = IAddUser | IDeleteUser;

export const setUserInfo = (data: IUser) => ({
  type: UsersActionType.ADD_USER_INFO,
  data,
});

export const deleteUser = (id: number) => ({
  type: UsersActionType.DELETE_USER,
  id,
});
