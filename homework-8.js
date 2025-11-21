/*Домашнее задание №8:

Опираясь на данную лекцию (https://t.me/c/2614739958/5341/9306):

1. Как и в прошлых задания - создаем отдельный файл для homework-8 и подключаем его в HTML с атрибутом type = module (что бы работали импорты)

2. Создаем файл js, где будет хранится массив объектов, которые представляют собой продуктовые карточки из вёрстки. 
   Вам нужно описать полностью объект и продублировать его для всех карточек и после импортировать в homework-8 для дальнейшей работы с ним.

3. По аналогии из лекции — создать и реализовать шаблон для продуктовых карточек.

4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, 
    мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество.
    Должна быть защита от введенных других значений (имеется ввиду проверка if).

P.S - код из задания №3 переместить в функцию, не нужно его дублировать

P.S. - визуально, карточки у вас не должны поменяться вообще.
*/

import { cards } from "./product-cards.js";

const productContainer = document.querySelector(".product-container")
const cardContainer = document.querySelector(".product-template-container")

cards.forEach(product => {
  const productCard = cardContainer.content.cloneNode(true);
  productCard.querySelector(".product-card-image").src = product.image
  productCard.querySelector(".product-category").textContent = product.category
  productCard.querySelector(".product-name").textContent = product.name
  productCard.querySelector(".product-description").textContent = product.description
  productCard.querySelector(".product-compound-text").textContent = product.compoundText

  productCard.querySelector(".product-compound-list").innerHTML = product.compoundList
    .map(compound => `<li class="product-compound">${compound}</li>`)
    .join("");

  productCard.querySelector(".product-price-lable").textContent = product.lable
  productCard.querySelector(".product-price").textContent = product.price + " \u20BD"
  productContainer.appendChild(productCard)
})


// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productNamesList  = cards.reduce((acc, card) => acc === "" ? card.name : acc + "; " + card.name,"");


// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productsDescriptions = cards.reduce((acc, card) => [...acc, {[card.name]: card.description}],[])


// 6*. Реализовать функцию, которая при старте нашей страницы выводит сообщение с текстом, 
//     мол "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить это количество.
//     Должна быть защита от введенных других значений (имеется ввиду проверка if)

const messageQuestion = () => {
  prompt()
}

console.log(messageQuestion)