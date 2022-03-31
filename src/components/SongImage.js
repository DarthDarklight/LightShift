import React from 'react';
import pd from '../media/polisheddirt.png'
import ed from '../media/cover.png'
const IMG = props =>{
    const {song} = props;
    return require(pd);
}
export default IMG;