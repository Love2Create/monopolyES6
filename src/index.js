import './index.css'
import {baseURL, createDomElement} from './utilis.js';
import {cornerTilesObj, createTiles} from './tiles.js';

window.addEventListener('load', ()=>{
    
    createTiles()

    // const bodyEl = document.querySelector('body');
    // const imgEl = createDomElement('img',{src:`${baseURL}logo.png`});
    // bodyEl.appendChild(imgEl);
});