import React from "react";
import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import "./TableUsers.scss";

function TableUsers({ users, handleDelete }) {
  return (
    <div className="tableUsersContainer">
      <h1>Tableau des adhérents : </h1>
      <table className="rwd-table">
        <tbody>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse email</th>
            <th>Année de naissance</th>
          </tr>
          {users.map((el, index) => (
            <tr key={el.id}>
              <td data-th="Nom">{el.lastName}</td>
              <td data-th="Prénom">{el.firstName}</td>
              <td data-th="Adresse email">{el.email}</td>
              <td data-th="Année de naissance">{el.age} </td>

              <td data-th="supprimer">
                {index === 0 ? (
                  ""
                ) : (
                  <AiFillDelete
                    onClick={() => {
                      handleDelete(el.id);
                    }}
                    style={{
                      fontSize: "28px",
                      cursor: "pointer",
                      color: "#11111 ",
                    }}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TableUsers.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  users: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TableUsers;
