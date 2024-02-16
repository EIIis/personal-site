import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import Color from '../util/Color';

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };


  
  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };
  

  return (
    <div className={css(styles.container)}>
      <button className={css(styles.arrow, styles.leftArrow)} onClick={prevItem}>&lt;</button>
      <div className={css(styles.carouselItem)}>
        {/* Optional to add hyperlink to an image */}
        <a href={items[currentIndex].link} target="_blank" rel="noopener noreferrer">
          <img className={css(styles.img)} src={items[currentIndex].image} alt={`carousel-${currentIndex}`} />
        </a>
        <h3 className={css(styles.title)}>{items[currentIndex].title}</h3>
        <p className={css(styles.tools)}>{items[currentIndex].tools}</p>
        <p className={css(styles.caption)}>{items[currentIndex].caption}</p>
      </div>
      <button className={css(styles.arrow, styles.rightArrow)} onClick={nextItem}> &gt; </button>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: '600px',
    maxHeight: '700px',
    margin: 'auto',
    position: 'relative',
    background: Color.black
  },
  carouselItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    textAlign: 'center',
    position: 'relative',
    width: '400px',
    height: '500px',
    margin: 'auto',
  },
  
  img: {
    height: '280px',
    width: '336px',
    padding: '10px',
  },
  title: {
    color: Color.runescapeYellow,
    fontSize: '1.5em',
    margin: '0',
  },
  tools: {
    color: Color.runescapeYellow,
    marginTop: '5px',
  },
  caption: {
    color: Color.runescapeYellow,
    marginTop: '10px',
  },
  arrow: {
    fontSize: '20px',
    fontWeight: 'bold',
    backgroundColor: Color.black,
    color: Color.white,
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    width: '50px',
    transform: 'translateY(-50%)',
  },
  
  leftArrow: {
    left: '0',

  },
  
  rightArrow: {
    right: '0',

  },
  
  
});

export default Carousel;

