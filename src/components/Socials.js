import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Socials({ icon, link }) {
  return (
    <div className={css(styles.mainContainer)}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className={css(styles.svgContainer)}>
          {icon}
        </div>
      </a>
    </div>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    overflow: 'hidden',
    display: 'inline-block', // Keeps icons in a row
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '0 15px',
  },
  svgContainer: {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
});

export default Socials;
