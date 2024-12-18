/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/

let board;
let turn;
let winner;
let tie;

/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.querySelector("#message");
const boardEl = document.querySelector(".board");
const resetBtnEl = document.querySelector("#reset");

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

function handleClick(e) {
    const squareIndex = e.target.id;
    if (isNaN(squareIndex) || board[squareIndex] || winner) return;
    placePiece(squareIndex);
    checkForWinner();
    checkForTie();
    switchPlayerTurn();
    render()
}

function placePiece(index) {
    board[index] = turn;
}

function checkForWinner() {
    winningCombos.forEach(combo => {
        if (board[combo[0]] &&
            board[combo[0]] === board[combo[1]] &&
            board[combo[0]] === board[combo[2]]) {
                winner = board[combo[0]];
            }
    })
}

function checkForTie() {
    if (winner) return;
    tie = !board.includes("");
}

function switchPlayerTurn() {
    if (winner) return;
    if (turn === "X") {
        turn = "O"
    } else {
        turn = "X"
    }
}

/*----------------------------- Event Listeners -----------------------------*/

boardEl.addEventListener("click", handleClick);
resetBtnEl.addEventListener("click", init);

init();