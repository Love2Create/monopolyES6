import _ from "lodash";

//--------- create two divs for the dice
function dice(gameContainer) {

    //---------- create div for all dice elements
    const mainDiceDiv = document.createElement('div');
    gameContainer.appendChild(mainDiceDiv);
    //---------- div info
    mainDiceDiv.style.cssText = 'id: mainDiceDiv; top: 300px; left: 250px; position: absolute; width: 250px; height: 200px';

    //---------- create div for the two dices
    const dicesContainerDiv = document.createElement('div');
    mainDiceDiv.appendChild(dicesContainerDiv);
    dicesContainerDiv.style.cssText = 'id: diceContainerDiv; width: 250px; height: 160px; display: flex; justify-content: space-evenly; align-items: center; flex-direction: row;';

    for (let i = 1; i < 3; i++) {

        //---------- create the two dice divs
        const dice = document.createElement('div');
        dicesContainerDiv.appendChild(dice);
        //---------- dice div info
        dice.style.cssText = 'display: flex; width: 40%; height: 60%; border: 3px solid black; background-color: white; font-size: 70px; color: black; border-radius: 25px; center; align-items: center; justify-content: center;';
        dice.setAttribute('id', 'dice'+i);
        dice.innerHTML = '?';
    }

    const diceBtnContainer = document.createElement('div');
    mainDiceDiv.appendChild(diceBtnContainer);
    diceBtnContainer.style.cssText = 'display: flex; width: 100%; justify-content: center';

    const diceBtn = document.createElement('div');
    diceBtnContainer.appendChild(diceBtn);
    diceBtn.style.cssText = 'display: flex; width: 80%; height: 40px; background-color: purple; color: white; font-size: 20px; align-items: center; justify-content: center; border-radius: 10px';
    diceBtn.innerHTML = 'ROLL THE DICE';
    diceBtnContainer.addEventListener('mouseover', ()=>{
        diceBtnContainer.style.cursor = 'pointer';
        diceBtn.style.backgroundColor = 'pink';
        diceBtn.style.color = 'black';
    });
    diceBtnContainer.addEventListener('mouseout', ()=>{
        diceBtn.style.color = 'white';
        diceBtn.style.backgroundColor = 'purple';
    })
    diceBtnContainer.addEventListener('click', ()=>{
        
        for (let i = 1; i < 3; i++){
            
            const diceNumContainer = document.querySelector(`#dice${i}`);

            const diceNum = Math.floor ( Math.random() * 6 ) + 1;

            console.log(diceNum);

            diceNumContainer.innerHTML =  diceNum;
        }

    });

}

//--------- export
export { dice };