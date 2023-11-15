import React from 'react'
import Footer from '../components/footer/Footer';

import { Link } from 'react-router-dom'
import './styles/error.scss'
import Loader from '../components/loader/Loader';

export default function Error() {
  return (
    <div>
            <div className='error'>
              
            <h1>404</h1>
            <p>Oups! La page que vous demandez n'existe pas.</p>
            <Link to={"/"} className='back-home'>
            Retourner sur la page d’accueil
            </Link>
        <Loader />
            </div>
        <Footer />
</div>
  )
}
