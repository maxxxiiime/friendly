import React from 'react'
import { NavLink } from "react-router-dom";
import TextAnim from '../components/TextAnim/TextAnim'
import slide1 from '../assets/slide1.jpg'
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';

import './styles/home.scss'




export default function Home() {
  return (
    <div>
    <div className='grunge'></div>
        <Header  />
      
        <Banner image={slide1} text="Chez vous, partout et ailleurs" />
        <div className='friendly-designer'>
          <NavLink to={"/about"}><h1>MAXIME JOUFFREY.</h1></NavLink>
        <TextAnim />
        </div>
        <Footer />
    </div>
  );
}
