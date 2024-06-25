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
    currentScore: 0
}
const p2 = {
    totalScore: 0,
    currentScore: 0
}

function changePlayer(){
    playerDiv1.classList.toggle('player-active')
    playerDiv2.classList.toggle('player-active')
}

function start(){
    dice.classList.add('hidden');
    playerDiv1.classList.add('player-active')

    currentScoreEl1.textContent = 0;
    currentScoreEl2.textContent = 0;
    totalScoreEl1.textContent = 0;
    totalScoreEl2.textContent = 0;
}
start();


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
})