import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardsDatas from "../datas/logements.json";
import Slider from "../components/slider/Slider";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/rating/Rating";
import Error from "./Error";
import "./styles/logement.scss";

export default function FicheLogement() {
  const queryParams = new URLSearchParams(window.location.search);

  const idLog = queryParams.get("id");
  const logement = CardsDatas.filter((card) => {
    return idLog === card.id;
  })[0];
  console.log(logement);
  console.log(idLog);

  if (!logement) {
    return <Error />;
  }
  return (
    <div>
      <Header />
      <Slider image={logement.pictures} />
      <div className="all-description">
        <div className="_text-left">
          <h2>{logement.title}</h2>
          <p>{logement.location}</p>
        </div>
        <div className="tags-n-rating">
          <div className="tags">
            {logement.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>

          <Rating ratingValue={logement.rating} />
        </div>
        <div className="host">
          <div className="host-name">{logement.host.name}</div>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>

        <div className="collapse-logement">
          <Collapse
            title=" Description"
            content={logement.description}
            className="description-collapse"
          />

          <Collapse
            title=" Équipements"
            content={
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
