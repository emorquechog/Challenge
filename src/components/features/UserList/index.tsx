import React from "react";
import { IUser } from "store/users/models";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import styles from "./userList.module.scss";
import { Link } from "react-router-dom";

interface IUserList {
  userList: IUser[];
  onDeleteUserInfo: (id: number) => void;
}
const UserList: React.FC<IUserList> = ({ userList, onDeleteUserInfo }) => {
  return (
    <div className={styles.container}>
      <TableContainer component={Paper} className={styles.table}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
              <TableCell align="right">Phone Number</TableCell>
              <TableCell align="right">GPA</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userList.map((row) => (
              <TableRow key={row.firstName}>
                <TableCell component="th" scope="row">
                  {row.firstName}
                </TableCell>
                <TableCell align="right">{row.lastName}</TableCell>
                <TableCell align="right">{row.phoneNumber}</TableCell>
                <TableCell align="right">{row.GPA}</TableCell>
                <TableCell align="right">
                  <span onClick={() => onDeleteUserInfo(row.id)}>Delete</span> |{" "}
                  <Link to={{ pathname: "/profile", search: `?id=${row.id}` }}>
                    Details
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
