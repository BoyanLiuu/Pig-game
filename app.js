/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 50 points on GLOBAL score wins the game

*/
var current_score , total_score, activate_player,scores,flag ;

init();


function init (){
    scores = [0,0];
    activate_player = 0;
    current_score = 0;
    flag = true;
    document.getElementById("current-0").textContent = 0;
    document.querySelector("#current-1").textContent = 0;
    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
}


// Roll dice  event listener
document.querySelector('.btn-roll').addEventListener('click',function(){
    if (flag) {
    var number  = Math.floor((Math.random() * 6) + 1);
    document.querySelector('.dice').style.display = 'block';
    document.querySelector('.dice').src ='dice-'+number + '.png';
    if (number !== 1 ){
        current_score += number;
        document.querySelector('#current-' + activate_player).textContent = current_score;
    } else {
        nextplayer();
    }
    }
});

// Hold dice  event listener
document.querySelector('.btn-hold').addEventListener('click',function(){
    if (flag ){
    scores[activate_player] += current_score;
    document.getElementById('score-'+activate_player).textContent = scores[activate_player];
    if (scores[activate_player] >= 20 ) {
        document.querySelector('.player-' + activate_player + '-panel').classList.add('winner');
        document.querySelector('#name-' + activate_player).textContent = 'Winner!';
        document.querySelector('.player-' + activate_player + '-panel').classList.remove('active');
        document.querySelector('.dice').style.display = 'none';
        flag = false;
    } else {
        nextplayer();
    }
}
});
// new game eventlistener
document.querySelector('.btn-new').addEventListener('click',function(){
    init();
});

function nextplayer () {
    document.querySelector('#current-0' ).textContent = 0;
    document.querySelector('#current-1' ).textContent = 0;
    current_score = 0;
    activate_player === 0  ? activate_player = 1 : activate_player = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}