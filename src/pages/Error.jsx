import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Link } from 'react-router-dom'
import './styles/error.scss'


export default function Error() {
  return (
    <div>
        <Header />

            <div className='error'>
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"} className='back-home'>
            Retourner sur la page d’accueil
            </Link>
        
            </div>
        <Footer />
</div>
  )
}
