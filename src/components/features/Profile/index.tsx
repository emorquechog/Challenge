import React from "react";
import { IUser } from "store/users/models";
import styles from "./profile.module.scss";
import withQuery from "components/hoc/withQuery";

interface IProfile {
  user: IUser[];
  queryParams: any;
}
const Profile: React.FC<IProfile> = ({ user, queryParams }) => {
  const findUser = () => user.find((x) => x.id === Number(queryParams.id));
  const userData = findUser();
  return (
    <div className={styles.container}>
      <div className={styles.photo}></div>
      {userData && (
        <div className={styles.info}>
          {Object.entries(userData).map(([key, value]) => (
            <div className={styles.parent}>
              <div className={styles.left}>{key}</div>
              <div className={styles.Right}>{value}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default withQuery(Profile);
