let gamePage = document.getElementById('game-page');
let redBoard = document.getElementById('red-board');
let blueBoard = document.getElementById('blue-board');
let resultBoard = document.getElementById('resultBoard');
let addBtn1 = document.getElementById('btn1');
let addBtn2 = document.getElementById('btn2');
let addBtn3 = document.getElementById('btn3');
let addBtn4 = document.getElementById('btn4');
let addBtn5 = document.getElementById('btn5');
let addBtn6 = document.getElementById('btn6');
let addBtn7 = document.getElementById('btn7');
let addBtn8 = document.getElementById('btn8');
let addBtn9 = document.getElementById('btn9');

// let redScore = document.getElementById('red-player-score');
// let blueScore = document.getElementById('blue-player-score');

// let getRedScore = localStorage.getItem('redValue');
// let getBlueScore = localStorage.getItem('blueValue');

let gameResult = document.getElementById('game-result');

let playerTurn = 1;


// if(getRedScore == null || getRedScore == ""){
//     getRedScore = 0;
//     redScore.innerHTML = getRedScore;
// }
// else{
//     redScore.innerHTML = getRedScore;
// }
// if(getBlueScore == null || getBlueScore == ""){
//     getBlueScore = 0;
//     blueScore.innerHTML = getBlueScore;
// }
// else{
//     blueScore.innerHTML = getBlueScore;
// }

function playAgain_btn(){
    addBtn1.disabled = false;
    addBtn2.disabled = false;
    addBtn3.disabled = false;
    addBtn4.disabled = false;
    addBtn5.disabled = false;
    addBtn6.disabled = false;
    addBtn7.disabled = false;
    addBtn8.disabled = false;
    addBtn9.disabled = false;

    addBtn1.innerHTML = '';
    addBtn2.innerHTML = '';
    addBtn3.innerHTML = '';
    addBtn4.innerHTML = '';
    addBtn5.innerHTML = '';
    addBtn7.innerHTML = '';
    addBtn6.innerHTML = '';
    addBtn9.innerHTML = '';
    addBtn8.innerHTML = '';

    playerTurn = 1;
    gameResult.innerHTML = '';
    gamePage.style.background = "var(--redBgColor)";
    // redBoard.style.opacity = '0.9';
    // blueBoard.style.opacity = '0.5';

    resultBoard.style.display = 'none';
}

// function reset_btn(){
//     addBtn1.disabled = false;
//     addBtn2.disabled = false;
//     addBtn3.disabled = false;
//     addBtn4.disabled = false;
//     addBtn5.disabled = false;
//     addBtn6.disabled = false;
//     addBtn7.disabled = false;
//     addBtn8.disabled = false;
//     addBtn9.disabled = false;

//     addBtn1.innerHTML = '';
//     addBtn2.innerHTML = '';
//     addBtn3.innerHTML = '';
//     addBtn4.innerHTML = '';
//     addBtn5.innerHTML = '';
//     addBtn7.innerHTML = '';
//     addBtn6.innerHTML = '';
//     addBtn9.innerHTML = '';
//     addBtn8.innerHTML = '';

//     getRedScore = 0;
//     getBlueScore = 0;
//     redScore.innerHTML = getRedScore;
//     blueScore.innerHTML = getBlueScore;
//     console.log();
//     console.log();

//     playerTurn = 1;
//     gameResult.innerHTML = '';
//     gamePage.style.background = "var(--redBgColor)";
//     redBoard.style.opacity = '0.9';
//     blueBoard.style.opacity = '0.5';
// }

function closeAlert(){
    playAgain_btn();
}

function check_UI(){
    let btn1value = addBtn1.innerHTML;
    let btn2value = addBtn2.innerHTML;
    let btn3value = addBtn3.innerHTML;
    let btn4value = addBtn4.innerHTML;
    let btn5value = addBtn5.innerHTML;
    let btn6value = addBtn6.innerHTML;
    let btn7value = addBtn7.innerHTML;
    let btn8value = addBtn8.innerHTML;
    let btn9value = addBtn9.innerHTML;

    if( (btn1value == 'x' && btn2value == 'x' && btn3value == 'x') ||
        (btn4value == 'x' && btn5value == 'x' && btn6value == 'x') ||
        (btn7value == 'x' && btn8value == 'x' && btn9value == 'x') ||
        (btn1value == 'x' && btn4value == 'x' && btn7value == 'x') ||
        (btn2value == 'x' && btn5value == 'x' && btn8value == 'x') ||
        (btn3value == 'x' && btn6value == 'x' && btn9value == 'x') ||
        (btn1value == 'x' && btn5value == 'x' && btn9value == 'x') ||
        (btn3value == 'x' && btn5value == 'x' && btn7value == 'x'))
    {
        addBtn1.disabled = true;
        addBtn2.disabled = true;
        addBtn3.disabled = true;
        addBtn4.disabled = true;
        addBtn5.disabled = true;
        addBtn6.disabled = true;
        addBtn7.disabled = true;
        addBtn8.disabled = true;
        addBtn9.disabled = true;

        gameResult.innerHTML = 'x (Red) wins';
        gameResult.style.color = "var(--redColor)";

        resultBoard.style.display = 'block';

        // getRedScore = Number(getRedScore) + 1;

        // localStorage.setItem('redValue', getRedScore);
        // redScore.innerHTML = localStorage.getItem('redValue');
        
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.5';

    }
    else if(
        (btn1value == 'o' && btn2value == 'o' && btn3value == 'o') ||
        (btn4value == 'o' && btn5value == 'o' && btn6value == 'o') ||
        (btn7value == 'o' && btn8value == 'o' && btn9value == 'o') ||
        (btn1value == 'o' && btn4value == 'o' && btn7value == 'o') ||
        (btn2value == 'o' && btn5value == 'o' && btn8value == 'o') ||
        (btn3value == 'o' && btn6value == 'o' && btn9value == 'o') ||
        (btn1value == 'o' && btn5value == 'o' && btn9value == 'o') ||
        (btn3value == 'o' && btn5value == 'o' && btn7value == 'o')
    ){
        addBtn1.disabled = true;
        addBtn2.disabled = true;
        addBtn3.disabled = true;
        addBtn4.disabled = true;
        addBtn5.disabled = true;
        addBtn6.disabled = true;
        addBtn7.disabled = true;
        addBtn8.disabled = true;
        addBtn9.disabled = true;

        gameResult.innerHTML = 'o (Blue) wins';
        gameResult.style.color = "var(--blueColor)";

        resultBoard.style.display = 'block';

        // getBlueScore = Number(getBlueScore) + 1;

        // localStorage.setItem('blueValue', 0);
        // blueScore.innerHTML = localStorage.getItem('blueValue');

        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.5';
    }
    else if(
        addBtn1.disabled == true &&
        addBtn2.disabled == true &&
        addBtn3.disabled == true &&
        addBtn4.disabled == true &&
        addBtn5.disabled == true &&
        addBtn6.disabled == true &&
        addBtn7.disabled == true &&
        addBtn8.disabled == true &&
        addBtn9.disabled == true
    ){
        gameResult.innerHTML = 'Draw';

        resultBoard.style.display = 'block';

        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.5';
    }
}

function add_1(){
    if(playerTurn == 1){
        addBtn1.innerHTML = 'x';
        addBtn1.disabled = true;
        addBtn1.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;
    }
    else{
        addBtn1.innerHTML = 'o';
        addBtn1.disabled = true;
        addBtn1.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_2(){
    if(playerTurn == 1){
        addBtn2.innerHTML = 'x';
        addBtn2.disabled = true;
        addBtn2.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn2.innerHTML = 'o';
        addBtn2.disabled = true;
        addBtn2.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_3(){
    if(playerTurn == 1){
        addBtn3.innerHTML = 'x';
        addBtn3.disabled = true;
        addBtn3.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn3.innerHTML = 'o';
        addBtn3.disabled = true;
        addBtn3.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_4(){
    if(playerTurn == 1){
        addBtn4.innerHTML = 'x';
        addBtn4.disabled = true;
        addBtn4.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn4.innerHTML = 'o';
        addBtn4.disabled = true;
        addBtn4.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_5(){
    if(playerTurn == 1){
        addBtn5.innerHTML = 'x';
        addBtn5.disabled = true;
        addBtn5.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn5.innerHTML = 'o';
        addBtn5.disabled = true;
        addBtn5.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_6(){
    if(playerTurn == 1){
        addBtn6.innerHTML = 'x';
        addBtn6.disabled = true;
        addBtn6.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn6.innerHTML = 'o';
        addBtn6.disabled = true;
        addBtn6.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_7(){
    if(playerTurn == 1){
        addBtn7.innerHTML = 'x';
        addBtn7.disabled = true;
        addBtn7.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn7.innerHTML = 'o';
        addBtn7.disabled = true;
        addBtn7.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_8(){
    if(playerTurn == 1){
        addBtn8.innerHTML = 'x';
        addBtn8.disabled = true;
        addBtn8.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn8.innerHTML = 'o';
        addBtn8.disabled = true;
        addBtn8.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}
function add_9(){
    if(playerTurn == 1){
        addBtn9.innerHTML = 'x';
        addBtn9.disabled = true;
        addBtn9.style.color = "var(--redColor)";
        gamePage.style.background = "var(--blueBgColor)";
        // redBoard.style.opacity = '0.5';
        // blueBoard.style.opacity = '0.9';
        playerTurn = 0;

    }
    else{
        addBtn9.innerHTML = 'o';
        addBtn9.disabled = true;
        addBtn9.style.color = "var(--blueColor)";
        gamePage.style.background = "var(--redBgColor)";
        // redBoard.style.opacity = '0.9';
        // blueBoard.style.opacity = '0.5';
        playerTurn = 1;
    }
    check_UI();
}