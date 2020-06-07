/*
TO DO :
- event onclick btn-hold
if (roundScore = 0) {
    print message "you must roll the dice"
} else {
    scores[activePlayer] += roundScore;
    document.querySelector('.score-total-' + activePlayer).textContent = scores[activePlayer];

    nextPlayer();
}


*/

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    console.log(scores[activePlayer]);
        let dice = Math.floor(Math.random() * 6) + 1;
        let diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = '/img/dice/dice-' + dice + '.png';
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
    roundScore = 0;
    document.querySelector('.score-round-0').textContent = '0';
    document.querySelector('.score-round-1').textContent = '0';

    document.querySelector('#player-0').classList.toggle('active');
    document.querySelector('#player-1').classList.toggle('active');

}

document.querySelector('.btn-hold').addEventListener('click', function() {
    
    if (scores[activePlayer] < maxScore) {
        scores[activePlayer] += roundScore;
        document.querySelector('.score-total-' + activePlayer).textContent = scores[activePlayer];
    
        if (scores[activePlayer] >= maxScore) {
            document.querySelector('.btn-roll').style.display = 'none';
            document.querySelector('.btn-hold').style.display = 'none';
            document.querySelector('.dice').style.display = 'none';

        } else {
            nextPlayer();
        }
    }   

});

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    maxScore = 20;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.score-total-0').textContent = '0';
    document.querySelector('.score-total-1').textContent = '0';
    document.querySelector('.score-round-0').textContent = '0';
    document.querySelector('.score-round-1').textContent = '0';
    document.getElementById('player-1').classList.remove('active');
    document.getElementById('player-0').classList.add('active');
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
}