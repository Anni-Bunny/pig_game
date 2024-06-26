'use strict'

const playerDiv1 = document.getElementById('player-1');
const playerDiv2 = document.getElementById('player-2');
const totalScoreEl1 = document.getElementById('totalScore-1');
const totalScoreEl2 = document.getElementById('totalScore-2');
const btnNew = document.getElementById('btn-new');
const btnHold = document.getElementById('btn-hold');
const btnRoll = document.getElementById('btn-roll');
const currentScoreEl1 = document.getElementById('currentScore-1');
const currentScoreEl2 = document.getElementById('currentScore-2');
const dice = document.getElementById('dice');

const p1 = {
    totalScore: 0,
    currentScore: 0,
    currentScoreEl: currentScoreEl1,
    totalScoreEl: totalScoreEl1
}
const p2 = {
    totalScore: 0,
    currentScore: 0,
    currentScoreEl: currentScoreEl2,
    totalScoreEl: totalScoreEl2
}

let currentPlayerId = 1;


function changePlayer() {
    playerDiv1.classList.toggle('player-active')
    playerDiv2.classList.toggle('player-active')
    currentPlayerId = currentPlayerId === 1 ? 2 : 1;
    p1.currentScore = 0;
    p2.currentScore = 0;
}

function rollTheDice() {
    return Math.ceil(Math.random() * 6);
}

function showTheDice(diceNumber) {
    dice.src = `images/dice-${diceNumber}.png`;
    dice.classList.remove('hidden');
}

function addToCurrentScore(player, diceNumber) {
    //const currentPlayer = currentPlayerId === 1 ? p1 : p2;
    player.currentScore += diceNumber;
}
function showCurrentScore(player){
    player.currentScoreEl.textContent = player.currentScore;
}
function addToTotalScore(player){
    player.totalScore += player.currentScore
}
function  showTotalScore(player){
    player.totalScoreEl.textContent = player.totalScore;
}




function start() {
    playerDiv1.classList.add('player-active')

    currentScoreEl1.textContent = 0;
    currentScoreEl2.textContent = 0;
    totalScoreEl1.textContent = 0;
    totalScoreEl2.textContent = 0;
}

start();

/*

btnRoll.addEventListener('click', function () {
    const diceNumber = Math.ceil(Math.random() * 6)
    dice.src = `images/dice-${diceNumber}.png`;
    dice.classList.remove('hidden');
    currentScoreEl1.textContent = Number(currentScoreEl1.textContent) + diceNumber;
    if (diceNumber === 1){
        currentScoreEl1.textContent = 0;
        playerDiv1.classList.remove('player-active');
        playerDiv2.classList.add('player-active')
    }
})*/
