import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';

function Header() {
    return(
        <div class={css(styles.container)}>
            <p class={css(styles.text)}>Ellis Alcantaraaaaaaaa</p>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        background: Color.navbar,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 103,
    },
    text: {
        color: Color.runescapeYellow,
        fontFamily: 'RuneScape UF'
    },


});

export default Header;