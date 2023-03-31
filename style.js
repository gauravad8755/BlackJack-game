
let cards = [] //array:- ordered list of items
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
// let sumEl = document.querySelector("#sum-el")

let player = {
    name : "Gaurav",
    chips : 200
}

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard(){
    let rdmNumber = Math.floor(Math.random()*13) + 1
    if(rdmNumber > 10){
        return 10
    }else if(rdmNumber === 1){
        return 11
    }else{
        return rdmNumber
    }
    
}

function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame(){
    if (sum <= 20){
        message=("Do you want to draw a new card? 🙃")
    }
    else if(sum === 21){
        message=("You've got a blackjack 😁")
        hasBlackJack = true
    }
    else{
        message=("You are out of the game!!🥲")
        isAlive = false
    }
    messageEl.innerText = message
    sumEl.innerText = "Sum: " + sum
    cardsEl.textContent = "Cards: "
    //for loop to show all cards 

    for(let i=0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

}

function newCard(){
   if(isAlive ===true && hasBlackJack===false){
    let card = getRandomCard()
    sum = sum + card
    cards.push(card)
    renderGame()
   }
}

