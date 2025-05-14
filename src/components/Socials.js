import React from "react";
import { StyleSheet, css } from "aphrodite";

function Socials({ icon, link }) {
  return (
    <div className={css(styles.mainContainer)}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={css(styles.svgContainer)}>
          {React.cloneElement(icon, { className: css(styles.svg) })}
        </div>
      </a>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "10px",
  },
  svgContainer: {
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
    overflow: "hidden",
  },
  svg: {
    width: "60%",
    height: "60%",
    objectFit: "contain",
  },
});

export default Socials;
