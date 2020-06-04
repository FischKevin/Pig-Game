/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/



//document.querySelector('#current-' + activePlayer).textContent = dice;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    let diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = '/img/dice/dice-' + dice + '.png';
    console.log(activePlayer);
    // if dice value != 1 -> add dice value to round score
    if (dice != 1) {
        roundScore += dice; 
        activePlayer = activePlayer +1 ;
        document.querySelector('.score-round-' + activePlayer).textContent = roundScore;
        activePlayer = activePlayer - 1;
    // else round value = 0 and next player
    } else {
        roundScore = 0;
        activePlayer = activePlayer +1 ;
        document.querySelector('.score-round-' + activePlayer).textContent = roundScore;
        activePlayer = activePlayer - 1;
        nextPlayer();
    }
    console.log(activePlayer);
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    if (activePlayer === 0) {
        document.getElementById('player-1').classList.remove('active');
        document.getElementById('player-2').classList.add('active');
    } else {
        document.getElementById('player-2').classList.remove('active');
        document.getElementById('player-1').classList.add('active');
    }
}

document.querySelector('.btn-hold').addEventListener('click', function() {


});

document.querySelector('.btn-new').addEventListener('click', function() {
    init();
});

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    maxScore = 100;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.score-total-1').textContent = '0';
    document.querySelector('.score-total-2').textContent = '0';
    document.querySelector('.score-round-1').textContent = '0';
    document.querySelector('.score-round-2').textContent = '0';
}