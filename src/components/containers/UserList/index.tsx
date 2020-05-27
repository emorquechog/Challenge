import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "store";
import { deleteUser } from "store/users/actions";
import { ReadonlyNullable } from "utilis/typingsGenerics";
import UserList from "components/features/UserList";

type AppState = ReadonlyNullable<IAppState>;

function mapStateToProps({ user }: AppState) {
  return { userList: user.info };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return {
    onDeleteUserInfo: (id: number) => dispatch(deleteUser(id)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(UserList);
