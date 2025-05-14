import React from "react";
import Color from "../util/Color";
import { StyleSheet, css } from "aphrodite";

function Paragraph(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <p className={css(styles.subText)}>{props.text}</p>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
    background: "black",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "0 30px", // add padding to left and right
  },
  subText: {
    color: Color.runescapeYellow,
    fontFamily: "RuneScape UF",
    fontSize: "30px",
  },
});

export default Paragraph;
