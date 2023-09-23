import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { SkillsData } from "../datas/SkillsData";
import Collapse from "../components/Collapse/Collapse";
import "./styles/about.scss";
import slide1 from "../assets/slide1.jpg"


export default function About() {

   //toutes les compétences en une seule chaîne de texte
   const allSkillsContent = SkillsData[0].skills.map((skill) => (
    <div className="one-skill" key={skill.id}>
      <p>{skill.description}</p>
      <a href={skill.link} target="_blank" rel="noopener noreferrer">
        <img src={skill.image[0]} alt={skill.titre} />
      </a>
    </div>
  ));
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <div className="cv">
      <button>
        <a href={slide1} target="_blank" rel="noopener noreferrer">
      <span className="letters-cv">↓  C</span>urriculum <span className="letters-cv">V</span>itæ 
      </a>
        </button>
        </div>
      <h2>Compétences</h2>
        <div className="skills-container">
          
      {SkillsData[0].skills.map((skill) => (
        <div className="one-skill" key={skill.id}>
         
          <p>{skill.description}</p>
          <a href={skill.link} target="_blank" rel="noopener noreferrer">
          <img src={skill.image[0]} alt={skill.titre} />
          </a>
        </div>
      ))}
    </div>    
        <div className="collapse_content_about">
        <Collapse
            title=" Compétences"
            content={<div className="skills-container">{allSkillsContent}</div>}
          />
          <Collapse
            title=" Respect"
            content="✉️ La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                      perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            title=" Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
                      perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <Collapse
            title=" Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
                      correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
                      locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
