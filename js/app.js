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

function render() {
    updateBoard();
    updateMessage();
}

function updateBoard() {
    board.forEach((cell, index) => {
        const square = squareEls[index];
        if (cell === "X") {
            square.textContent = "X";
        } else if (cell === "O") {
            square.textContent = "O";
        } else {
            square.textContent = "";
        }
    })

}

function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `It's ${turn}'s turn`;
    } else if (!winner && tie) {
        messageEl.textContent = "It's a tie";
    } else {
        messageEl.textContent = `Congrats ${winner}, you won!`;
    }
}

/*----------------------------- Event Listeners -----------------------------*/



// initialize game
init();