import React from "react";
import Color from "../util/Color";
import { StyleSheet, css } from "aphrodite";

function DownloadLink(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <a
        className={css(styles.downloadLink)}
        href={props.fileUrl}
        download={props.fileName}
      >
        {props.text}
      </a>
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
    padding: "0 30px",
  },
  downloadLink: {
    color: Color.runescapeYellow,
    fontFamily: "RuneScape UF",
    fontSize: "30px",
    textDecoration: "underline",
    cursor: "pointer",
  },
});

export default DownloadLink;
