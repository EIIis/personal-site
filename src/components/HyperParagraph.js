import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';

function HyperParagraph(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <p
        className={css(styles.subText)}
        dangerouslySetInnerHTML={{ __html: props.text }}
      />
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
    background: 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 30px',
  },
  subText: {
    color: Color.runescapeYellow,
    fontFamily: 'RuneScape UF',
    fontSize: '30px',
    a: {
      color: Color.runescapeYellow,
      textDecoration: 'underline',
    },
  },
});

export default HyperParagraph;

