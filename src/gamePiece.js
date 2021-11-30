import { TweenLite } from 'gsap';

function posPlayer(player, pos) {

    console.log(player, pos);

    //-------- 
    player.pos = pos;

    document.querySelector(`#tile_${pos} .playerContainer`).appendChild(document.querySelector(`#player_${player.playerIndex}`));

}

function moveGamePieceAnimation(player, pos) {

    if (player.pos > pos) {

        const pos1 = 39;
        const pos2 = pos;

        const proxy = { n: player.pos };
        TweenLite.to(proxy, 2, {
            n: pos1,
            onUpdate: () => {
                posPlayer(player, Math.round(proxy.n));
            },
            onComplete:() => {
                posPlayer(player, 0);
                proxy.n = 0;
                TweenLite.to(proxy, 2, {
                    n: pos2,
                    onUpdate: () => {
                        posPlayer(player, Math.round(proxy.n));
                    },
                })
            } 
        });

    } else {
        const proxy = { n: player.pos };
        TweenLite.to(proxy, 2, {
            n: pos,
            onUpdate: () => {
                posPlayer(player, Math.round(proxy.n));
            }
        });

    }


}

function createPlayerPieces(players) {

    players.forEach(player => {

        const playerPiece = document.createElement('img');
        playerPiece.setAttribute('src', player.src);
        playerPiece.setAttribute('id', `player_${player.playerIndex}`);
        playerPiece.setAttribute('class', 'playerPiece');

        document.querySelector('#tile_0 .playerContainer').appendChild(playerPiece);

    });

}

export { posPlayer, moveGamePieceAnimation, createPlayerPieces }