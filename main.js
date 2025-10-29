//Изминение цвета фона всех карточек

const allProductCards = document.querySelectorAll('.card-container');
const setBackgroundAllCardsButton = document.querySelector('#bg-cards-btn');
const colorLavenderMist = '#f1f1fcff';


setBackgroundAllCardsButton.addEventListener('click', () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = colorLavenderMist;
  });
});

//Изминение цвета первой карточки из списка

const firstProductCard = document.querySelector('.card-container');
const setBackgroundFirstCardButton = document.querySelector('#bg-first-card-btn');
const colorLavenderBlue = '#e0e0fdff';

setBackgroundFirstCardButton.addEventListener('click', () => {
  firstProductCard.style.backgroundColor = colorLavenderBlue;
});

//Открыть страницу Google.com

const openGooglePageButton = document.querySelector('#open-google');
const googleURL = 'http://google.com';

openGooglePageButton.addEventListener('click', openGoogle);

function openGoogle() {
  const requestMessage = confirm('Вы действительно хотите перейти на Google.com?');

  if (requestMessage === true) {
    window.open(googleURL);
  }
}

//Вывод в консоль зоголовк h1 при наведение

const headerElement = document.querySelector('.header-title');

headerElement.addEventListener('mouseover', outputConsoleLog);

function outputConsoleLog() {
  console.log(headerElement.textContent);
}

//Переключатель цвета последней кнопки

const backgroundButtonToggle = document.querySelector('#toggle-bg-btn')

backgroundButtonToggle.addEventListener('click', () => {
  backgroundButtonToggle.classList.toggle('bg-lavender-blue')
})