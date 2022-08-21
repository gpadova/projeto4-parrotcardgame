let moves = 0
let rightMoves = 0;
let minhaArray = []
const gifsArray = ['gif1', 'gif1', 'gif2', 'gif2', 'gif3', 'gif3', 'gif4', 'gif4', 'gif5', 'gif5', 'gif6','gif6', 'gif7', 'gif7']

const cardToBeRemoved = document.querySelector('.card')


function addTheRequiredCards(){
    
    const requiredCards = Number(prompt("Qual seria o número de cartas do seu jogo? Lembrando que esse número tem  que estar entre 4 e 14 e ser um número par"))
    if((requiredCards % 2 !== 0) ||((requiredCards > 14) || (requiredCards < 4))){
        alert('Digite o número correto de cartas indicado no enunciado')
        addTheRequiredCards();
        return;
        
    }
        let card = document.querySelector('.place-of-cards')
        let cardGames = []
        for(let i = 0; cardGames.length< requiredCards ; i++) {
            cardGames.push(gifsArray[i])
        }
        
    cardGames.sort(parametro);
    function parametro() {
        return Math.random() - 0.5;  
      }
      console.log(cardGames)

        for(let i = 0; i < requiredCards; i++){
            card.innerHTML += `<div class="card" onclick="flipTheCard(this)">
            <div class="front-face face" >
              <img src="./images/parrot.png" alt="Parte da frente da carta">
            </div>
            <div class="back-face face">
              <img src="./gifs/${cardGames[i]}.gif" alt="Icone do jogo da memória">
            </div>
             `
        }    
    }

addTheRequiredCards()


function flipTheCard(card){
    card.querySelector(".front-face").classList.toggle("flip-front-side");
    card.querySelector(".back-face").classList.toggle("flip-back-side");
}

