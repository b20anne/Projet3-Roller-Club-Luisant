import React from "react";
import PropTypes from "prop-types";
import "./TableUsers.scss";

const TableUsers = ({ users }) => {
  return (
    <div className="tableUsersContainer">
      <h1>Tableaux des utilisateurs : </h1>
      <table className="rwd-table">
        <tbody>
          {users.map((el) => (
            <tr key={el.id}>
              <td data-th="Name">{el.lastName}</td>
              <td data-th="Prénom">{el.firstName}</td>
              <td data-th="Status">Baby</td>
              <td data-th="Âge">{el.age} ans</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableUsers.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.array.isRequired,
};

export default TableUsers;
