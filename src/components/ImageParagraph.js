/*
import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';

function ImageParagraph(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <img src={props.myImage} className={css(styles.image)} alt={props.altText} />
      <p className={css(styles.text)}>{props.text}</p>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    background: 'black',
  },
  image: {
    width: '20%',
    marginRight: '30px',
  },
  text: {
    color: Color.runescapeYellow,
    fontFamily: 'RuneScape UF',
    fontSize: '30px',
    textAlign: 'left',
  },
});

export default ImageParagraph;
*/
import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';

function ImageParagraph(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <img src={props.myImage} className={css(styles.image)} alt={props.altText} />
      <div className={css(styles.textContainer)}>
        {props.texts.map((text, index) => (
          <p key={index} className={css(styles.text)}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '30px',
    background: 'black',
  },
  image: {
    width: '50%',
    maxWidth: '200px',
    minWidth:'200px',
    marginRight: '30px',
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    color: Color.runescapeYellow,
    fontFamily: 'RuneScape UF',
    fontSize: '30px',
    textAlign: 'left',
    margin: '0',
  },
});

export default ImageParagraph;
