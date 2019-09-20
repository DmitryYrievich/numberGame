
let startBoard = document.getElementById('starts');

let startButton = startBoard.querySelector('button');

let countTime = document.getElementById('count');

let beginButton = document.getElementById('again');

let board = document.getElementById('mainBoard');

let cards = document.querySelectorAll('.cards');

let activeCards = document.getElementsByClassName('active');

  window.onload = window.onresize =(event) => {
    startButton.addEventListener('click', swap);
    startButton.addEventListener('click', shuffle);
  }

  beginButton.addEventListener('click', gameAgain);  

  function gameAgain() {
    shuffle();
    t = 75;
  }
  function swap() {
    startBoard.remove();
    countTime.classList.remove('hide');
    board.classList.remove('hide');
    beginButton.classList.remove('hide');
    timer ();
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
      let ramdomPos = randomInterval(1, 25);
      card.style.order = ramdomPos;
      let randomSize = randomInterval(20, 45);
      card.style.fontSize = randomSize + 'px';
      card.style.color = getRandomColor();
      card.classList.remove('active');
    });
  };

  cards.forEach(card => card.addEventListener('click', color));

  function color() {
    if (this.id == activeCards.length + 1) {
      this.classList.add('active');
    } else if (cards.length === activeCards.length) {
      timer(false);
      countTime.innerHTML = 'Вы выиграли';
    }
  }  

  // function endGame () {
  //   if (cards.length === activeCards.length) {
  //     alert('Красаучік');
  //   } else if (cards.length > activeCards.length) {
  //     setTimeout(function() {
  //     alert('Лох');
  //   }, 30000);
  //   }
  // }   

  let t = 75;
  function timer (){
    if (t >= 0 ) {
      countTime.innerHTML = 'Времени осталось:' + t;
      t--;
      setTimeout('timer()', 1000);
    } else {
      countTime.innerHTML = 'Вы проиграли';
    }
  }

  // function endGame () {
  //   if (cards.length === activeCards.length) {
  //     function timer () {
  //      return;
  //     }
  //   }
  // }