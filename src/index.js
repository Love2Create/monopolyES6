//import
import './index.css'
import { baseURL, createDomElement } from './utilis.js';
import { each, forEach, uniq, shuffle } from 'lodash';
import { createTiles } from './tiles.js';
import { dice } from './dice';
import { playerPiecesObj, playerControl } from './player.js';
import { posPlayer, moveGamePieceAnimation, createPlayerPieces } from './gamePiece.js';

window.addEventListener('load', () => {

    //------------ DO NOT DELETE (example on how to get the image)
    // const imgDiv = document.createElement('img');
    // document.body.appendChild(imgDiv);
    // imgDiv.src = `${baseURL}dog.png`;

    const motherboard = document.createElement('div');
    document.body.appendChild(motherboard);
    motherboard.setAttribute('id', 'motherboard');

    //------------ create main board div
    const mainBoardDiv = document.createElement('div');
    //------------ append mainBoardDiv
    motherboard.appendChild(mainBoardDiv);
    //------------ main board div info
    mainBoardDiv.setAttribute('id', 'mainGameBoard');

    const sideBar = document.createElement('div');
    motherboard.appendChild(sideBar);
    sideBar.setAttribute('id', 'sideBar');

    const newGameBtn = document.createElement('div');
    sideBar.appendChild(newGameBtn);
    newGameBtn.setAttribute('id', 'newGameBtn');
    newGameBtn.innerHTML = 'NEW GAME';

    let playerList = [];

    let currentPlayerIndex = 0;

    // const sideBar_PlayerInfoContainer = document.createElement('div');
    // sideBar.appendChild(sideBar_PlayerInfoContainer);
    // sideBar_PlayerInfoContainer.setAttribute('id', 'sideBar_PlayerInfoContainer')

    newGameBtn.addEventListener('click', () => {
        const playerModalContainerEl = document.querySelector('.playerModalContainer');
        playerModalContainerEl.style.visibility = 'visible';
    });


    //------------ store return value from createTiles()
    const tiles = createTiles(mainBoardDiv);


    //------------ initiate dice()
    dice(diceTotal => {
        const newPos = (playerList[currentPlayerIndex].pos + diceTotal)%40;
        moveGamePieceAnimation(playerList[currentPlayerIndex], newPos);
    });

    //------------ initiate playerControl()]
    playerControl(players => {

        playerList = players;
        createPlayerPieces(playerList);

    });



    //---------------------Solutions to randomizing arrays -----------------

    // const testBtn = document.createElement('div');
    // sideBar.append(testBtn);
    // testBtn.setAttribute('class', 'testBtn');

    // testBtn.addEventListener('click', () => {


    // const numArray = [3, 4, 7, 11, 21, 23];
    // const randomOrderArray = [];
    // const min = 1;
    // const max = numArray.length - 1;



    // //---------------------- Solution #3 (lodash Shuffle) ----------------------------

    // console.log(shuffle([3, 4, 7, 11, 21, 23]));




    //---------------------- Solution #2 (resursive function without for loop) ----------------------------

    // function randomizeRecursive(sourceArray, _newArray){
    //     let newArray = _newArray ? _newArray :[];

    //     const currentNum = Math.floor(Math.random()*(sourceArray.length-1));

    //     newArray.push(sourceArray[currentNum]);

    //     sourceArray.splice(currentNum, 1);

    //     if (sourceArray.length){
    //         randomizeRecursive(sourceArray, newArray);
    //     }

    //     return newArray;

    // }

    // console.log(randomizeRecursive([3, 4, 7, 11, 21, 23]));



    //---------------------- Solution #1 (vanialla JS) ----------------------------
    //---------------------- create an empty array to hold the numbers that will be removed from the original array
    //---------------------- Run array in reverse
    //---------------------- randomly choose one of the numbers from the original array
    //---------------------- add the number in a new array, 
    //---------------------- then remove that number from the original array;

    // const numArray = [3, 4, 7, 11, 21, 23];
    // const randomOrderArray = [];
    // const min = 1;
    // const max = numArray.length-1;
    // const newNums = [];

    // for (let i = numArray.length-1; i>=0; i--){

    //     const currentNum = Math.floor(Math.random()*(numArray.length-1));

    //     console.log(currentNum);

    //     newNums.push(numArray[currentNum]);

    //     numArray.splice(currentNum, 1);

    // }

    // console.log(newNums);



    //---------------------- my inefficient way (save for record) ---------------------
    // for (let i = min; i < max; i++) {

    //     const randomNum = (min, max) => {
    //         const min2 = Math.ceil(min);
    //         const max2 = Math.floor(max);
    //         const max3 = max2 - 1;
    //         return Math.floor(Math.random() * (max3 - min2 + 1)) + min2;
    //     };

    //     const realRandomNum = randomNum(min, max);

    //     randomOrderArray.push(realRandomNum);

    //     uniq_array = _.uniq(randomOrderArray);

    //     if(uniq_array.length < randomOrderArray.length){
    //         i = uniq_array.length;
    //     }else{
    //         i = i-1;
    //     }

    // };

    // console.log('removed: ' + uniq_array);


    // });

});