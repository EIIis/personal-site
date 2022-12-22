import React from 'react';
import Color from '../util/Color';
import { StyleSheet, css } from 'aphrodite';

function Background() {
    return(
        <div class={css(styles.container)}>

        </div>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: Color.black,
    },
    
});

export default Background;