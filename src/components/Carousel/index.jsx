import React, { useState } from 'react';
import Card from '../Card';
import './index.scss';
import cardsData from '../../@constants';
// import useWindowDimensions from '../Helper';

const Carousel = () => {
  const [scale, setScale] = useState(0);
  const [width, setWidth] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [isDragging, setDragging] = useState(false);
  // const [touchEnd, setTouchEnd] = useState(0);

  const onChangeWidth = (newWidth) => {
    setWidth(newWidth);
  }


  const cardItems = cardsData.map((item) => 
    <Card key={item.id} name={item.name} caption={item.caption} passWidth={onChangeWidth} passScale={setScale}/>, this
  );

  const prevArrowHandle = () => {

    if(scale >= 0) {
      setScale(-(width + 33) * (cardItems.length - 3));
    } else {
      setScale(scale + width + 3 + 30);
    }
  }

  const nextArrowHandle = () => {
    if(scale <= -(width + 33) * (cardItems.length - 3)) {
      setScale(0);
    } else {
      setScale(scale - width - 3 - 30);
    }
    
  }

  const handleTouchStart = (e) => {
    e.preventDefault();
    setDragging(true);
    e.target.setPointerCapture(e.pointerId);

    setTouchStart(e.clientX);
    console.log('event', e);
  }

  const handleTouchMove = (e) => {
    if(!isDragging) {
      return;
    }

    // setTouchEnd(e.clientX);

    if(scale < -(width + 33) * (cardItems.length - 3) + width) {
      setScale(0);
    } else if (scale > 0) {
      setScale(-(width + 33) * (cardItems.length - 3));
    } else {
      setScale(scale - touchStart + e.clientX);
    }
    console.log('touchStart - e.clientX', touchStart - e.clientX);
    // setScale(scale + touchStart - touchEnd);

    // setScale(scale + touchEnd);
  }

  const handleTouchEnd = () => {
    setDragging(false);
    // if(scale < -(width + 33) * (cardItems.length - 3) + width) {
    //   setScale(0);
    // } else if (scale > 0) {
    //   setScale(-(width + 33) * (cardItems.length - 3));
    // } else {
    //   setScale(scale - touchStart + touchEnd);
    // }

    console.log('touchStart', touchStart);
    // console.log('touchEnd', touchEnd);
}

// useEffect(() => {
//   document.addEventListener('pointermove', handleTouchMove);

//   return () => {
//     document.removeEventListener('pointermove', handleTouchMove);
//   };
// }, []);

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
      <p>
        Width of card: {width}
      </p>
      <p>
        touchStart move: {touchStart}
      </p>
      {/* <p>
        touchEnd move: {touchEnd}
      </p> */}
    </main>
  );
};

export default Carousel;