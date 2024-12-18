/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelector(".sqr");
const messageEl = document.querySelector("#message");



/*-------------------------------- Functions --------------------------------*/

function init() {
    board = ["", "", "", "", "", "", "", "", "",];
    turn = "X";
    winner = null;
    tie = false;
    render();
}

/*----------------------------- Event Listeners -----------------------------*/



// initialize game
init();