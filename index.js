let score= JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};
updateScore();

function playGame(playerMove){
    const computerMove= pickComputerMove();
    console.log(computerMove);

    let result='';

    if(playerMove==='scissors'){
        if(computerMove=== 'paper'){
            result = 'You win';
        }
        else if(computerMove=== 'rock'){
            result = 'You lose';
        }
        else if(computerMove=== 'scissors'){
            result = 'Tie';
        }
    }
    else if(playerMove==='paper'){
        if(computerMove=== 'paper'){
            result = 'Tie';
        }
        else if(computerMove=== 'rock'){
            result = 'You win';
        }
        else if(computerMove=== 'scissors'){
            result = 'You lose';
        }
    }
    else if(playerMove==='rock'){
        if(computerMove=== 'rock'){
            result = 'Tie';
        }
        else if(computerMove=== 'paper'){
            result = 'You lose';
        }
        else if(computerMove=== 'scissors'){
            result = 'You win';
        }
    }
    if(result==='You win'){
        score.wins+=1;
    }
    else if(result==='You lose'){
        score.loses+=1;
    }
    else if(result==='Tie'){
        score.ties+=1;
    }
    localStorage.setItem('score',JSON.stringify(score));
    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML=`You <img class="emoji" src="${playerMove}-emoji-new.png"> - <img class="emoji" src="${computerMove}-emoji-new.png"> Computer`;

};

function updateScore(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.loses} Ties: ${score.ties}`;
};

function pickComputerMove(){
    let computerMove='';
    const randomNumber= Math.random();

    if(randomNumber>=0 && randomNumber<1/3){
        computerMove ='rock';
    }
    else if(randomNumber>=1/3 && randomNumber<2/3){
        computerMove ='paper';   
    }
    else if(randomNumber>=2/3 && randomNumber<1){
        computerMove ='scissors';
    }
    return computerMove;
};