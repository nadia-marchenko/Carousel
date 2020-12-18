import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const cardDimensions = document.querySelector('.card') || window;
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    cardDimensions.addEventListener('resize', handleResize);
    return () => cardDimensions.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
