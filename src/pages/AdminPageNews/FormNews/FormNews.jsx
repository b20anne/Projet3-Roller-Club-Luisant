import React, { useState } from "react";
import axios from "axios";

import { MdPublish } from "react-icons/md";

import "./FormNews.scss";

const API_URL = process.env.REACT_APP_API_URL;

function FormNews() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [titleName, setTitleName] = useState("");
  const [descriptionName, setDescriptionName] = useState("");

  const onChangeHandle = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onClickHandle = () => {
    const data = new FormData();
    data.append("file", selectedFile);
    axios
      .post(`${API_URL}/api/admin/`, data)
      .then((res) => res.data)
      .then((res) => {
        const newsData = {
          title: titleName,
          description: descriptionName,
          name: res.filename,
          date: "12/01/2021",
          alt: res.filename,
        };
        axios
          .post(`${API_URL}/api/actualities/add`, newsData)
          .then((resTwo) => resTwo.data)
          .then(() => {
            alert(`Article créé`);
            window.location.reload();
          })
          .catch((err) => {
            alert(err.response.data.errorMessage);
          });
      })
      .catch((err) => {
        alert(err);
      });
  };

  function onSubmit(e) {
    e.preventDefault();
    if (!titleName && !descriptionName) {
      alert("Vous devez renseigner un titre et une description");
    } else {
      onClickHandle();
    }
  }

  return (
    <form className="formNews__globalContainer" noValidate onSubmit={onSubmit}>
      {/* <div > */}
      <input
        className="formNews__input"
        type="text"
        placeholder="Entrez le titre du post"
        name="title"
        id="title"
        onChange={(e) => setTitleName(e.target.value)}
      />
      <textarea
        className="formNews__inputDesc"
        name="description"
        id="description"
        placeholder="Entrez la description du post"
        onChange={(e) => setDescriptionName(e.target.value)}
        rows="10"
      />

      <label htmlFor="file-upload" className="formNews__upload">
        cliquez pour ajouter une image
        <input
          id="file-upload"
          type="file"
          onChange={onChangeHandle}
          accept="image/png, image/jpeg, image/jpg"
        />
      </label>

      <button className="formNews__btn" type="submit">
        <div className="formNews__containerBtn">
          <MdPublish className="formNews__icon" />
          <p>Ajouter le post</p>
        </div>
      </button>
      {/* </div> */}
    </form>
  );
}

export default FormNews;
