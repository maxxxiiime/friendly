import React, { useState } from 'react';
import slide1 from '../assets/slide1.jpg';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import CardsDatas from '../datas/logements.json';
import Card from '../components/cards/Cards';
import Filter from '../components/filter/Filter'; // Assurez-vous d'importer le composant de filtre

import './styles/home.scss';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Webdesign', 'Branding', 'Video'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className='grunge'></div>
      <Header />
      <Banner image={slide1} text="Chez vous, partout et ailleurs" />
      
        <Filter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={handleCategoryChange}
        />
        <div className='cards_container'>
        {CardsDatas.filter((card) =>
          selectedCategory ? card.filter.includes(selectedCategory) : true
        ).map((card) => (
          <Card
            key={card.id}
            id={card.id}
            cover={card.cover}
            title={card.title}
            pictures={card.pictures}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}