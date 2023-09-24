import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import CardsDatas from "../datas/projets.json";
import Collapse from "../components/Collapse/Collapse";
import Banner from '../components/banner/Banner';
import Error from "./Error";
import ProjectLink from "../components/link/ProjectLink";
import Loader from "../components/loader/Loader"
import "./styles/projet.scss";

export default function Projet() {
  const { id } = useParams(); // useParams pour extraire l'ID du projet depuis l'URL
  const [projet, setProjet] = useState(null);
  const [loading, setLoading] = useState(true); // Ajoute un état de chargement

  useEffect(() => {
    // Recherche le projet correspondant à l'ID dans CardsDatas
    const projetFound = CardsDatas.find((card) => card.id === id);

    if (projetFound) {
      setProjet(projetFound);
      setLoading(false);
      window.scrollTo(0, 0);
    } else {
      // Si aucun projet n'est trouvé, loader puis la page d'erreur
      setProjet(null);
      setLoading(false);
    }
  }, [id]);
  if (loading) {
    return <Loader />;
  }
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
      <div className='grunge'></div>
      <Header />
      <Banner image={projet.thecover} text={projet.title} />
      <div className="all-description" style={projetColor}>
        <div className="_text-left">
          <h2 style={projetColor}>{projet.title}</h2>
          <p style={projetColor}>{projet.subtitle}</p>
        </div>
        <div className="web-link">
        <ProjectLink link={projectLink} style={projetColor}/>
        </div>

        <div className="tags-n-rating">
          <div className="tags" style={projetColor}>
            {projet.tags.map((tag, index) => (
              <div key={index} className="tag" style={projetColor}>
                {tag}
              </div>
            ))}
          </div>
        </div>
        

        <div className="collapse-description"  style={projetColor}>
          <Collapse
            title=" Description"
            content={projet.description}
            className="description-collapse"
            style={projetColor}
          />
        </div>
        
      </div>
      <div className="images-container">
        {projet.images.map((image, index) => (
           <div key={index} className="project-image">
            <p style={projetColor}>{image.description}</p>
           <img src={image.picture} alt={image.description} />
           
         </div>
        ))}
      </div>
          <div className="next-projet" style={nextProjectColor}>
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
