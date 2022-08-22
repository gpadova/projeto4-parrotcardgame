let moves = 0
let rightMoves = 0;
const gifsArray = ['gif1', 'gif1', 'gif2', 'gif2', 'gif3', 'gif3', 'gif4', 'gif4', 'gif5', 'gif5', 'gif6','gif6', 'gif7', 'gif7']
let requiredCards = Number(prompt("Qual seria o número de cartas do seu jogo? Lembrando que esse número tem  que estar entre 4 e 14 e ser um número par"))

function checkTheInput(){
    while((requiredCards % 2 === 1) ||((requiredCards > 14) || (requiredCards < 4))){
        alert('Digite o número correto de cartas indicado no enunciado')
        requiredCards = Number(prompt("Qual seria o número de cartas do seu jogo? Lembrando que esse número tem  que estar entre 4 e 14 e ser um número par"))
     }
     addTheRequiredCards()
}
checkTheInput()

function addTheRequiredCards(){
        let card = document.querySelector('.place-of-cards')
        let cardGames = []
        for(let i = 0; cardGames.length< requiredCards ; i++) {
            cardGames.push(gifsArray[i])
     }
        
    cardGames.sort(parametro);
    function parametro() {
        return Math.random() - 0.5;  
      }

        for(let i = 0; i < requiredCards; i++){
            card.innerHTML += `<div class="card" onclick="flipTheCard(this)">
            <div class = "card-holder">
                <div class="front-face face" >
                    <img src="./images/parrot.png" alt="Parte da frente da carta">
                </div>
                <div class="back-face face">
                    <img src="./gifs/${cardGames[i]}.gif" id="${cardGames[i]}" alt="Icone do jogo da memória">
                </div>
            </div>
             `
        }    
    }




function flipTheCard(card){
    let selectedCard = document.querySelectorAll('.card-holder .selected-class')
    if(selectedCard[0] === undefined){
        let normalCard = card.querySelector('.front-face')
        let flippedCard = card.querySelector('.back-face')
        
        normalCard.classList.add('flip-back-side')
        flippedCard.classList.add('flip-front-side')
        card.classList.add('selected-class')
    }else if(selectedCard[1] === undefined){
        let normalCard = card.querySelector('.front-face')
        let flippedCard = card.querySelector('.back-face')

        normalCard.classList.add('flip-back-side')
        flippedCard.classList.add('flip-front-side')
        card.classList.add('selected-class')
    }
    checkWinningPlay()
}

function checkWinningPlay(){
    let selectedCard = document.querySelectorAll('.place-of-cards .selected-class')
    
    if(selectedCard.length == 2){
        if(selectedCard[0].innerHTML === selectedCard[1].innerHTML){
            winningPlay()
            
        }else{
            setTimeout(notAWinningPlay, 1000)
        }
    }
}

function winningPlay(){
    let selectedCard = document.querySelectorAll('.place-of-cards .selected-class');
    
    selectedCard[0].classList.remove('selected-class')
    selectedCard[1].classList.remove('selected-class')
    
    selectedCard[0].classList.add('matched')
    selectedCard[1].classList.add('matched')
    
    rightMoves = rightMoves + 2
    moves = moves + 2
    
    checkIfTheGameWasWon()
}

function notAWinningPlay(){
    let selectedCard = document.querySelectorAll('.place-of-cards .selected-class');
    let frontFaced = document.querySelectorAll('.selected-class .flip-back-side ');
    let backFaced = document.querySelectorAll('.selected-class .flip-front-side ');

    frontFaced[0].classList.remove('flip-back-side')
    frontFaced[1].classList.remove('flip-back-side')

    backFaced[0].classList.remove('flip-front-side')
    backFaced[1].classList.remove('flip-front-side')

    selectedCard[0].classList.remove('selected-class')
    selectedCard[1].classList.remove('selected-class')

    
    moves = moves + 2
}

function checkIfTheGameWasWon(){
    if(rightMoves === requiredCards){
        alert(`Você ganhou o jogo em ${moves} jogadas`)
    }
}
