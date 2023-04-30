import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';
/*Hard coded the shit out of this LMAOOO*/
function Header() {
    return(
        <div class={css(styles.container)}>
            <p class={css(styles.text)}>Hi! Welcome to my corner of the Internet! 🌎</p>
        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        overflow: 'hidden',
        background: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: Color.runescapeYellow,
        fontFamily: 'RuneScape UF',
        fontSize: '55px',
    },


});

export default Header;