import React from "react";
import Color from "../util/Color";
import { StyleSheet, css } from "aphrodite";
import wave from "../assets/wave.gif";

function Header() {
  return (
    <div className={css(styles.container)}>
      <img src={wave} alt="Wave GIF" className={css(styles.gif)} />
      <p className={css(styles.text)}>
        Hi! Welcome to my corner of the Internet!
      </p>
      <img src={wave} alt="Wave GIF" className={css(styles.gif)} />
    </div>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: Color.cyan,
    fontFamily: "RuneScape UF",
    fontSize: "55px",
    marginLeft: "20px",
  },
  gif: {
    maxWidth: "100px",
    maxHeight: "100px",
  },
});

export default Header;
