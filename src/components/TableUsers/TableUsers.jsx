import React from "react";
import PropTypes from "prop-types";
import "./TableUsers.scss";

const TableUsers = ({ users }) => {
  return (
    <div className="tableUsersContainer">
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Status</th>
            <th>Âge</th>
          </tr>
          <tr>
            <td data-th="Name">oui</td>
            <td data-th="Prénom">yes</td>
            <td data-th="Status">Baby</td>
            <td data-th="Âge">12 ans</td>
          </tr>
          <tr>
            <td data-th="Name">oui</td>
            <td data-th="Prénom">yes</td>
            <td data-th="Status">Baby</td>
            <td data-th="Âge">12 ans</td>
          </tr>
          <tr>
            <td data-th="Name">oui</td>
            <td data-th="Prénom">yes</td>
            <td data-th="Status">Baby</td>
            <td data-th="Âge">12 ans</td>
          </tr>
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
