// declare all tile objects
    //----------- cornerTilesObj
    const cornerTilesObj = [
        {name: 'go',
        type: 'go',
        id: '0',
        },
        {name: 'jail',
        type: 'jail',
        id: '10',
        },
        {name: 'free Parking',
        type: 'freeParking',
        id: '20',
        },
        {name: 'Go to Jail',
        type: 'goJail',
        id: '30',
        }
    ]

    //----------- bottomTilesObj
    const bottomTilesObj = [
        {name: 'Mediterranean Avenue',
        type: 'property',
        color: 'brown',
        cost: '60',
        id: '1',
        },
        {name: 'Community Chest',
        type: 'chest',
        id: '2',
        },
        {name: 'Baltic Avenue',
        color: 'brown',
        cost: '200',
        id: '3',
        },
        {name: 'Income Tax',
        color: 'brown',
        cost: '200',
        id: '4',
        },
        {name: 'Reading Railroad',
        type: 'railroad',
        cost: '200',
        id: '5',
        },
        {name:'Oriental Avenue',
        type: 'property',
        color: 'lightBlue',
        cost: '100',
        id: '6',
        },
        {name: 'Chance',
        type:'chance',
        id: '7',
        },
        {name: 'Vermont Avenue',
        type: 'property',
        color: 'lightBlue',
        cost: '100',
        id: '8',
        },
        {name: 'Connecticut Avenue',
        type: 'property',
        color: 'lightBlue',
        cost: '120',
        id: '9',
        }
    ]

    //----------- leftTilesObj
    const leftTilesObj = [
        {name: 'St. Charles Place',
        type: 'property',
        color: 'pink',
        cost: '140',
        id: '11',
        },
        {name: 'Electric Company',
        type: 'Electric',
        cost: '150',
        id: '12',
        },
        {name: 'State Avenue',
        color: 'pink',
        cost: '140',
        id: '13',
        },
        {name: 'Virginia Avenue',
        color: 'pink',
        cost: '160',
        id: '14',
        },
        {name: 'Pennseylvania Railroad',
        type: 'railroad',
        cost: '200',
        id: '15',
        },
        {name:'St. James Place',
        type: 'property',
        color: 'orange',
        cost: '180',
        id: '16',
        },
        {name: 'Commmunity Chest',
        type:'chest',
        id: '17',
        },
        {name: 'Tennessee Avenue',
        type: 'property',
        color: 'orange',
        cost: '180',
        id: '18',
        },
        {name: 'New York Avenue',
        type: 'property',
        color: 'orange',
        cost: '200',
        id: '19',
        }
    ]

    //----------- topTilesObj
    const topTilesObj = [
        {name: 'Kentucky Avenue',
        type: 'property',
        color: 'red',
        cost: '220',
        id: '21',
        },
        {name: 'Chance',
        type: 'chance',
        id: '22',
        },
        {name: 'Indiana Avenue',
        color: 'red',
        cost: '220',
        id: '23',
        },
        {name: 'Illinois Avenue',
        color: 'red',
        cost: '240',
        id: '24',
        },
        {name: 'B & O Railroad',
        type: 'railroad',
        cost: '200',
        id: '25',
        },
        {name:'Atlantic Avenue',
        type: 'property',
        color: 'yellow',
        cost: '260',
        id: '26',
        },
        {name: 'Ventnor Avenue',
        type:'property',
        color: 'yellow',
        cost: '260',
        id: '27',
        },
        {name: 'Water Works',
        type: 'water',
        cost: '150',
        id: '28',
        },
        {name: 'Marvin Avenue',
        type: 'property',
        color: 'yellow',
        cost: '280',
        id: '29',
        }
    ]

    //----------- righTileObj
    const rightTilesObj = [
        {name: 'Pacific Avenue',
        type: 'property',
        color: 'green',
        cost: '300',
        id: '31',
        },
        {name: 'North Carolina Avenue',
        type: 'property',
        color: 'green',
        cost: '300',
        id: '32',
        },
        {name: 'Community Chest',
        type: 'chest',
        id: '33',
        },
        {name: 'Pennsylvania Avenue',
        color: 'green',
        cost: '320',
        id: '34',
        },
        {name: 'Short Line',
        type: 'railroad',
        cost: '200',
        id: '35',
        },
        {name:'Chance',
        type: 'chance',
        id: '36',
        },
        {name: 'Park Place',
        type:'property',
        color: 'blue',
        cost: '350',
        id: '37',
        },
        {name: 'Luxury Tax',
        type: 'tax',
        cost: '100',
        id: '38',
        },
        {name: 'Boardwalk',
        type: 'property',
        color: 'blue',
        cost: '400',
        id: '39',
        }
    ]

//--------------- function to create all the corner and small tiles
function createTiles(){

    //----------- declare board and tile specs
    const boardWidth = 735;
    const tileWidth = boardWidth / 13;
    const tileHeight = tileWidth * 2;
    const smallTilesSecWidth = boardWidth - tileHeight * 2;
        
    //----------- create main board div
    const mainBoardDiv = document.createElement('div');
    document.body.appendChild(mainBoardDiv);
    //----------- main board div info
    mainBoardDiv.style.cssText = 'position: relative; width: 735px; height: 735px; border: 1px solid black; margin: 0 auto';

    //----------- function to create all corner tiles
    function createCornerTiles(obj){

        //----------- declare the main variables
        const cornerObjEl = obj;

        //----------- create & position corner tiles
        for(let i = 0; i < cornerObjEl.length; i++){

            //------------ create each corner tile div
            const cornerTile = document.createElement('div');
            mainBoardDiv.appendChild(cornerTile);
            //------------ corner tile info
            cornerTile.innerHTML = cornerObjEl[i].id + ' ' + cornerObjEl[i].name;
            cornerTile.setAttribute('class', cornerObjEl[i].type);
            cornerTile.setAttribute('id', cornerObjEl[i].id);
            cornerTile.style.position = 'absolute';
            cornerTile.style.width = tileHeight + 'px';
            cornerTile.style.height = tileHeight + 'px';
            
            //------------ position each corner tiles
            if(cornerObjEl[i].type === 'go'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = (boardWidth - tileHeight) + 'px';
                cornerTile.style.left = (boardWidth - tileHeight) + 'px';
            }if(cornerObjEl[i].type === 'jail'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = (boardWidth - tileHeight) + 'px';
                cornerTile.style.left = '0px';
            }if(cornerObjEl[i].type === 'freeParking'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = '0px';
                cornerTile.style.left = '0px';
            }if(cornerObjEl[i].type === 'goJail'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = '0px';
                cornerTile.style.left = (boardWidth - tileHeight) + 'px';
            }
            
        }
    }

    //------------ run function to create all corner tiles
    createCornerTiles(cornerTilesObj);

    
    //------------ function to create all small tiles
    function createSmallTileSec(obj, sidePos){

        //---------- declare main variables
        const smallTileObjEl = obj.reverse();
        const sidePosEl = sidePos.toUpperCase();

        //---------- create container div
        const secContainerDiv = document.createElement('div');
        mainBoardDiv.appendChild(secContainerDiv);
        //---------- container div info
        secContainerDiv.style.width = smallTilesSecWidth + 'px';
        secContainerDiv.style.height = tileHeight + 'px';
        secContainerDiv.style.position = 'absolute';
        // secContainerDiv.style.backgroundColor = 'yellow';

        for (let i = 0; i < smallTileObjEl.length; i++){

            //------------ create individual small tile container div
            const smallTileDiv = document.createElement('div');
            secContainerDiv.appendChild(smallTileDiv);
            //------------ small tile container div info
            smallTileDiv.innerHTML = smallTileObjEl[i].id + ' ' + smallTileObjEl[i].name;
            smallTileDiv.style.cssText = 'position: absolute; border: 1px solid black';
            smallTileDiv.style.width = tileWidth + 'px';
            smallTileDiv.style.height = tileHeight + 'px';
            smallTileDiv.style.left = tileWidth * i + 'px';
        }

        if(sidePosEl === 'TOP'){
            secContainerDiv.style.top = '0px';
            secContainerDiv.style.left = tileHeight + 'px';
        }if(sidePosEl === 'LEFT'){
            secContainerDiv.style.transformOrigin = 'top left';
            secContainerDiv.style.transform = 'rotate(90deg)';
            secContainerDiv.style.top = tileHeight + 'px';
            secContainerDiv.style.left = tileHeight + 'px';
        }if(sidePosEl === 'RIGHT'){
            secContainerDiv.style.transformOrigin = 'top left';
            secContainerDiv.style.transform = 'rotate(270deg)';
            secContainerDiv.style.top = boardWidth - tileHeight + 'px';
            secContainerDiv.style.left = boardWidth - tileHeight + 'px';
        }if(sidePosEl === 'BOTTOM'){
            secContainerDiv.style.top = boardWidth - tileHeight + 'px';
            secContainerDiv.style.left = tileHeight + 'px';
        }
    }

    //--------- run function to create all smal tiles
    createSmallTileSec(topTilesObj, 'top');
    createSmallTileSec(bottomTilesObj, 'bottom');
    createSmallTileSec(leftTilesObj, 'left');
    createSmallTileSec(rightTilesObj, 'right');

}

//------------- exports
export {cornerTilesObj, createTiles}