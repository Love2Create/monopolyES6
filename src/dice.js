import _ from "lodash";

//--------- create two divs for the dice
function dice(handler) {

    //---------- create a div housing all dice elements
    const mainDiceDiv = document.createElement('div');
    const sideBarEl = document.querySelector('#sideBar');
    const sb_playerContainer_el = document.querySelector('.sb_playerContainer');
    sideBarEl.appendChild(mainDiceDiv);
    //---------- div info
    mainDiceDiv.setAttribute('id', 'mainDiceDiv');
    

    //---------- create div housing the two dices
    const dicesContainerDiv = document.createElement('div');
    mainDiceDiv.appendChild(dicesContainerDiv);
    //---------- div info
    dicesContainerDiv.setAttribute('id', 'dicesContainerDiv');
    
    
    //---------- create the two dices
    for (let i = 1; i < 3; i++) {

        //---------- create the two dice divs
        const dice = document.createElement('div');
        dicesContainerDiv.appendChild(dice);
        //---------- div info
        dice.setAttribute('id', 'dice'+i);
        dice.setAttribute('class', 'dices');
        dice.innerHTML = '?';
    }


    //-------------- create "roll the dice" button --------------

    //-------------- create div to contain the button
    const diceBtnContainer = document.createElement('div');
    mainDiceDiv.appendChild(diceBtnContainer);
    //-------------- div info
    diceBtnContainer.setAttribute('id', 'diceBtnContainer');

    //-------------- create the button div
    const diceBtn = document.createElement('div');
    diceBtnContainer.appendChild(diceBtn);
    //-------------- div info
    diceBtn.setAttribute('id', 'diceBtn');
    diceBtn.innerHTML = 'ROLL THE DICE';


    //
    diceBtnContainer.addEventListener('click', ()=>{

        let total = 0;
        
        for (let i = 1; i < 3; i++){
            
            const diceNumContainer = document.querySelector(`#dice${i}`);

            const diceNum = Math.floor ( Math.random() * 6 ) + 1;

            console.log(diceNum);

            diceNumContainer.innerHTML =  diceNum;

            total += diceNum;

        }

        if(handler){
            handler(total);
        }

    });

}

//--------- export
export { dice };