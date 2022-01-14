const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";





// iniciar o jogo
starGame();


// criar as cartas, embaralhar e iniciar os jogos


function starGame()
{
 game.createCardsFromApps();
    initializeCards(game.cards);
}



//organizar aas cartas na tela

function initializeCards(cards)
{

let gameBoard = document.getElementById("gameBoard");

gameBoard.innerHTML = "";
game.cards.forEach((card)=>
{
    let cardElement = document.createElement("div");
    cardElement.id = card.id;
    cardElement.classList.add(CARD);
    cardElement.dataset.icon = card.icon


    createCardContent(card, cardElement);

    cardElement.addEventListener("click",flipCard)
    gameBoard.appendChild(cardElement);


}


)


}



function createCardContent(card, cardElement)
{
    createCardFace(FRONT,card,cardElement);
    createCardFace(BACK,card,cardElement);

}

function createCardFace(face,card,element)
{

let cardElementFace = document.createElement('div')
cardElementFace.classList.add(face);

if(face === FRONT)
{ 
    
    let testType = card.icon;
    let iconElement = document.createElement('img');
    iconElement.classList.add(ICON);
    
    if(testType == "d" || testType == "e" || testType == "g" || testType == "i"){
    iconElement.src = "./" + card.icon + ".png"} else {iconElement.src = "./" + card.icon + ".gif" }

    cardElementFace.appendChild(iconElement);


}
else
{ 
    
    let iconElement = document.createElement('img');
    iconElement.classList.add(ICON);
    iconElement.src = "./Back.png"
    cardElementFace.appendChild(iconElement);
}
    
element.appendChild(cardElementFace);


}







// funcao que embaralha as cartas





let i = 0;

// kkkk obvio né
function flipCard()
{

    if(game.setCard(this.id)){
    
this.classList.add("flip");
if(game.secondCard){
if(game.checkMatch()){game.clearCards()
    i++;

    if( i == 10){
        let gameOverText = document.getElementById("gameOver");
          
    gameOverText.setAttribute("style","animation-name: descer;")
    gameOverText.style.display = "flex";
  

    }
}else{ 
    
    setTimeout(()=>{let firstCardView = document.getElementById(game.firstCard.id)
        let secondCardView = document.getElementById(game.secondCard.id)
    
        firstCardView.classList.remove('flip');
        secondCardView.classList.remove('flip');
        game.unflipCards()},1000)
    
    }
}
}


}

function restart()
{

    game.clearCards();
    starGame();
    let gameOverText = document.getElementById("gameOver");

    gameOverText.style.display ="none";
    i = 0;

}
