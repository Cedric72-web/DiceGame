// ----- * START DEFINITION DES VARIABLES * -----

const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
let player1Name = document.getElementById('player1-name');
let player2Name = document.getElementById('player2-name');
let player1TotalPoints = document.getElementById('player1-total-points');
let player1CurrentPoints = document.getElementById('player1-current-points');
let player2TotalPoints = document.getElementById('player2-total-points');
let player2CurrentPoints = document.getElementById('player2-current-points');
const rules = document.getElementById('rules');
let roundScorePlayer1 = 0;
let totalPlayer1 = 0;
let holdScore = 0

// ----- * END DEFINITION DES VARIABLES * -----

// ----- * START FONCTION RULES * -----

rules.addEventListener('click', () => {
  alert(`Règles du jeu :
  Le jeu comprend 2 joueurs sur un seul et même écran.
  Chaque joueur possède un score temporaire (score-tour) et un score Total. À chaque tour, le joueur a son score-tour initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au score-tour.
  Lors de son tour, le joueur peut décider à tout moment de :
    - Cliquer sur l’option “Garder”, qui permet d’envoyer les points du score-tour vers le Total. Ce sera alors le tour de l’autre joueur.
    - Lancer le dé. S’il obtient un 1, son score score-tour est perdu et c’est la fin de son tour.
  Le premier joueur qui atteint les 100 points gagne le jeu.`)
})

// ----- * END FONCTION RULES * -----

// ----- * START FONCTION NEWGAME * -----

newGame.addEventListener('click', () => {
  player1 = prompt('Entrez le nom du joueur 1:');
  player1Name.innerText = player1;
  player2 = prompt('Entrez le nom du joueur 2:');
  player2Name.innerText = player2;
  alert('Lancer la partie?');
  console.log('la partie commence...')
  player2CurrentPoints = 0;
});

// ----- * END FONCTION NEWGAME * -----


// ----- * START FONCTION ROLLDICE * -----

roll.addEventListener('click', () => {
  let dice = document.getElementById('dice');

  // Générer un nombre entre 1 et 6
  let diceScore = Math.floor(Math.random() * 6 + 1);

  const classDice = ['bi-dice-1', 'bi-dice-2', 'bi-dice-3', 'bi-dice-4', 'bi-dice-5', 'bi-dice-6']

  dice.classList.remove(...classDice);
  newDice = dice.classList.toggle('bi-dice-' + diceScore);

  // Affichage du score du tour dans la case SCORE-TOUR
  roundScorePlayer1 = roundScorePlayer1 + diceScore;
  player1CurrentPoints.innerHTML = roundScorePlayer1;
})

// ----- * END FONCTION ROLLDICE * -----

// ----- * START FONCTION HOLDSCORE * -----

hold.addEventListener('click', () => {
  // Affichage du score total du joueur1
  holdScore = holdScore + roundScorePlayer1;
  player1TotalPoints.innerHTML = holdScore;
  
  // Remise à zéro du score du tour
  roundScorePlayer1 = 0;
  document.getElementById('player1-current-points').innerHTML = roundScorePlayer1;
})

// ----- * END FONCTION HOLDSCORE * -----