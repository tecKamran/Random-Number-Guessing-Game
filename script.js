const randomNumber=parseInt(Math.random()*100+1);

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining=document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const startOver=document.querySelector('.resultParas');

const p=document.createElement('p')

let preGuess=[];
let numGuess=0;
let playGame=true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
       const guess=parseInt(userInput.value)
    //    console.log(guess)
       validateGuess(guess)
    })

}


function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please enter a valid number')
  }else if(guess<1){
    alert('Please enter a number greater than 1')
  }
  else if(guess>100){
    alert('Please enter a number less than 100')
  }else{
    preGuess.push(guess)
    if(numGuess ===11){
        displayGuess(guess)
        displayMsg(`Game Over. Random number was ${randomNumber}`)
        endGame()
    }else{
        displayGuess(guess)
        checkGuess(guess)
    }
  }
}

function checkGuess(guess){
      if(guess===randomNumber){
        displayMsg("You Won!!!")
        endGame()
      }else if(guess<randomNumber){
        displayMsg('Number is very low')
      }else if(guess>randomNumber){
        displayMsg("Number is veyr High")
      }
}
function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess}  `;
    remaining.innerHTML=`${10-numGuess}`;
    numGuess++;
   
      
}

function displayMsg(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`;
 
}
function endGame(){
    //Value cleans here UserInput.value=''
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">New Game</h2>`
     startOver.appendChild(p)
     playGame=false
     newGame();
    
}

function newGame(){
    const newGameBtn=document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        randomNumber=(parseInt(Math.random()*100+1));
        preGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`${10-numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })

}


