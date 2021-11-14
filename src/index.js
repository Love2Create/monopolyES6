import './index.css'
import {baseURL, createDomElement} from './utilis.js';
import {cornerTilesObj, createTiles} from './tiles.js';

window.addEventListener('load', ()=>{
    
    const tiles = createTiles();
    console.log(tiles);

    // const bodyEl = document.querySelector('body');
    // const imgEl = createDomElement('img',{src:`${baseURL}logo.png`});
    // bodyEl.appendChild(imgEl);
});