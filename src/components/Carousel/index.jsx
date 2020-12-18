import React, { useState } from 'react';
import Card from '../Card';
import './index.scss';
import cardsData from '../../@constants';

const Carousel = () => {
  const [scale, setScale] = useState(0);
  const [width, setWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setDragging] = useState(false);
  const [deltaDiff, setDeltaDIff] = useState(0);
  const CARD_SIZE = width + 33;
  const CARDS_ON_SCREEN = 3;

  const onChangeWidth = (newWidth) => {
    setWidth(newWidth);
  }


  const cardItems = cardsData.map((item) => 
    <Card key={item.id} name={item.name} caption={item.caption} passWidth={onChangeWidth} passScale={setScale}/>, this
  );

  const CARDS_NUM = cardItems.length;

  const prevArrowHandle = () => {

    if(scale >= 0) {
      setScale(-CARD_SIZE * (CARDS_NUM - CARDS_ON_SCREEN));
    } else {
      setScale(scale + CARD_SIZE);
    }
  }

  const nextArrowHandle = () => {
    if(scale <= -CARD_SIZE * (CARDS_NUM - CARDS_ON_SCREEN)) {
      setScale(0);
    } else {
      setScale(scale - CARD_SIZE);
    }
    
  }

  const handleTouchStart = (e) => {
    e.preventDefault();
    setDragging(true);
    e.target.setPointerCapture(e.pointerId);

    setTouchStart(e.clientX);
  }

  const handleTouchMove = (e) => {
    if(!isDragging) {
      return;
    }

    if(scale < -CARD_SIZE * (CARDS_NUM - CARDS_ON_SCREEN) + width) {
      setScale(0);
    } else if (scale > 0) {
      setScale(-CARD_SIZE * (CARDS_NUM - CARDS_ON_SCREEN));
    } else {
      setScale(scale - touchStart + e.clientX);
      setDeltaDIff(touchStart - e.clientX);
    }
  }

  const handleTouchEnd = () => {
    if(deltaDiff < width) {
      setScale(scale + CARD_SIZE);
    } else {
      setScale(scale - CARD_SIZE);
    }
    setDragging(false);
}

  return (
    <main className="content-wrapper">
      <section className="card-container" >
        <div 
          className="swiper-wrapper" 
          style={{ transform: `translate(${scale}px`, transitionDuration: '.3s' }}
          onPointerDown ={(e) => handleTouchStart(e)}
          onPointerMove ={(e) => handleTouchMove(e)}
          onPointerUp={(e) => handleTouchEnd(e)}
          role="button"
          tabIndex="0"
          onDragStart={() => false}
        >
          {cardItems}
        </div>
        <div className="arrow prev-arrow" onClick={prevArrowHandle} aria-hidden="true" onPointerDown={() => false}>❮</div>
        <div className="arrow next-arrow" onClick={nextArrowHandle} aria-hidden="true" onPointerDown={() => false}>❯</div>
      </section>
    </main>
  );
};

export default Carousel;