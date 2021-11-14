import './index.css'
import { baseURL, createDomElement } from './utilis.js';
import { createTiles } from './tiles.js';
import { dice } from './dice';

window.addEventListener('load', () => {

    //----------- create main board div
    const mainBoardDiv = document.createElement('div');
    //------------ append mainBoardDiv
    document.body.appendChild(mainBoardDiv);
    //----------- main board div info
    mainBoardDiv.style.cssText = 'position: relative; width: 735px; height: 735px; border: 1px solid black; margin: 0 auto';

    const tiles = createTiles(mainBoardDiv);
    console.log(tiles);

    dice(mainBoardDiv);

});