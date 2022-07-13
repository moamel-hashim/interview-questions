const button = document.querySelector('.button');
const xmark = document.querySelector('.xmark');
const okButton = document.querySelector('.modal-button');
button.addEventListener('click', buttonHandler);
xmark.addEventListener('click', xmarkHandler);
okButton.addEventListener('click', okButtonHandler);

function buttonHandler(event) {
  let selectedNumber = 0;
  if (!event.target.matches('button')) {
    return;
  }
  if (event.target.matches('button')) {
    const $h3 = document.querySelector('.random-number');
    const intervalID = setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10000);
      $h3.textContent = `Your Number: ${randomNumber}`;
      selectedNumber = randomNumber;
    }, 100);
    setTimeout(() => {
      clearInterval(intervalID);
    }, 2000);
    setTimeout(() => {
      if (selectedNumber > 0 && selectedNumber <= 1000) {
        const $overlay = document.querySelector('.overlay');
        $overlay.classList.remove('hidden');
        const $modal = document.querySelector('.modal-container');
        $modal.classList.remove('hidden');
        const $p = document.querySelector('.lottery-win-lose');
        $p.textContent = 'Congrats!! We have a winner!!';
      } else {
        const $overlay = document.querySelector('.overlay');
        $overlay.classList.remove('hidden');
        const $modal = document.querySelector('.modal-container');
        $modal.classList.remove('hidden');
        const $p = document.querySelector('.lottery-win-lose');
        $p.textContent = 'Too Bad! You\'ve lost!';
      }
    }, 3000);
  }
}

function xmarkHandler(event) {
  if (!event.target.matches('.xmark')) {
    return;
  }
  if (event.target.matches('.xmark')) {
    const $overlay = document.querySelector('.overlay');
    $overlay.classList.add('hidden');
    const $modal = document.querySelector('.modal-container');
    $modal.classList.add('hidden');
  }
}

function okButtonHandler(event) {
  if (!event.target.matches('.modal-button')) {
    return;
  }
  if (event.target.matches('.modal-button')) {
    const $overlay = document.querySelector('.overlay');
    $overlay.classList.add('hidden');
    const $modal = document.querySelector('.modal-container');
    $modal.classList.add('hidden');
  }
}
