const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');
let player1Name = document.getElementById('player1-name');
let player2Name = document.getElementById('player2-name');
const rules = document.getElementById('rules');

rules.addEventListener('click', () => {
  alert(`Règles du jeu :
  Le jeu comprend 2 joueurs sur un seul et même écran.
  Chaque joueur possède un score temporaire (score-tour) et un score Total. À chaque tour, le joueur a son score-tour initialisé à 0 et peut lancer un dé autant de fois qu'il le souhaite. Le résultat d’un lancer est ajouté au score-tour.
  Lors de son tour, le joueur peut décider à tout moment de :
    - Cliquer sur l’option “Garder”, qui permet d’envoyer les points du score-tour vers le Total. Ce sera alors le tour de l’autre joueur.
    - Lancer le dé. S’il obtient un 1, son score score-tour est perdu et c’est la fin de son tour.
  Le premier joueur qui atteint les 100 points gagne le jeu.`)
})

newGame.addEventListener('click', () => {
  player1 = prompt('Entrez le nom du joueur 1:');
  player1Name.innerText = player1;
  player2 = prompt('Entrez le nom du joueur 2:');
  player2Name.innerText = player2;
  alert('Lancer la partie?');
  console.log('la partie commence...')
});

roll.addEventListener('click', () => {
  console.log('Lance le dés');
});

hold.addEventListener('click', () => {
  console.log('Conserve le score');
});