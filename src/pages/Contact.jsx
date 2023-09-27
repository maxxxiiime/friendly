import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom'
import './styles/contact.scss'


export default function Contact() {
  return (
    <div>
        <Header />

            <div className='contact'>
           
            <Link to={"/"} className='back-home'>
            Retourner sur la page d’accueil
            </Link>
        
            </div>
        <Footer />
</div>
  )
}
