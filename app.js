// ----- * START DEFINITION DES VARIABLES * -----

const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
let player1Name = document.getElementById('player1-name');
let roundPlayer1 = document.getElementById('round-player1');
let player1Container = document.querySelector('.player1');
let player2Name = document.getElementById('player2-name');
let roundPlayer2 = document.getElementById('round-player2');
let player2Container = document.querySelector('.player2');
let player1TotalPoints = document.getElementById('player1-total-points');
let player1CurrentPoints = document.getElementById('player1-current-points');
let player2TotalPoints = document.getElementById('player2-total-points');
let player2CurrentPoints = document.getElementById('player2-current-points');
let dice = document.getElementById('dice');
let roundScorePlayer1 = 0;
let roundScorePlayer2 = 0;
let totalPlayer1 = 0;
let totalPlayer2 = 0;
let holdScorePlayer1 = 0;
let holdScorePlayer2 = 0;
let roundPlayer = 'player1';
const rules = document.getElementById('rules');

// ----- * END DEFINITION DES VARIABLES * -----

// ----- * START FONCTION rules * -----

rules.addEventListener('click', () => {
  alert(`Règles du jeu :
  Le jeu comprend 2 joueurs sur un seul et même écran.
  Chaque joueur possède un score temporaire (score-tour) et un score Total. À chaque tour, le joueur a son score-tour initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au score-tour.
  Lors de son tour, le joueur peut décider à tout moment de :
  - Cliquer sur l’option “Garder”, qui permet d’envoyer les points du score-tour vers le Total. Ce sera alors le tour de l’autre joueur.
  - Lancer le dé. S’il obtient un 1, son score score-tour est perdu et c’est la fin de son tour.
  Le premier joueur qui atteint les 100 points gagne le jeu.`)
})

// ----- * END FONCTION rules * -----

// ----- * START FONCTION newGame * -----

newGame.addEventListener('click', () => {
  player1 = prompt('Entrez le nom du joueur 1:');
  player1Name.innerHtml = `${player1.value} <span id="round-player1" class="hide"><i class="bi bi-circle-fill"></i></span>`;
  player2 = prompt('Entrez le nom du joueur 2:');
  player2Name.innerHtml = `${player2} <span id="round-player2" class="hide"><i class="bi bi-circle-fill"></i></span>`;
  alert('Lancer la partie?');
  player1Container.classList.remove('hide');
  player2Container.classList.remove('hide');
  dice.classList.remove('hide');
  roll.classList.remove('hide');
  hold.classList.remove('hide');
  player1TotalPoints.innerHTML = totalPlayer1;
  player2TotalPoints.innerHTML = totalPlayer2;
  changeToPlayer1();
});

// ----- * END FONCTION newGame * -----


// ----- * START FONCTION rollDice * -----

roll.addEventListener('click', () => {

  dice.classList.remove('lost')
  diceScore = showDice();

  if(diceScore==1)
  {
    dice.classList.add('lost')
    roundScorePlayer1 = 0;
    roundScorePlayer2 = 0;
    if(roundPlayer == 'player1')
    {
      changeToPlayer2();
    }
    else
    {
      changeToPlayer1();
    }
  }
  else
  {
    if(roundPlayer == 'player1')
    {
      // Affichage du score du tour dans la case SCORE-TOUR du player 1
      roundScorePlayer1 = roundScorePlayer1 + diceScore;
      player1CurrentPoints.innerHTML = roundScorePlayer1;
    }
    else
    {
      // Affichage du score du tour dans la case SCORE-TOUR du player 2
      roundScorePlayer2 = roundScorePlayer2 + diceScore;
      player2CurrentPoints.innerHTML = roundScorePlayer2;
    }
  }
})

// ----- * END FONCTION rollDice * -----

// ----- * START FONCTION holdScore * -----

hold.addEventListener('click', () => {
  
  if(roundPlayer == 'player1')
  {
    // Affichage du score total du joueur1
    holdScorePlayer1 = holdScorePlayer1 + roundScorePlayer1;
    player1TotalPoints.innerHTML = holdScorePlayer1;

    // Remise à zéro du score du tour
    roundScorePlayer1 = 0;

    if(holdScorePlayer1 >= 100)
    {
      alert(player1 + ' a gagné !');
      player1Container.style.backgroundColor = 'rgb(180, 221, 221)';
      player2Container.style.backgroundColor = 'rgb(243, 230, 217)';
      roll.classList.add('hide');
      hold.classList.add('hide');
      return;
    }
    changeToPlayer2();
  }
  else
  {
    // Affichage du score total du joueur2
    holdScorePlayer2 = holdScorePlayer2 + roundScorePlayer2;
    player2TotalPoints.innerHTML = holdScorePlayer2;

    // Remise à zéro du score du tour
    roundScorePlayer2 = 0;

    if(holdScorePlayer2 >= 100)
    {
      alert(player2 + ' a gagné !');
      player2Container.style.backgroundColor = 'rgb(180, 221, 221)';
      player1Container.style.backgroundColor = 'rgb(243, 230, 217)';
      roll.classList.add('hide');
      hold.classList.add('hide');
      return;
    }
    changeToPlayer1()
  }
  
})

// ----- * END FONCTION holdScore * -----

// ----- * START FONCTION animeDice * -----

function animeDice()
{

}
// ----- * END FONCTION animeDice * -----

// ----- * START FONCTION showDice * -----

function showDice()
{

  

  const classDice = ['bi-dice-1', 'bi-dice-2', 'bi-dice-3', 'bi-dice-4', 'bi-dice-5', 'bi-dice-6'];

    // Générer un nombre entre 1 et 6
  let diceScore = Math.floor(Math.random() * 6 + 1);

  dice.classList.remove(...classDice);
  newDice = dice.classList.toggle('bi-dice-' + diceScore);
  return diceScore;

}

// ----- * END FONCTION showDice * -----

// ----- * START FONCTION changeToPlayer1 * -----

function changeToPlayer1()
{
  roundPlayer2.classList.add('hide');
  roundPlayer1.classList.remove('hide');
  player2CurrentPoints.innerHTML = roundScorePlayer2;
  player1Container.style.backgroundColor = 'rgb(180, 221, 221)';
  player2Container.style.backgroundColor = 'rgb(243, 230, 217)';
  roundPlayer = 'player1';
}

// ----- * END FONCTION changeToPlayer1 * -----

// ----- * START FONCTION changeToPlayer2 * -----

function changeToPlayer2()
{
  roundPlayer1.classList.add('hide');
  roundPlayer2.classList.remove('hide');
  player1CurrentPoints.innerHTML = roundScorePlayer2;
  player2Container.style.backgroundColor = 'rgb(180, 221, 221)';
  player1Container.style.backgroundColor = 'rgb(243, 230, 217)';
  roundPlayer = 'player2';
}

// ----- * END FONCTION changeToPlayer2 * -----