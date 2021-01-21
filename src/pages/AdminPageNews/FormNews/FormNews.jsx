import React, { useState } from "react";
import axios from "axios";

import { MdPublish } from "react-icons/md";

import "./FormNews.scss";

function FormNews() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [titleName, setTitleName] = useState("");
  const [descriptionName, setDescriptionName] = useState("");

  const onChangeHandle = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const onClickHandle = () => {
    console.log("file send");
    const data = new FormData();
    data.append("file", selectedFile);
    console.table("form", data.get("file"));
    axios
      .post("http://localhost:8000/api/admin/", data)
      .then((res) => res.data)
      .then((res) => {
        setFileName(res.filename);
        alert(`Image ${res.filename} téléchargée avec succès.`);
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
      const newsData = {
        title: titleName,
        description: descriptionName,
        name: filename,
        date: "12/01/2021",
        alt: filename,
      };

      axios
        .post("http://localhost:8000/api/actualities/add", newsData)
        .then((res) => res.data)
        .catch((err) => {
          alert(err.response.data.errorMessage);
        });
    }
  }

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className="formNews__globalContainer">
        <input
          className="formNews__input"
          type="text"
          placeholder="Entrez le titre de votre post"
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
      </div>
    </form>
  );
}

export default FormNews;