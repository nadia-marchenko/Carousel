import React from 'react';
import './index.scss';
import PropTypes from "prop-types";

// Import images
function importAll(r) {
  r.keys().forEach(r);
}
importAll(require.context('../../assets', true, /\.jpg$/));

const Card = (props) => {
  const { name, caption } = props;
  return (
    <div className="card">
      <img src={`/${name}.jpg`} alt={name}/>
      <h2>{name}</h2>
      <p>{caption}</p>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default Card;