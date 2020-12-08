import React from 'react';
import Card from '../Card';
import './index.scss';
import cardsData from '../../@constants';

const Carousel = () => {
  const cardItems = cardsData.map((item) => 
    <Card key={item.id} name={item.name} caption={item.caption} />, this
  );

  return (
    <main className="content-wrapper">
      <section className="card-container">
        <div className="arrow prev-arrow">❮</div>
        {cardItems}
        <div className="arrow next-arrow">❯</div>
      </section>
    </main>
  );
};

export default Carousel;