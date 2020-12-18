import React, { useEffect, useRef  } from 'react';
import './index.scss';
import PropTypes from "prop-types";

// Import images
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../../assets', true, /\.jpg$/));

const Card = (props) => {
  const { name, caption } = props;
  const ref = useRef(null)

  useEffect(() => {
    props.passWidth(ref.current.clientWidth);
  });
  
  return (
     <div ref={ref} className='card' onPointerDown={() => false} onDragStart={() => false} role="button" tabIndex="0">
      <img src={`/${name}.jpg`} alt={name} onPointerDown={() => false} onDragStart={() => false} aria-hidden="true"/>
      <h2 onPointerDown={() => false} onDragStart={() => false} aria-hidden="true">{name}</h2>
      <p onPointerDown={() => false} onDragStart={() => false} aria-hidden="true">{caption}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  passWidth: PropTypes.func.isRequired,
};

export default Card;