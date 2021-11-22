//import
import { baseURL, createDomElement } from './utilis.js';
import { each, forEach, uniq } from 'lodash';

//---------- array of player piece objects
const playerPiecesObj = [
    {
        pieceName: 'car',
        src: `${baseURL}car.png`,
        index: '1',
    },
    {
        pieceName: 'cat',
        src: `${baseURL}cat.png`,
        index: '2',
    },
    {
        pieceName: 'dog',
        src: `${baseURL}dog.png`,
        index: '3',
    },
    {
        pieceName: 'hat',
        src: `${baseURL}hat.png`,
        index: '4',
    },
    {
        pieceName: 'ship',
        src: `${baseURL}ship.png`,
        index: '5',
    },
    {
        pieceName: 'shoe',
        src: `${baseURL}shoe.png`,
        index: '6',
    },
    {
        pieceName: 'thimble',
        src: `${baseURL}thimble.png`,
        index: '7',
    },
    {
        pieceName: 'wheel barrow',
        src: `${baseURL}wheelBarrow.png`,
        index: '8',
    },
]

//----------- set number of player to 0
let playerNum = 0;
const fullPiecesName = [];


//-------- function that enables all radio buttons
function enableAll() {
    const itemEnableList = document.querySelectorAll('[selection-data]');

    for (let i = 0; i < itemEnableList.length; i++) {
        itemEnableList[i].parentNode.classList.add('enabled');
    }
}

//-------- function that disables all but the selected radio button
function disableSelected() {
    const piecesNotChecked = document.querySelectorAll(`.playerPieces:checked`);

    const piecesNotCheckedList = [...piecesNotChecked].map(item => item.getAttribute('selection-data'));

    piecesNotCheckedList.forEach((item) => {

        const itemList = document.querySelectorAll(`[selection-data="${item}"]:not(:checked)`);

        for (let i = 0; i < itemList.length; i++) {
            itemList[i].parentNode.classList.remove('enabled');
        }

    });
}


//----------------------- main player control function ------------------
function playerControl() {

    //----------- create new game button
    //----------- clicking this activates the player modal
    const newGameBtn = document.createElement('div');
    motherboard.appendChild(newGameBtn);
    newGameBtn.setAttribute('id', 'newGameBtn');
    newGameBtn.innerHTML = 'NEW GAME';

    newGameBtn.addEventListener('click', () => {
        playerModalContainer.style.visibility = 'visible';
    });

    //--------------------- player modal ----------------------

    //----------- create the main container for the player modal
    const playerModalContainer = document.createElement('div');
    document.body.appendChild(playerModalContainer);
    playerModalContainer.setAttribute('class', 'playerModalContainer');

    //----------- create div for all modal content
    const modalContentDiv = document.createElement('div');
    playerModalContainer.appendChild(modalContentDiv);
    modalContentDiv.setAttribute('id', 'modalContentDiv');

    //----------- create close button
    const closeBtn = document.createElement('div');
    modalContentDiv.appendChild(closeBtn);
    closeBtn.setAttribute('id', 'closeBtn');
    closeBtn.innerHTML = 'X';

    //----------- create a div that container each player's info
    const playerInfoContainer = document.createElement('div');
    modalContentDiv.appendChild(playerInfoContainer);
    playerInfoContainer.setAttribute('id', 'playerInfoContainer');

    //----------- create a div for both buttons (new player and start game) 
    const btnsContainer = document.createElement('div');
    modalContentDiv.appendChild(btnsContainer);
    btnsContainer.setAttribute('id', 'btnsContainer');

    //----------- create add player button
    const addPlayerBtn = document.createElement('div');
    btnsContainer.appendChild(addPlayerBtn);
    addPlayerBtn.setAttribute('id', 'addPlayerBtn');
    addPlayerBtn.innerHTML = 'ADD A PLAYER';

    //----------- create start game button
    const startGameBtn = document.createElement('div');
    btnsContainer.appendChild(startGameBtn);
    startGameBtn.setAttribute('id', 'startGameBtn');
    startGameBtn.innerHTML = 'START GAME';
    startGameBtn.style.display = 'none';



    //---------------- events when add player button is clicked
    addPlayerBtn.addEventListener('click', () => {

        //------------ conditional rendering for each player's info 
        //------------ 2+ players: start game button appears 
        //------------ 8 players: remove add player button
        if (playerNum < 8) {

            //-------- increase the number of players by one per click
            playerNum++;

            //-------- declare player ID variable
            const playerId = `player${playerNum}`;

            //-------- create a div that contain each player's input and piece
            const playerInfo = document.createElement('div');
            playerInfoContainer.appendChild(playerInfo);
            playerInfo.setAttribute('class', 'playerInfo');
            playerInfo.setAttribute('id', `${playerId}info`);

            const playerNumberText = document.createElement('div');
            playerInfo.appendChild(playerNumberText);
            playerNumberText.innerHTML = playerNum + ': ';



            //------------ create input field and choices for player pieces --------------

            const playerNameContainer = document.createElement('div');
            playerInfo.appendChild(playerNameContainer);
            playerNameContainer.setAttribute('class', 'playerNameContainer');

            //-------- create a label for the input field
            const playerLabel = document.createElement('label');
            playerNameContainer.appendChild(playerLabel);
            playerLabel.setAttribute('for', 'playerName');
            playerLabel.innerHTML = 'PLAYER NAME: ';

            //-------- create input field for player name 
            const playerName = document.createElement('input');
            playerNameContainer.appendChild(playerName);
            playerName.setAttribute('id', `player${playerNum}`);
            playerName.setAttribute('class', 'playerName');
            playerName.setAttribute('placeholder', 'enter player name');
            playerName.setAttribute('value', '');



            //------------  create choices for player pieces ------------ 

            //-------- create div containing list of player pieces to choose from
            const playerPiecesContainer = document.createElement('div');
            playerInfo.appendChild(playerPiecesContainer);
            //div info
            playerPiecesContainer.setAttribute('id', 'playerPiecesContainer');

            //-------- create the radio buttons along with image of the player pieces
            for (let i = 0; i < playerPiecesObj.length; i++) {

                //------- create label that contains the radio buttons and correlated images
                const radioLabel = document.createElement('label');
                playerPiecesContainer.appendChild(radioLabel);
                radioLabel.setAttribute('class', 'piecesLabel');

                //------- create radio buttons 
                const radioInput = document.createElement('input');
                radioLabel.appendChild(radioInput);
                radioInput.setAttribute('type', 'radio');
                radioInput.setAttribute('name', `playerPiecesObj${playerNum}`);
                radioInput.setAttribute('selection-data', playerPiecesObj[i].pieceName);
                radioInput.setAttribute('class', 'playerPieces');

                //-------- enable and disable pieces based on what's selected
                radioInput.addEventListener('change', (e) => {
                    enableAll();
                    disableSelected()
                });

                //-------- create player pieces images
                const radioImg = document.createElement('img');
                radioLabel.appendChild(radioImg);
                radioImg.src = playerPiecesObj[i].src;
                radioImg.setAttribute('class', 'playerPieceImage');

                //-------- enable and disable pieces based on what's selected
                enableAll();
                disableSelected();
            }

        }
        if (playerNum === 2) {
            startGameBtn.style.display = 'flex';
        }
        if (playerNum === 8) {
            addPlayerBtn.remove();
        }
    });

    //---------- events when start game button is clicked
    //---------- create playersObj with player names and chosen pieces

    const alertBox = document.createElement('div');
    modalContentDiv.insertBefore(alertBox, playerInfoContainer);
    alertBox.setAttribute('class', 'alertBox');

    startGameBtn.addEventListener('click', () => {

        const playerInfoEls = document.querySelectorAll('.playerInfo');

        const playerInfoArray = [...playerInfoEls];


        const checkPlayerName = uniq(playerInfoArray
            .map(item => item.querySelector('.playerName').value)
            .filter(item => item != '')
        );

        const didSelectPiece = playerInfoEls.length === document.querySelectorAll('.playerPieces:checked').length;
        const hasUniqPlayer = playerInfoEls.length === checkPlayerName.length;

        //--------- check if every player picked a piece
        if (didSelectPiece) {

            const playerInfoList = playerInfoArray.map((item, i) => {

                fullPiecesName.push(item.querySelector('.playerPieces:checked').getAttribute('selection-data'));

                return {
                    name: item.querySelector('.playerName').value,
                    playerIndex: i,
                    pieceName: item.querySelector('.playerPieces:checked').getAttribute('selection-data'),
                };

            });

        }

        if (playerInfoArray.length > checkPlayerName.length && !didSelectPiece) {
            alertBox.innerHTML = 'You have not entered all the player names & select all the player pieces';
        } if (playerInfoArray.length > checkPlayerName.length && didSelectPiece) {
            alertBox.innerHTML = 'You have not entered all the player names';
        } if (playerInfoArray.length === checkPlayerName.length && !didSelectPiece) {
            alertBox.innerHTML = 'You have not select all the player pieces';
        } if (playerInfoArray.length === checkPlayerName.length && didSelectPiece) {
            alertBox.innerHTML = '';
            playerModalContainer.style.visibility = 'hidden';

        }

    });

    // console.log(fullPiecesName);

}

export { playerPiecesObj, playerControl }

