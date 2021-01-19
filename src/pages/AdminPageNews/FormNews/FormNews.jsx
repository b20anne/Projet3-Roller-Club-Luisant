import React, { useState } from "react";
import axios from "axios";

import { MdPublish } from "react-icons/md";

import "./FormNews.scss";

function FormNews() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filename, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
        console.log(res);
        setFileName(res.filename);
        alert(`Image ${res.filename} téléchargé avec succès.`);
      })
      .catch((err) => {
        alert(err);
      });
  };

  function onSubmit(e) {
    e.preventDefault();
    onClickHandle();

    if (!title || !description) {
      alert(
        "Vous devez renseigner au minimum un nom de partenaire, et une description."
      );
    } else {
      axios
        .post("http://localhost:8000/api/actus", {
          Title: title,
          Description: description,
        })
        .then((res) => res.data)
        .catch((err) => {
          console.log();
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
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="formNews__inputDesc"
          name="description"
          id="description"
          placeholder="Entrez la description du post"
          onChange={(e) => setDescription(e.target.value)}
          rows="10"
        />

        <label htmlFor="file-upload" className="formNews__upload">
          cliquer pour ajouté une image
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
            <p>Ajouté le post</p>
          </div>
        </button>
      </div>
    </form>
  );
}

export default FormNews;
