let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".socore-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice(){
    const choices = ['r', 's', 'p'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}

function convertToWord(letter){
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Papper';
    return 'Scissors';
}

function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}  beats  ${convertToWord(computerChoice)}  YOU WIN!`;
}
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}  loses  ${convertToWord(computerChoice)}  YOU LOST!`;
}
function draw(userChoice, computerChoice){
    result_p.innerHTML = `${convertToWord(userChoice)}  equals  ${convertToWord(computerChoice)}  DRAW!`;
}


function game(userChoice){  
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice){
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'rp':
        case 'ps':
        case 'sr':
            lose(userChoice, computerChoice)
            break;
        case 'rr':
        case 'pp':
        case 'ss':
            draw(userChoice, computerChoice)
    }
}


function main(){ 
    rock_div.addEventListener('click', function(){
        game('r');
    })

    scissors_div.addEventListener('click', function(){
        game('s')
    })
    paper_div.addEventListener('click', function(){
        game('p');
    })
}

main();
