const newGame = document.getElementById('new-game');
const roll = document.getElementById('roll');
const hold = document.getElementById('hold');

newGame.addEventListener('click', () => {
  console.log('Nouvelle partie');
});

roll.addEventListener('click', () => {
  console.log('Lance le dés');
});

hold.addEventListener('click', () => {
  console.log('Conserve le score');
});