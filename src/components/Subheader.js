import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';

function Subheader(props) {
  return (
    <div className={css(styles.mainContainer)}>
      <p className={css(styles.headerText)}>{props.title}</p>
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

  },
  headerText: {
    color: Color.white,
    fontFamily: 'RuneScape UF',
    fontSize: '50px',
  },
});

export default Subheader;