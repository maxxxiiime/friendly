import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardsDatas from "../datas/projets.json";
import Slider from "../components/slider/Slider";
import Collapse from "../components/Collapse/Collapse";
import Rating from "../components/rating/Rating";
import Banner from '../components/banner/Banner';
import Error from "./Error";
import ProjectLink from "../components/link/ProjectLink";

import "./styles/projet.scss";

export default function Projet() {
  const { id } = useParams(); // Utilisez useParams pour extraire l'ID du projet depuis l'URL
  const [projet, setProjet] = useState(null);

  useEffect(() => {
    // Recherchez le projet correspondant à l'ID dans CardsDatas
    const projetFound = CardsDatas.find((card) => card.id === id);

    if (projetFound) {
      setProjet(projetFound);
      window.scrollTo(0, 0);
    } else {
      // Si aucun projet n'est trouvé, redirigez vers la page d'erreur
      setProjet(null);
    }
  }, [id]);

  if (!projet) {
    return <Error />;
  }
  const projectLink = projet.link;
  const getNextProject = () => {
    const currentIndex = CardsDatas.findIndex((card) => card.id === id);
    const nextIndex = (currentIndex + 1) % CardsDatas.length;
    return CardsDatas[nextIndex];
  };

  const nextProject = getNextProject();

  const projetColor = {
    color: projet.color
  };
  const nextProjectColor = {
    color: nextProject.color
  };


  return (
    <div>
      <Header />
      <Banner image={projet.thecover} text={projet.title} />
      <div className="all-description">
        <div className="_text-left">
          <h2 style={projetColor}>{projet.title}</h2>
          <p style={projetColor}>{projet.subtitle}</p>
        </div>
        <div className="text-description">
          <p style={projetColor}>{projet.description}</p>
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
        <ProjectLink link={projectLink} />
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
            alt={"portfolio-img"}
            className="project-image"
          />
        ))}
      </div>
          <div className="next-projet">
          <Link to={`/projet/${getNextProject().id}`}>
            <button>NEXT</button>
            <div className="text-next-projet">
            <h3 style={nextProjectColor}>{nextProject.title}</h3>
            <p style={nextProjectColor}>{nextProject.subtitle}</p>
            </div>
            <h3 style={nextProjectColor}> ➔ </h3>
          </Link>
          </div>
      <Footer />
    </div>
  );
}
