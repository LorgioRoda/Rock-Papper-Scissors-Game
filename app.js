let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".socore-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const scissors_div = document.getElementById("s");
const paper_div = document.getElementById("p");

function getComputerChoice(){
    const choices = ['r', 's', 'p'];
    const randomNumber = (Math.floor(Math.random() * 3))
    return choices[randomNumber];
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    console.log(user);
    console.log(computer)
}
function lose(user, computer){
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore
    console.log(user);
    console.log(computer)
}
function draw(){
    
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
