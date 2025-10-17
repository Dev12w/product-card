//Изминение цвета фона всех карточек

const productAllCards = document.querySelectorAll('.card-container');
const setBackgroundAllCardsButton = document.querySelector('#bg-cards-btn');
const colorAllCards = '#f1f1fcff';
const colorFirstCard = '#e0e0fdff';
const googleURL = 'http://google.com';

setBackgroundAllCardsButton.addEventListener('click', () => {
  productAllCards.forEach((card) => {
    card.style.backgroundColor = colorAllCards;
  });
});

//Изминение цвета первой карточки из списка

const firstCardList = document.querySelector('.card-container');
const setBackgroundFirstCardListButton = document.querySelector('#bg-first-card-btn');

setBackgroundFirstCardListButton.addEventListener('click', () => {
  firstCardList.style.backgroundColor = colorFirstCard;
});

//Открыть страницу Google.com

const goGooglePageButton = document.querySelector('#open-google');

goGooglePageButton.addEventListener('click', modalWindowleavePage);

function modalWindowleavePage() {
  const requestMessage = confirm('Вы действительно хотите перейти на Google.com?');

  if (requestMessage === true) {
    window.open(googleURL);
  }
}

//Вывод в консоль зоголовк h1 при наведение

const headerElement = document.querySelector('.header-title');

headerElement.addEventListener('mouseover', showHeaderInConsole);

function showHeaderInConsole() {
  console.log(headerElement.textContent);
}

//Переключатель цвета последней кнопки

const backgroundButtonToggle = document.querySelector('#toggle-bg-btn')

backgroundButtonToggle.addEventListener('click', () => {
  backgroundButtonToggle.classList.toggle('btn-bg-active')
})