import React from 'react'
import { NavLink } from "react-router-dom";
import TextAnim from '../components/TextAnim/TextAnim'
import Profilimg from '../assets/moimeme.webp' 
import './styles/home.scss'

export default function Home() {
  return (
    <div className='container'>    
        <div className='friendly-designer'>
        <NavLink to={"/about"}><h1>MAXIME JOUFFREY</h1></NavLink>

        <TextAnim />
          <NavLink to={"/about"}>
            <div className='ovale-anim'>
            <img src={Profilimg} alt='profil' />
            </div>
            <div className='ovale-anim2'></div>
            <div className='ovale-anim3'></div>
          </NavLink>
          </div>

    </div>
  );
}
