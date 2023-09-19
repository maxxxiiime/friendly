import React from 'react';
import './filter.scss';

export default function Filter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="filter">
      <p>Voici quelques exemples de mes réalisations</p> 
      <button
        className={selectedCategory === '' ? 'active' : ''}
        onClick={() => onSelectCategory('')}
      >
        Tout
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={selectedCategory === category ? 'active' : ''}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}