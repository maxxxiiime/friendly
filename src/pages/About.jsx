import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";
import slide2 from "../assets/slide2.jpg";
import Collapse from "../components/Collapse/Collapse";
import "./styles/about.scss";


export default function About() {
  return (
    <div className="main">
      <Header />
      <div className="main-content">
        <Banner image={slide2} text="Des idées sur tout,
     et surtout des idées"  />

        <div className="collapse_content_about">
          <Collapse
            title=" Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont
                      régulièrement vérifiées par nos équipes."
          />
          <Collapse
            title=" Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
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
