import React, { useState } from 'react';
import Card from '../Card';
import './index.scss';
import cardsData from '../../@constants';

const Carousel = () => {
  const [scale, setScale] = useState(0);
  const [clickNums, setClickNums] = useState(3);
  const [isEnable, setEnable] = useState(false);

  // const cardItems = cardsData.map((item) => 
  //   <Card key={item.id} name={item.name} caption={item.caption} />, this
  // );

  const cardItems = [];

   for(let i = clickNums - 3; i < clickNums + 2; i += 1) {
     const index = Math.abs(i) % 10
     if (i === clickNums - 3) {
      console.log(index)
      cardItems.push(<Card 
        key={cardsData[index].id} 
        name={cardsData[index].name} 
        caption={cardsData[index].caption}
        isEnable={isEnable}
         scale={-420.16 * (i - clickNums + 3) }
        />);
     } else {
      console.log(index)
      cardItems.push(<Card 
        key={cardsData[index].id} 
        name={cardsData[index].name} 
        caption={cardsData[index].caption}
        isEnable={isEnable}
        scale={6 * (clickNums - 3 - i)}
        />);
     }
     
   }
  //  cardsData.map((item) => 
  //   <Card key={item.id} name={item.name} caption={item.caption} />, this
  // );

  const prevArrowHandle = () => {
    setEnable(true);

    setClickNums(clickNums + 1);
    if(scale >= 0) {
      setScale(-236.88);
    } else {
      setScale(scale + 33.84);
    }
  }

  const nextArrowHandle = () => {
    setEnable(true);
    setClickNums(clickNums + 1);
    // if(clickNums % 3 === 0) {
    //   setScale(0);
    // } else {
    //   setScale(scale-33.84);
    // }
    // if(scale <= -236.88) {
    //   setScale(0);
    // } else {
    //  setScale(scale - 33.84);
    // }
  }

  return (
    <main className="content-wrapper">
      <section className="card-container">
        <div className="swiper-wrapper" >
          {cardItems}
        </div>
        <div className="arrow prev-arrow" onClick={prevArrowHandle} aria-hidden="true">❮</div>
        <div className="arrow next-arrow" onClick={nextArrowHandle} aria-hidden="true">❯</div>
      </section>
    </main>
  );
};

export default Carousel;