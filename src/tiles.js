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

    function createCornerTiles(){
        //----------- create & position corner tiles
        for(let i = 0; i < cornerTilesObj.length; i++){

            //------------ create each corner tile div
            const cornerTile = document.createElement('div');
            mainBoardDiv.appendChild(cornerTile);
            //------------ corner tile info
            cornerTile.innerHTML = cornerTilesObj[i].id + ' ' + cornerTilesObj[i].name;
            cornerTile.setAttribute('class', cornerTilesObj[i].type);
            cornerTile.setAttribute('id', cornerTilesObj[i].id);
            cornerTile.style.position = 'absolute';
            cornerTile.style.width = tileHeight + 'px';
            cornerTile.style.height = tileHeight + 'px';
            
            //------------ position each corner tiles
            if(cornerTilesObj[i].type === 'go'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = (boardWidth - tileHeight) + 'px';
                cornerTile.style.left = (boardWidth - tileHeight) + 'px';
            }
            if(cornerTilesObj[i].type === 'jail'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = (boardWidth - tileHeight) + 'px';
                cornerTile.style.left = '0px';
            }
            if(cornerTilesObj[i].type === 'freeParking'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = '0px';
                cornerTile.style.left = '0px';
            }
            if(cornerTilesObj[i].type === 'goJail'){
                cornerTile.style.backgroundColor = 'orange';
                cornerTile.style.top = '0px';
                cornerTile.style.left = (boardWidth - tileHeight) + 'px';
            }
        }
    }
    createCornerTiles();
    
    function createBottomTiles(){
        //------- create container div for all small bottom tiles
        const bottomTilesContainerDiv = document.createElement('div');
        mainBoardDiv.appendChild(bottomTilesContainerDiv);

        //------- bottomTilesContainer div info
        bottomTilesContainerDiv.setAttribute('class', 'bottomTilesContainersSec');
        bottomTilesContainerDiv.style.cssText = 'position: absolute;';
        bottomTilesContainerDiv.style.width = smallTilesSecWidth + 'px';
        bottomTilesContainerDiv.style.height = tileHeight + 'px';
        bottomTilesContainerDiv.style.top = (boardWidth - tileHeight) + 'px';
        bottomTilesContainerDiv.style.left = tileHeight + 'px';
        bottomTilesContainerDiv.style.width = (boardWidth - tileHeight * 2) +'px';
        bottomTilesContainerDiv.style.height = tileWidth * 2 +'px';

        //------- reverse bottomTilesObj array order
        bottomTilesObj.reverse();

        //------- create each bottom smallBottom tiles
        for (let i = 0; i < bottomTilesObj.length; i++){

            //---------- create smallBottom tile div
            const smallBottomTile = document.createElement('div');
            bottomTilesContainerDiv.appendChild(smallBottomTile);

            //---------- smallBottom tile div info
            smallBottomTile.setAttribute('class', 'smallBottomTile'+i);
            smallBottomTile.style.cssText = 'position: absolute; top: 0px; background-color: white; border: 1px solid black';
            smallBottomTile.style.width = tileWidth + 'px';
            smallBottomTile.style.height = tileHeight + 'px';
            smallBottomTile.style.top = '0px';
            smallBottomTile.style.left = tileWidth * i + 'px';
            smallBottomTile.innerHTML = bottomTilesObj[i].id + ' ' + bottomTilesObj[i].name;
        }
    }
    createBottomTiles();    

    function createLeftTiles(){
        //--------- create container div for all small left side tiles
        const leftTilesContainerDiv = document.createElement('div');
        mainBoardDiv.appendChild(leftTilesContainerDiv);

        //---------- container div info
        leftTilesContainerDiv.style.cssText = 'position: absolute; background-color: yellow; transform: rotate(90deg); transform-origin: top left';
        leftTilesContainerDiv.style.width = smallTilesSecWidth + 'px';
        leftTilesContainerDiv.style.height = tileHeight + 'px';
        leftTilesContainerDiv.style.top = (boardWidth - tileHeight * 5.5) + 'px';
        leftTilesContainerDiv.style.left = tileHeight + 'px';
        leftTilesContainerDiv.style.width = (boardWidth - tileHeight * 2) +'px';
        leftTilesContainerDiv.style.height = tileWidth * 2 +'px';

        //---------- reverse leftTilesObj array
        leftTilesObj.reverse();

        for (let i = 0; i<leftTilesObj.length; i++){

            //--------- create div for each small left tiles
            const smallLeftTile = document.createElement('div');
            leftTilesContainerDiv.appendChild(smallLeftTile);

            //--------- small left tile div info
            smallLeftTile.style.cssText = 'position: absolute; border: 1px solid black; background-color: white';
            smallLeftTile.style.width = tileWidth + 'px';
            smallLeftTile.style.height = tileHeight + 'px';
            smallLeftTile.style.left = tileWidth * i + 'px';
            smallLeftTile.innerHTML = leftTilesObj[i].id + ' ' + leftTilesObj[i].name;
        }
    }
    createLeftTiles();
    
    function createTopTiles(){
        
        //---------- create container div for top small tiles
        const topTilesContainerDiv = document.createElement('div');
        mainBoardDiv.appendChild(topTilesContainerDiv);

        //---------- top small tiles container div info
        topTilesContainerDiv.style.cssText = 'position: absolute; transform-origin: center; transform: rotate(180deg)';
        topTilesContainerDiv.style.width = smallTilesSecWidth + 'px';
        topTilesContainerDiv.style.height = tileHeight + 'px';
        topTilesContainerDiv.style.left = tileHeight + 'px';

        //---------- reverse topTilesObj
        topTilesObj.reverse();

        //---------- create top small tiles
        for (let i = 0; i < topTilesObj.length; i++){

            //----------- create small top tile divs
            const smallTopTile = document.createElement('div');
            topTilesContainerDiv.appendChild(smallTopTile);

            //----------- small top tile div info
            smallTopTile.innerHTML = topTilesObj[i].id + ' ' + topTilesObj[i].name;
            smallTopTile.style.cssText = 'position: absolute; border: 1px solid black';
            smallTopTile.style.width = tileWidth + 'px';
            smallTopTile.style.height = tileHeight + 'px';
            smallTopTile.style.top = '0px';
            smallTopTile.style.left = tileWidth * i + 'px';


        }
    }
    createTopTiles();

    function createRightTiles(){

        //--------- create container div for right small tiles
        const rightTilesContainerDiv = document.createElement('div');
        mainBoardDiv.appendChild(rightTilesContainerDiv);

        //--------- right container div info
        rightTilesContainerDiv.style.cssText = 'position: absolute; transform-origin: top left; transform: rotate(270deg)';
        rightTilesContainerDiv.style.width = smallTilesSecWidth + 'px';
        rightTilesContainerDiv.style.height = tileHeight + 'px';
        rightTilesContainerDiv.style.top = boardWidth - tileHeight + 'px';
        rightTilesContainerDiv.style.left = boardWidth - tileHeight + 'px';

        //--------- reverse rightTilesObj
        rightTilesObj.reverse();

        //--------- create right small tiles
        for (let i = 0; i < rightTilesObj.length; i++){

            //--------- create small right tile divs
            const smallRightTile = document.createElement('div');
            rightTilesContainerDiv.appendChild(smallRightTile);

            //--------- small right tile div info
            smallRightTile.innerHTML = rightTilesObj[i].id + ' ' + rightTilesObj[i].name;
            smallRightTile.style.cssText = 'position: absolute; border: 1px solid black';
            smallRightTile.style.width = tileWidth + 'px';
            smallRightTile.style.height = tileHeight + 'px';
            smallRightTile.style.left = tileWidth * i + 'px';
        }
    }
    createRightTiles();
}


export {cornerTilesObj, createTiles}