import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardsDatas from "../datas/projets.json";
import Slider from "../components/slider/Slider";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/rating/Rating";
import Banner from '../components/banner/Banner';
import Error from "./Error";

import "./styles/projet.scss";

export default function Projet() {
  const queryParams = new URLSearchParams(window.location.search);

  const idLog = queryParams.get("id");
  const projet = CardsDatas.filter((card) => {
    return idLog === card.id;
  })[0];
  console.log(projet);
  console.log(idLog);

  if (!projet) {
    return <Error />;
  }

  const projetColor = {
    color: projet.color // Utilisez la couleur du projet définie dans portfolio.json
  };

  return (
    <div>

      <Header />
      <Banner image={projet.thecover} text={projet.title}/>
      
      <div className="all-description">
      
        <div className="_text-left">
          <h2 style={projetColor}>{projet.title}</h2>
          <p>{projet.location}</p>
        </div>
        <Slider image={projet.pictures} />
        <div className="tags-n-rating">
        
          <div className="tags">
            {projet.tags.map((tag, index) => (
              <div key={index} className="tag">
                {tag}
              </div>
            ))}
          </div>

          <Rating ratingValue={projet.rating} />
        </div>
        <div className="host">
          <div className="host-name">{projet.host.name}</div>
          <img src={projet.host.picture} alt={projet.host.name} />
        </div>

        <div className="collapse-logement">
          <Collapse
            title=" Description"
            content={projet.description}
            className="description-collapse"
            style={projetColor}
          />

          <Collapse
            title=" Équipements"
            content={
              <ul>
                {projet.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </div>
      <div className="images-container">
            {projet.pictures.map((picture, index) => (
              <img
                key={index}
                src={picture}
                alt={'portfolio-img' }
                className="project-image"
              />
            ))}
          </div>
      <Footer />
    </div>
  );
}
