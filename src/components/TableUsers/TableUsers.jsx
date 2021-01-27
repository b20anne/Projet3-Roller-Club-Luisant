import React from "react";
import PropTypes from "prop-types";
import "./TableUsers.scss";

const TableUsers = ({ users }) => {
  return (
    <div className="tableUsersContainer">
      <h1>Tableaux des utilisateurs : </h1>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Statut</th>
            <th>Âge</th>
          </tr>
          {users.map((el) => (
            <tr key={el.id}>
              <td data-th="Nom">{el.lastName}</td>
              <td data-th="Prénom">{el.firstName}</td>
              <td data-th="Statut">
                {el.Status_id === undefined ? "À renseigner" : el.Status_id}
              </td>
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
