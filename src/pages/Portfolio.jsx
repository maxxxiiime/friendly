import React, { useState } from 'react';
import slide1 from '../assets/slide1.jpg';
import Header from '../components/header/Header';
import Banner from '../components/banner/Banner';
import Footer from '../components/footer/Footer';
import CardsDatas from '../datas/projets.json';
import Card from '../components/cards/Cards';
import Filter from '../components/filter/Filter'; 


import './styles/home.scss';
import Txtportfolio from '../components/txtportfolio/Txtportfolio';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const categories = ['Web', 'Branding', 'Video'];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <div className='grunge'></div>
      <Header />
      <Banner image={slide1} text="Portfolio" />
   
   <Txtportfolio />
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
            thecover={card.thecover}
            title={card.title}
            pictures={card.pictures}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}