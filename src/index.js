//import
import './index.css'
import { baseURL, createDomElement } from './utilis.js';
import { createTiles } from './tiles.js';
import { dice } from './dice';
import { playerControl } from './player.js';

window.addEventListener('load', () => {

    //------------ create main board div
    const mainBoardDiv = document.createElement('div');
    //------------ append mainBoardDiv
    document.body.appendChild(mainBoardDiv);
    //------------ main board div info
    mainBoardDiv.setAttribute('id', 'mainGameBoard');


    //------------ store return value from createTiles()
    const tiles = createTiles(mainBoardDiv);


    //------------ initiate dice()
    dice(mainBoardDiv);

    //------------ initiate playerControl()]
    playerControl();

});