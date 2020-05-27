import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { IAppState } from "store";
import { setUserInfo } from "store/users/actions";
import { IUser } from "store/users/models";
import { ReadonlyNullable } from "utilis/typingsGenerics";
import RegisterUser from "components/features/RegisterUser";

type AppState = ReadonlyNullable<IAppState>;

function mapStateToProps({ user }: AppState) {
  return { user };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return {
    onSetUserInfo: (data: IUser) => dispatch(setUserInfo(data)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterUser);
