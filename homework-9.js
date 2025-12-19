import {Form} from "./homework-10/Form.js";
import {Modal} from "./homework-10/Modal.js";

// 4. Форма, которая прикреплена в футере добавлена логика.

const buttonSubscribe = document.querySelector('.footer-email-btn-subscribe')
const footerEmail = document.querySelector('.footer-email-form-container')

buttonSubscribe.addEventListener('click', () => {
  const formData = new FormData(footerEmail)
  const data = Object.fromEntries(formData)

  if (!emailValidationRegexp.test(data.email)) {
    console.log('Некорректный email!')
    return
  }
  console.log(data)
})

// 5. Модальное окно формы регистрации.
// Поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля.
//
// 6. Сохраняем этот объект в переменную для дальнейшего использования.

const btnRegistration = document.querySelector('.btn-registration')
const regFormElement = document.querySelector('.form-reg')
const loginFormElement = document.querySelector('.form-login')
const btnLogin = document.querySelector('.btn-login')

let currentUser

const modalReg = new Modal('#modal-reg')
const modalLogin = new Modal('#modal-login')
const regForm = new Form('.form-reg')
const loginForm = new Form('.form-login')

btnRegistration.addEventListener('click', (e) => {
  e.preventDefault()
  modalReg.open()
})

regFormElement.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!regForm.isValid()) {
    return
  }

  const data = regForm.getValues()

  if (data.password !== data.passwordrepeat) {
    alert('пароли не совпадают')
    return
  }

  currentUser = {
    ...data,
    createdOn: new Date()
  }

  regForm.reset()
  modalReg.close()

  console.log(currentUser)
})

btnLogin.addEventListener('click', (e) => {
  e.preventDefault()
  modalLogin.open()
})

// форма логина

loginFormElement.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!loginForm.isValid()) {
    return
  }

  const data = loginForm.getValues()

  if (!currentUser || currentUser.email !== data.email || currentUser.password !== data.password) {
    alert('Неправильный логин или пароль')
    return
  }

  currentUser.lastLogin = new Date()

  loginForm.reset()
  modalLogin.close()
})