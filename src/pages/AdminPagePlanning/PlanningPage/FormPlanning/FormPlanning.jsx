import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { ImCross } from "react-icons/im";
import { FaCalendar, FaChartBar } from "react-icons/fa";

import "./FormPlanning.scss";

const FormPlanning = ({ category, closeMenu }) => {
  const [urlName, setUrl] = useState("");
  const [titleName, setTitle] = useState("");

  const datePost = () => {
    const dateObj = new Date();
    const month = dateObj.getUTCMonth() + 1;
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();

    return `${day}/${month}/${year}`;
  };

  const clickHandle = () => {
    const postData = {
      title: titleName,
      date: datePost(),
      url: urlName,
      category,
    };
    console.log(postData);
    axios
      .post("http://localhost:8000/api/planning/add", postData)
      .then((resTwo) => resTwo.data)
      .then(() => {
        alert(`${category} créé`);
        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.errorMessage);
      });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!titleName && !urlName) {
      alert("Vous devez renseigner un titre et un lien");
    } else {
      clickHandle();
    }
  };

  return (
    <div className="formPlanning__globalContainer">
      <form className="formPlanning__form" noValidate onSubmit={onSubmit}>
        <div
          className="formPlanning__closeBtn"
          onClick={closeMenu}
          onKeyDown
          role="button"
          tabIndex="0"
        >
          <ImCross />
        </div>
        <div className="formPlanning__inputsContainer">
          <input
            type="text"
            placeholder={`Entrez le titre de votre ${category}`}
            value={titleName}
            name="title"
            id="title"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <input
            type="url"
            placeholder={`Entrez le lien de votre ${category}`}
            value={urlName}
            name="url"
            id="url"
            onChange={(e) => {
              setUrl(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            backgroundColor: category === "sondage" ? "red" : "orange",
          }}
        >
          {category === "sondage" ? <FaChartBar /> : <FaCalendar />}
          Post
        </button>
      </form>
    </div>
  );
};

FormPlanning.propTypes = {
  category: PropTypes.string.isRequired,
  closeMenu: PropTypes.func.isRequired,
};

export default FormPlanning;
