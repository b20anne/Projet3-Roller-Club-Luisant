import React from "react";
import axios from "axios";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./Actualites.scss";
import SingleActualite from "./SingleActualite";

const API_URL = process.env.REACT_APP_API_URL;

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
      .get(`${API_URL}api/actualities/`)

      .then((response) => response.data)
      .then((data) => {
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
      <div>
        <section className="actu-card">
          <h1>Actualités</h1>
          {actualities.map((actuality) => (
            <SingleActualite
              key={actuality.id}
              picture={`${API_URL}/public/images/${actuality.name}`}
              alt={actuality.alt}
              title={actuality.title}
              description={actuality.description}
            />
          ))}
        </section>
        <section className="actu-card-mobile">
          <h1>Actualités</h1>
          <div>
            <Slide>
              {actualities.map((actuality) => (
                <div>
                  <SingleActualite
                    key={actuality.id}
                    picture={`${API_URL}/public/images/${actuality.name}`}
                    alt={actuality.alt}
                    title={actuality.title}
                    description={actuality.description}
                  />
                </div>
              ))}
            </Slide>
          </div>
        </section>
      </div>
    );
  }
}

export default Actualites;
