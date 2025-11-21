/*
  2) Функция принимает город и температуру,
     и возвращает строку: "Сейчас в город, температура"
*/

const getWeatherInfo = (city, temperature) => {
  return `Сейчас в ${city} ${temperature}\u00B0C`;
};

getWeatherInfo('Марокко', 24);

/*
  3) Функция принимает значение скорости и
     сравнивает его со скоростью звука 343 м/с
 */

const SPEED_SOUND = 343;

const checkSpeed = (speed) => {
  return speed > SPEED_SOUND 
    ? 'Сверхзвуковая скорость' 
    : 'Дозвуковая скорость';
};

checkSpeed(350);

/*
  4)Функция принимает текущий бюджет пользователя и проверяет,
    хватает ли денег на покупку товара.
*/

const product = 'Наушники';
const price = 100;

const getPurchaseInfo = (budget) => {
  return budget >= price 
    ? `${product} приобретены. Спасибо за покупку!` 
    : `Вам не хватает ${price - budget}\u0024, пополните баланс`;
};

getPurchaseInfo(90);

/*
  5)Функция выводит в консоль информацию о человеке,
    используя три переменные: имя, возраст и город
*/

const name = 'Зейд';
const age = '30';
const city = 'Дубай';

const showUserInfo = () => {
  return `Меня зовут ${name}, мне ${age} лет, живу в городе ${city}`;
};

showUserInfo();
