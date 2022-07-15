const allCards = [
	{
		id: "circle1",
		no: 1,
		shape: "circle"
	},
	{
		id: "circle2",
		no: 2,
		shape: "circle"
	},
	{
		id: "circle3",
		no: 3,
		shape: "circle"
	},
	{
		id: "circle4",
		no: 4,
		shape: "circle"
	},
	
	{
		id: "circle5",
		no: 5,
		shape: "circle"
	},
	{
		id: "circle7",
		no: 7,
		shape: "circle"
	},
	{
		id: "circle8",
		no: 8,
		shape: "circle"
	},
	{
		id: "circle10",
		no: 10,
		shape: "circle"
	},
	{
		id: "circle11",
		no: 11,
		shape: "circle"
	},
	{
		id: "circle12",
		no: 12,
		shape: "circle"
	},
	{
		id: "circle13",
		no: 13,
		shape: "circle"
	},
	{
		id: "circle14",
		no: 14,
		shape: "circle"
	},
	{
		id: "triangle1",
		no: 1,
		shape: "triangle"
	},
	{
		id: "triangle2",
		no: 2,
		shape: "triangle"
	},
	{
		id: "triangle3",
		no: 3,
		shape: "triangle"
	},
	{
		id: "triangle4",
		no: 4,
		shape: "triangle"
	},
	{
		id: "triangle5",
		no: 5,
		shape: "triangle"
	},
	{
		id: "triangle7",
		no: 7,
		shape: "triangle"
	},
	{
		id: "triangle8",
		no: 8,
		shape: "triangle"
	},
	{
		id: "triangle10",
		no: 10,
		shape: "triangle"
	},
	{
		id: "triangle11",
		no: 11,
		shape: "triangle"
	},
	{
		id: "triangle12",
		no: 12,
		shape: "triangle"
	},
	{
		id: "triangle13",
		no: 13,
		shape: "triangle"
	},
	{
		id: "triangle14",
		no: 14,
		shape: "triangle"
	},
	{
		id: "plus1",
		no: 1,
		shape: "plus"
	},
	{
		id: "plus2",
		no: 2,
		shape: "plus"
	},
	{
		id: "plus3",
		no: 3,
		shape: "plus"
	},
	{
		id: "plus5",
		no: 5,
		shape: "plus"
	},
	{
		id: "plus7",
		no: 7,
		shape: "plus"
	},
	{
		id: "plus10",
		no: 10,
		shape: "plus"
	},
	{
		id: "plus11",
		no: 11,
		shape: "plus"
	},
	{
		id: "plus13",
		no: 13,
		shape: "plus"
	},
	{
		id: "plus14",
		no: 14,
		shape: "plus"
	},
	{
		id: "square1",
		no: 1,
		shape: "square"
	},
	{
		id: "square2",
		no: 2,
		shape: "square"
	},
	{
		id: "square3",
		no: 3,
		shape: "square"
	},
	{
		id: "square5",
		no: 5,
		shape: "square"
	},
	{
		id: "square7",
		no: 7,
		shape: "square"
	},
	{
		id: "square10",
		no: 10,
		shape: "square"
	},
	{
		id: "square11",
		no: 11,
		shape: "square"
	},
	{
		id: "square13",
		no: 13,
		shape: "square"
	},
	{
		id: "square14",
		no: 14,
		shape: "square"
	},
	{
		id: "star1",
		no: 1,
		shape: "star"
	},
	{
		id: "star2",
		no: 2,
		shape: "star"
	},
	{
		id: "star3",
		no: 3,
		shape: "star"
	},
	{
		id: "star4",
		no: 4,
		shape: "star"
	},
	{
		id: "star5",
		no: 5,
		shape: "star"
	},
	{
		id: "star7",
		no: 7,
		shape: "star"
	},
	{
		id: "star8",
		no: 8,
		shape: "star"
	},
]



let usedCard = []
let compCardArr = []
let myCardArr = []
let cardPlayed = []
let computerDiv = document.querySelector(".comp-cards")
let myDiv = document.querySelector(".my-cards")
let cardPlayedDiv = document.querySelector(".play")
let cardNumber = document.querySelector(".card-no")
let checker = 0
let hint = document.querySelector(".hint-inner-text")
let deal = document.querySelector(".deal")
let compCardNo = document.querySelector(".comp-card-no")

function generateCard() {
	let cardGenerated = allCards[Math.floor(Math.random()* allCards.length)];

	let cardIsNotRepeated = true;

	usedCard.forEach(id=>{
 	  if(id === cardGenerated.id) cardIsNotRepeated=false
	})
	if(cardIsNotRepeated){
		usedCard.push(cardGenerated.id)//Add to array
		return cardGenerated
	} else{
		 return generateCard()
		 
	}
	
}

function generateMyCard() {
	let myCard = myCardArr.map(function(mine){
		return `
			<div class="card-front">
				<h3 class="no">${mine.no}</h3>
				<div class="small ${mine.shape}-small"></div>
				<div class="large ${mine.shape}"></div>
				<div class="small-r ${mine.shape}-small"></div>
				<h3 class="no-r">${mine.no}</h3>
			</div>
		`
	})
	
	myCard = myCard.join("")
	let myScroll = myDiv.querySelector(".scroll")
	myScroll.innerHTML = myCard
}

function generateCompCard() {
	let compCard = compCardArr.map(function(mine){
		return `
				<div class="card-back">
					<h3 class="back-r">WHOT</h3>
					<h3 class="back">WHOT</h3>
				</div>
		`
	/*	return `
			<div class="card-front">
				<h3 class="no">${mine.no}</h3>
				<div class="small ${mine.shape}-small"></div>
				<div class="large ${mine.shape}"></div>
				<div class="small-r ${mine.shape}-small"></div>
				<h3 class="no-r">${mine.no}</h3>
			</div>
		`*/
	})
	compCard = compCard.join("")
	let compScroll = computerDiv.querySelector(".scroll")
	compScroll.innerHTML = compCard
}

function generateCardPlayed() {
	
	let playedCard = cardPlayed.map(function(play){
		return `
			<div class="card-front">
				<h3 class="no">${play.no}</h3>
				<div class="small ${play.shape}-small"></div>
				<div class="large ${play.shape}"></div>
				<div class="small-r ${play.shape}-small"></div>
				<h3 class="no-r">${play.no}</h3>
			</div>
		`
	})
	cardPlayedDiv.innerHTML = playedCard
}


window.addEventListener("DOMContentLoaded", function(){

	
	
	compCardArr = [generateCard(), generateCard(), generateCard(), generateCard(), generateCard()]
	
	myCardArr = [generateCard(), generateCard(), generateCard(), generateCard(), generateCard()]
	
	
		cardPlayed = [generateCard()]
generateCompCard()
generateMyCard()
generateCardPlayed()

	
	
	cardNumber.innerText = myCardArr.length
	compCardNo.innerText = compCardArr.length
	checkPlayer()
})














//i want a cover page with a card inage animation to load
const cover = document.querySelector(".cover")
function coverClose(){
	cover.style.top = "100%"
}
setTimeout(coverClose, 2000)

//after 2s close the cover page

// give both player and computer five random cards each represented by an object
	
	

function myTurn() {
//console.log(cardPlayed[0].no, cardPlayed[0].shape, cardPlayed.length)

	let myCards = myDiv.querySelectorAll(".card-front")
	
	var arr = Array.prototype.slice.call(myCards); // Now it's an Array.

	myCards.forEach(function(card){
		card.addEventListener("click", function(){
			let i = arr.indexOf(card)
			
		
			if (card.firstElementChild.textContent == cardPlayed[0].no || card.children[2].classList.contains(cardPlayed[0].shape)) {
			
			for (let j = 0; j < usedCard.length; j++) {
				if (usedCard[j] == cardPlayed[0].id) {
					usedCard.splice(j, 1)
					break;
				}
			}
		
			
			cardPlayed.shift()
			
			cardPlayed[0] = myCardArr[i]
			
			generateCardPlayed()
			myCardArr.splice(i, 1)
			generateMyCard()
			winner()
				if (card.firstElementChild.textContent == 2) {
					hint.innerText = "computer has picked 2"
					compCardArr.unshift(generateCard())
					compCardArr.unshift(generateCard())
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					generateCompCard()
					
					return checkPlayer()
					
				} else if (card.firstElementChild.textContent == 1) {
					hint.innerText = "Hold On"
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					return checkPlayer()
				}else if (card.firstElementChild.textContent == 14) {
					hint.innerText = "General Market"
					compCardArr.unshift(generateCard())
					generateCompCard()
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					return checkPlayer()
				}else if (card.firstElementChild.textContent == 8) {
					hint.innerText = "You skipped computer"
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					return checkPlayer()
				} else if (card.firstElementChild.textContent == 5) {
					hint.innerText = "computer picked 3"
					compCardArr.unshift(generateCard())
					compCardArr.unshift(generateCard())
					compCardArr.unshift(generateCard())
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					generateCompCard()
					
					return checkPlayer()
				}else{
					checker = 1
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					return checkPlayer()
				}
			
			}else{
				hint.innerText = "This card cant be played, please pick a card with either the same number or the same shape"
			}
		})
	})
	
	
	
}

if (checker == 0) {
	deal.addEventListener("click", function(){
		myCardArr.unshift(generateCard())
		cardNumber.innerText = myCardArr.length
		generateMyCard()
		checker = 1
		return checkPlayer()
	})
} else{
	deal.addEventListener("click", function(){
		hint.innerText = "It is not yet your turn"
	})
}


function compTurn() {
let isAvailable = true
//console.log(cardPlayed[0].no, cardPlayed[0].shape, cardPlayed.length)
for (i = 0; i < compCardArr.length; i++) {

	if (compCardArr[i].no == cardPlayed[0].no || compCardArr[i].shape == cardPlayed[0].shape) {
	
	

	for (let j = 0; j < usedCard.length; j++) {
				if (usedCard[j] == cardPlayed[0].id) {
					usedCard.splice(j, 1)
					break;
				}
			}
			
			
		cardPlayed.shift()
		cardPlayed.push(compCardArr[i])
		compCardArr.splice(i, 1)
		generateCompCard()
		generateCardPlayed()
		isAvailable = true
		winner()
		if (cardPlayed[0].no == 2) {
					hint.innerText = "You were made to pick 2"
					myCardArr.unshift(generateCard())
					myCardArr.unshift(generateCard())
					generateMyCard()
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					return checkPlayer()
					
				} else if (cardPlayed[0].no == 1) {
					hint.innerText = "Hold On"
					compCardNo.innerText = compCardArr.length
					return checkPlayer()
				}else if (cardPlayed[0].no == 14) {
					hint.innerText = "General Market"
					myCardArr.unshift(generateCard())
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					generateMyCard()
					return checkPlayer()
				}else if (cardPlayed[0].no == 8) {
					hint.innerText = "You have been skipped"
					compCardNo.innerText = compCardArr.length
					return checkPlayer()
				} else if (cardPlayed[0].no == 5) {
					hint.innerText = "You were made to pick 3"
					myCardArr.unshift(generateCard())
					myCardArr.unshift(generateCard())
					myCardArr.unshift(generateCard())
					cardNumber.innerText = myCardArr.length
					compCardNo.innerText = compCardArr.length
					generateMyCard()
					return checkPlayer()
				}else{
					compCardNo.innerText = compCardArr.length
					hint.innerText = "it's your turn to choose a card"
					checker = 0
					return checkPlayer()
				}
		
		break;
	} else{
		isAvailable = false
	}
	
}

	if (isAvailable == false) {
		compCardArr.unshift(generateCard())
		compCardNo.innerText = compCardArr.length
		generateCompCard()
		hint.innerText = "computer has picked a card"
		checker = 0
		return checkPlayer()
	}
	
}







//put a random card on the play card div

//set player check no to 0. if its 0, its the players turn to play but if its 1, its the computers turn by incrementing it by 1 when the player plays/pick a card and once the computer plays a well, set it back to 0
function checkPlayer() {
	if (checker == 0) {
		return myTurn()
		//hint.innerText = "It's your turn to choose a card"
		
	}else{
		hint.innerText = "computer is thinking..."
		return setTimeout(compTurn, 2000)
		//hint.innerText = "computer's turn to play"
	}
}
const congrats = document.querySelector(".won")

const lost = document.querySelector(".lost")

function winner() {
	if (myCardArr == 0) {
		congrats.style.transform = "translateY(0)"
	}
	if (compCardArr == 0) {
		lost.style.transform = "translateY(0)"
	}
}
// set hint text as appropriate with respect to the players checker no

// when the playet wants to play, if the card he selects(foreach and add event listemer), is either the same shape or number as the play div, it goes to replace the play div else, the hint will tel that the card us inappropriate and nothing happens and if the player decides to select a card, the card unsgifts the array and if added to the first position the the card number reads either it is added or removed

// when its the computer turn to play,it loops through the card and checks for the first on that has either the same number or shape. if it doesnt find, it draws a card and the number is set back to zero

// if the computer is playing or picking, set isMine to false but if im the one playing, set isMine to true so the cards to be drawn are either covered or open.

const restart = document.querySelectorAll(".restart")
restart.forEach(function(e){
	e.addEventListener("click", ()=> document.location.reload())
})
