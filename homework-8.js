// 1. Cоздаем отдельный файл для homework-8 module
// 2. Создан файл product-cards c с массивом карточек

import { cards } from "./product-cards.js";

// 6*. Функция которая принимает в поле ввода от 1 до 5 и отображает карточки, с валидацией.

const productContainer = document.querySelector(".product-container")
const cardContainer = document.querySelector(".product-template-container")
const textContentError = document.querySelector(".textContentError")
const input = document.querySelector(".product-cards-input")

input.addEventListener('change', () => {

  productContainer.innerHTML = ''
  textContentError.textContent = ''

  if (isNaN(input.value)) {
    textContentError.textContent = 'Введите число!'
    input.value = ''
  }
  if (input.value > cards.length) {
    textContentError.textContent = 'Введите число от 1 до 5'
    input.value = ''
  }


  const selectedCards = cards.slice(0, input.value)
  input.value = ''

  //3. Шаблон для продуктовых карточек.

  selectedCards.forEach(product => {
    const productCard = cardContainer.content.cloneNode(true)
    productCard.querySelector(".product-card-image").src = product.image
    productCard.querySelector(".product-category").textContent = product.category
    productCard.querySelector(".product-name").textContent = product.name
    productCard.querySelector(".product-description").textContent = product.description
    productCard.querySelector(".product-compound-text").textContent = product.compoundText

    productCard.querySelector(".product-compound-list").innerHTML = product.compoundList
      .map(compound => `<li class="product-compound">${compound}</li>`)
      .join("")

    productCard.querySelector(".product-price-lable").textContent = product.lable
    productCard.querySelector(".product-price").textContent = product.price + " \u20BD"
    productContainer.appendChild(productCard)
  })
})


// 4. Используя метод .reduce(), получить строку, которая состоит из названий продуктовых карточек, разделенных точкой с запятой

const productNamesList = cards.reduce((acc, card) => acc === "" ? card.name : acc + "; " + card.name, "")


// 5. Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const productsDescriptions = cards.reduce((acc, card) => [...acc, { [card.name]: card.description }], [])