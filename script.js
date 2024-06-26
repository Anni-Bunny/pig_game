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
    showCurrentScore(p1);
    showCurrentScore(p2);
}

function rollTheDice() {
    return Math.ceil(Math.random() * 6);
}

function showTheDice(diceNumber) {
    dice.src = `images/dice-${diceNumber}.png`;
    dice.classList.remove('hidden');
}

function addToCurrentScore(player, diceNumber) {
    player.currentScore += diceNumber;
}

function showCurrentScore(player) {
    player.currentScoreEl.textContent = player.currentScore;
}

function addToTotalScore(player) {
    player.totalScore += player.currentScore
}

function showTotalScore(player) {
    player.totalScoreEl.textContent = player.totalScore;
}

function clearScores() {
    location.reload();
}

function handleRollClick() {
    const currentPlayer = currentPlayerId === 1 ? p1 : p2;
    const currentRoll = rollTheDice();
    showTheDice(currentRoll);
    addToCurrentScore(currentPlayer, currentRoll);
    showCurrentScore(currentPlayer);
    if (currentRoll === 1) {
        changePlayer();
        showCurrentScore(currentPlayer);
    }
}

function handleHoldClick() {
    const currentPlayer = currentPlayerId === 1 ? p1 : p2;
    addToTotalScore(currentPlayer);
    showTotalScore(currentPlayer);
    changePlayer();
}

btnRoll.addEventListener('click', handleRollClick);
btnHold.addEventListener('click', handleHoldClick)
btnNew.addEventListener('click', clearScores);



