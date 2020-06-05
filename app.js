init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    let dice = Math.floor(Math.random() * 6) + 1;
    let diceDom = document.querySelector('.dice');
    console.log(activePlayer);
    diceDom.style.display = 'block';
    diceDom.src = '/img/dice/dice-' + dice + '.png';
    console.log(dice);
    // if dice value != 1 -> add dice value to round score
    if (dice != 1) {
        roundScore += dice; 
        document.querySelector('.score-round-' + activePlayer).textContent = roundScore;
    // else round value = 0 and next player
    } else {
        nextPlayer();
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    console.log(activePlayer);
    roundScore = 0;
    document.querySelector('.score-round-0').textContent = '0';
    document.querySelector('.score-round-1').textContent = '0';

    document.querySelector('#player-0').classList.toggle('active');
    document.querySelector('#player-1').classList.toggle('active');

}

document.querySelector('.btn-hold').addEventListener('click', function() {
    // clicking btn-hold round score become total score and nextPlayer
    scores[activePlayer] += roundScore;
    document.querySelector('.score-total-' + activePlayer).textContent = scores[activePlayer];

    nextPlayer();
});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    maxScore = 100;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.score-total-0').textContent = '0';
    document.querySelector('.score-total-1').textContent = '0';
    document.querySelector('.score-round-0').textContent = '0';
    document.querySelector('.score-round-1').textContent = '0';
    document.getElementById('player-1').classList.remove('active');
    document.getElementById('player-0').classList.add('active');
}