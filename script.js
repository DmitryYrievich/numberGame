
const startBoard = document.getElementById('starts');

const startButton = startBoard.querySelector('button');

const countTime = document.getElementById('count');

const beginButton = document.getElementById('again');

const board = document.getElementById('mainBoard');

const cards = document.querySelectorAll('.cards');

const activeCards = document.getElementsByClassName('active');

  window.onload =(event) => {
    startButton.addEventListener('click', swap);
    startButton.addEventListener('click', shuffle);
  }

  beginButton.addEventListener('click', gameAgain);  

  function gameAgain() {
    shuffle();
    countTime.innerHTML = 75;
    cards.forEach(card => card.addEventListener('click', color));
    swap();
    clearTimeout(stopTimer);
    endGame();
  }

  function swap() {
    startBoard.remove();
    document.getElementById('count').classList.remove('hide');
    board.classList.remove('hide');
    beginButton.classList.remove('hide');
    timer();
    endGame();
  }

  function randomInterval(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
  function getRandomColor() {
    return 'rgb(' + randomInterval(0, 255) + ',' + 
    randomInterval(0, 255) + ',' + randomInterval(0, 255) + ')';
  }

  function shuffle() {
    cards.forEach(card => {
      const ramdomPos = randomInterval(1, 25);
      card.style.order = ramdomPos;
      const randomSize = randomInterval(20, 45);
      card.style.fontSize = randomSize + 'px';
      card.style.color = getRandomColor();
      card.classList.remove('active');
    });
  };

  cards.forEach(card => card.addEventListener('click', color));

  function color() {
    if (this.id == activeCards.length + 1) {
      this.classList.add('active');
    } 
  };


  function endGame () {
    return setInterval (function() {
      if (activeCards.length === cards.length) {
        countTime.innerHTML = 'Вы выиграли';
      } 
    }, 1000)    
  };

  let stopTimer;

  function timer() {
    return stopTimer = setInterval (function() {
      if (countTime.innerHTML > 0) {
        countTime.innerHTML--;
      } else if (countTime.innerHTML === 'Вы выиграли') {
        countTime.innerHTML = 'Вы выиграли';
      } 
      else {
        countTime.innerHTML = 'Вы проиграли';
        cards.forEach(card => card.removeEventListener('click', color, false));
      }
    }, 1000)
    clearInterval();
  };

