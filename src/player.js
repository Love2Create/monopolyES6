const playerObj = [
    {name: 'dog',
    src: '../src/assets/dog.png',
    }
]

let newPlayerObj;

//----------- new game function -----------

//-----------
function playerControl(){

    const newGameBtn = document.createElement('div');
    document.body.appendChild(newGameBtn);
    newGameBtn.setAttribute('id', 'newGameBtn');
    newGameBtn.innerHTML = 'NEW GAME';
    newGameBtn.addEventListener('click', ()=>{
        
        const playerModal = document.createElement('div');
        document.body.appendChild(playerModal);
        playerModal.setAttribute('class', 'playerModal');
        playerModal.innerHTML = 'PICK YOUR PIECES';

        const playerPiecesContainer = document.createElement('div');
        playerModal.appendChild(playerPiecesContainer);



    });
}

export { playerControl }

