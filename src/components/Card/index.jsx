import React from 'react';
import './index.scss';
import PropTypes from "prop-types";

// Import images
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../../assets', true, /\.jpg$/));

const Card = (props) => {
  const { name, caption, scale, isEnable } = props;
  return (
     <div className={isEnable ? 'card' : 'card'} style={{ transform: `translate(${scale}px)`, transitionDuration: '.4s' }} >
    {/* //<div className={isEnable ? 'move card' : 'card'} style={{ transform: `translate(${scale}%)`, transitionDuration: '.4s' }} > */}
    {/* // <div className='card' style= {{ isEnable ? width: '0px', transitionDuration: '4s' }} : '' }> */}
      <img src={`/${name}.jpg`} alt={name}/>
      <h2>{name}</h2>
      <p>{caption}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired,
  isEnable: PropTypes.bool.isRequired,
};

export default Card;