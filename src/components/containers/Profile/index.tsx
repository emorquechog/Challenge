import { connect } from "react-redux";
import { IAppState } from "store";
import { ReadonlyNullable } from "utilis/typingsGenerics";
import Profile from "components/features/Profile";

type AppState = ReadonlyNullable<IAppState>;

function mapStateToProps({ user }: AppState) {
  return { user: user.info };
}

export default connect(mapStateToProps, null)(Profile);
