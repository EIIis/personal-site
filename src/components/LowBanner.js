import React from "react";
import Color from "../util/Color";
import { StyleSheet, css } from "aphrodite";

function LowBanner(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <p className={css(styles.headerText)}>{props.title}</p>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // Adjusted to align content from the right
    textAlign: "right", // Updated to make the container right-aligned
    padding: "10px", // Added some padding for better visualization
  },
  headerText: {
    color: Color.cyan,
    fontFamily: "RuneScape UF",
    fontSize: "20px",
    margin: 0,
  },
});

export default LowBanner;
