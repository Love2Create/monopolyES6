function posPlayer(player, pos){
    
    //-------- 
    player.pos = pos;

    document.querySelector(`#tile_${pos} .playerContainer`).appendChild(document.querySelector(`#player_${player.playerIndex}`));

    

}

function createPlayerPieces(players){

    players.forEach(player => {

        const playerPiece = document.createElement('img');
        playerPiece.setAttribute('src', player.src);
        playerPiece.setAttribute('id', `player_${player.playerIndex}`);
        playerPiece.setAttribute('class', 'playerPiece');
       
        document.querySelector('#tile_0 .playerContainer').appendChild(playerPiece);

    });

}

export { posPlayer, createPlayerPieces }