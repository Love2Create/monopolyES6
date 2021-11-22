//import
import './index.css'
import { baseURL, createDomElement } from './utilis.js';
import { createTiles } from './tiles.js';
import { dice } from './dice';
import { playerPiecesObj, playerControl } from './player.js';

window.addEventListener('load', () => {



    //------------ DO NOT DELETE (example on how to get the image)
    // const imgDiv = document.createElement('img');
    // document.body.appendChild(imgDiv);
    // imgDiv.src = `${baseURL}dog.png`;

    const motherboard = document.createElement('div');
    document.body.appendChild(motherboard);
    motherboard.setAttribute('id','motherboard');

    //------------ create main board div
    const mainBoardDiv = document.createElement('div');
    //------------ append mainBoardDiv
    motherboard.appendChild(mainBoardDiv);
    //------------ main board div info
    mainBoardDiv.setAttribute('id', 'mainGameBoard');


    //------------ store return value from createTiles()
    const tiles = createTiles(mainBoardDiv);


    //------------ initiate dice()
    dice(mainBoardDiv);

    //------------ initiate playerControl()]
    playerControl();

});