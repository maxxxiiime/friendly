import React from "react";

import Footer from "../components/footer/Footer";
import { SkillsData } from "../datas/SkillsData";
import Collapse from "../components/Collapse/Collapse";
import "./styles/about.scss";
import slide1 from "../assets/slide1.jpg"


export default function About() {

   //toutes les compétences en une seule variablee
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
      <div className="main-content">
    
      <h2>Designer graphique, 
      UX/UI <br></br>& Développeur web front-end.
</h2>

<div className="quote-about">
  <p>J'interviens sur la réalisation de projets de communication print et multimédia.</p>

  <div className="cv">
      <button>
        <a href={slide1} target="_blank" rel="noopener noreferrer">
      <span className="letters-cv">↓  C</span>urriculum <span className="letters-cv">V</span>itæ 
      </a>
        </button>
        </div>
</div>
   
        <div className="collapse_content_about">
        <Collapse
            title=" Compétences"
            content={<div className="skills-container">{allSkillsContent}
          <div className="text-skills-collapse"><h4>Communication visuelle interactive</h4></div>
             <ul><li><span className="colored">●</span> Conception d'univers graphique adaptés</li>
            <li><span className="colored">●</span> Ergonomie et design</li>
            <li><span className="colored">●</span> Graphisme web, édition et publicité</li>
            <li><span className="colored">●</span> Référencement SEO</li>
            <li><span className="colored">●</span> Méthode agile</li></ul>
          </div>}
          />
          <Collapse
            title=" Diplôme"
            content={
             <>
                ✔️ Je suis diplômé d'un BAC STI Électronique,<br></br>
                d'Infographie certifié RNCP Niveau 5, <br></br>d'un BTS Communication Visuelle option graphisme, édition et publicité. <br></br>
                J'ai aussi suivi une formation de Webdesigner Multimedia et une formation de Développeur web RNCP Niveau 5.
             </>
            }
          />

              
        </div>
      </div>
      <Footer />
    </div>
  );
}
