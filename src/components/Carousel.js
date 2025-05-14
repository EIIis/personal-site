import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";
import Color from "../util/Color";

function Carousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  // Calculate indices for previous and next items
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  return (
    <div className={css(styles.container)}>
      <button
        className={css(styles.arrow, styles.leftArrow)}
        onClick={prevItem}
      >
        &lt;
      </button>
      <div className={css(styles.carouselItem)}>
        {/* Faded Previous Image */}
        <img
          className={css(styles.fadedImg, styles.prevImg)}
          src={items[prevIndex].image}
          alt={`carousel-prev`}
          onClick={prevItem}
        />
        {/* Main Image */}
        <a
          href={items[currentIndex].link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className={css(styles.img)}
            src={items[currentIndex].image}
            alt={`carousel-${currentIndex}`}
          />
        </a>
        <h3 className={css(styles.title)}>{items[currentIndex].title}</h3>
        <p className={css(styles.tools)}>{items[currentIndex].tools}</p>
        <p className={css(styles.caption)}>{items[currentIndex].caption}</p>
        {/* Faded Next Image */}
        <img
          className={css(styles.fadedImg, styles.nextImg)}
          src={items[nextIndex].image}
          alt={`carousel-next`}
          onClick={nextItem}
        />
      </div>
      <button
        className={css(styles.arrow, styles.rightArrow)}
        onClick={nextItem}
      >
        {" "}
        &gt;{" "}
      </button>
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    position: "relative",
    background: Color.black,
  },
  carouselItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    position: "relative",
    width: "400px",
    height: "500px",
    margin: "auto",
  },
  img: {
    height: "280px",
    width: "336px",
    padding: "10px",
    objectFit: "contain",
    objectPosition: "center",
  },
  fadedImg: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    opacity: 0.5,
    cursor: "pointer",
    width: "200px",
    height: "150px",
    transition: "opacity 0.3s",
    zIndex: 1,
    ":hover": {
      opacity: 0.8,
    },
  },
  prevImg: {
    left: "-220px",
  },
  nextImg: {
    right: "-220px",
  },
  title: {
    color: Color.runescapeYellow,
    fontFamily: "RuneScape UF",
    fontSize: "1.5em",
    margin: "0",
  },
  tools: {
    color: Color.runescapeYellow,
    fontFamily: "RuneScape UF",
    marginTop: "5px",
  },
  caption: {
    color: Color.runescapeYellow,
    fontFamily: "RuneScape UF",
    fontSize: "1.3em",
    marginTop: "1px",
  },
  arrow: {
    fontSize: "20px",
    fontWeight: "bold",
    backgroundColor: Color.black,
    color: Color.runescapeYellow,
    border: "none",
    padding: "10px",
    cursor: "pointer",
    position: "absolute",
    top: "50%",
    width: "50px",
    transform: "translateY(-50%)",
  },
  leftArrow: {
    left: "0",
  },
  rightArrow: {
    right: "0",
  },
});

export default Carousel;
