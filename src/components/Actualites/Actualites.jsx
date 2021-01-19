import React from "react";
import axios from "axios";
import "./Actualites.scss";
import SingleActualite from "./SingleActualite";

class Actualites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      actualities: [],
    };
  }

  componentDidMount() {
    this.getActualities();
  }

  getActualities() {
    axios
      .get("http://localhost:8000/api/actualities/")

      .then((response) => response.data)
      .then((data) => {
        console.log(data);
        this.setState({
          actualities: data,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  render() {
    const { actualities } = this.state;
    return (
      <div className="actu-card">
        <h1>Actualités</h1>
        {actualities.map((actuality) => (
          <SingleActualite
            key={actuality.id}
            picture={`http://localhost:8000/public/pictures/${actuality.name}`}
            alt={actuality.alt}
            title={actuality.title}
            description={actuality.description}
          />
        ))}
      </div>
    );
  }
}

export default Actualites;
