import './homework-5.js';
import './homework-6.js';
import './homework-7.js';
import './homework-8.js';
import './homework-9.js';

// ДЗ 10
// 3. Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов

class Car {
  constructor(brand, maxSpeed) {
    this.brand = brand
    this.maxSpeed = maxSpeed
    this.isEngineOn = false
  }

  startEngine() {
    this.isEngineOn = true
    console.log(`${this.brand}: двигатель запушен`)
  }

  stopEngine() {
    this.isEngineOn = false
    console.log(`${this.brand}: двигатель остановлен`)
  }
}

class ElectricCar extends Car {
  constructor(brand, maxSpeed, battery) {
    super(brand, maxSpeed);
    this.battery = battery
  }

  chargeBattery() {
    console.log(`${this.brand}: батарея заражена на ${this.battery}%, максимальная скорость ${this.maxSpeed}кВт/ч`)
  }
}

class SportCar extends Car {
  constructor(brand, speedMax, turboBoost) {
    super(brand, speedMax);
    this.turboBoost = turboBoost
  }

  turbocharging() {
    if (!this.isEngineOn) {
      console.log('двигатель отключен!')
    }
    console.log(`${this.brand}: надув турбины ${this.turboBoost}кг, максимальная скорость ${this.maxSpeed}км/ч`)
  }
}

const tesla = new ElectricCar('Tesla', 300, 100)
const nissanGTR = new SportCar('GTR', 400, 10)

tesla.startEngine()
tesla.chargeBattery()

nissanGTR.startEngine()
nissanGTR.turbocharging()

//Изменение цвета фона всех карточек

const allProductCards = document.querySelectorAll('.card-container');
const setBackgroundAllCardsButton = document.querySelector('#bg-cards-btn');
const colorLavenderMist = '#f1f1fcff';

setBackgroundAllCardsButton.addEventListener('click', () => {
  allProductCards.forEach((card) => {
    card.style.backgroundColor = colorLavenderMist;
  });
});

//Изменение цвета первой карточки из списка

const firstProductCard = document.querySelector('.card-container');
const setBackgroundFirstCardButton = document.querySelector('#bg-first-card-btn');
const colorLavenderBlue = '#818195';

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

//Вывод в консоль заголовок h1 при наведении

const headerElement = document.querySelector('.header-title');

headerElement.addEventListener('mouseover', outputConsoleLog);

function outputConsoleLog() {
  headerElement.textContent;
}

//Переключатель цвета последней кнопки

const backgroundButtonToggle = document.querySelector('#toggle-bg-btn');

backgroundButtonToggle.addEventListener('click', () => {
  backgroundButtonToggle.classList.toggle('bg-lavender-blue');
});
