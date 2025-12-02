// 4. Форме, которая прикреплена в футере добавлина логика.

const buttonSubscribe = document.querySelector('.footer-email-btn-subscribe')
const footerEmail = document.querySelector('.footer-email-form-container')
const emailValidationRegexp = /^[^\s]+@gmail\.com$/

buttonSubscribe.addEventListener('click', (e) => {

  const formData = new FormData(footerEmail)
  const data = Object.fromEntries(formData)


  if (!emailValidationRegexp.test(data.email)) {
    console.log('Некорректный email!')
    return
  }
  console.log(data)
})

// 5.Модальное окно формы регестрации. 
// поля: имя, фамилия, дата рождения, логин, пароль, повторение пароля. 

// 6. Сохраняем этот объект в переменную для дальнейшего использования.
const modalReg = document.querySelector('.modal-reg')
const btnRegistration = document.querySelector('.btn-registration')
let currentUser = undefined;

btnRegistration.addEventListener('click', () => {
  modalReg.classList.add('modal-showed')
})

const modalRegCloseBtn = document.querySelector('.modal-reg-close-button')

modalRegCloseBtn.addEventListener('click', () => {
  modalReg.classList.remove('modal-showed')
})

const registrationForm = document.querySelector('.form-reg')
const formRegBtn = document.querySelector('.reg-enter-button')

formRegBtn.addEventListener('click', () => {
  const formInputs = registrationForm.querySelectorAll('input');
  let hasError = false;

  formInputs.forEach(el => {
    el.classList.remove('error');

    if (el.hasAttribute('required') && el.value.trim() === '') {
      el.classList.add('error');
      hasError = true;
      return
    }
    const formErrorEmailText = document.querySelector('.error-email')

    if (el.type == "email") {
      formErrorEmailText.textContent = '';
      if (!emailValidationRegexp.test(el.value)) {
        el.classList.add('error')
        formErrorEmailText.textContent = 'Некоректный email'
        hasError = true;
      }
    }
  })

  const formData = new FormData(registrationForm)
  const data = Object.fromEntries(formData)

  const passwordRepeatErrorText = document.querySelector('.error-passwordrepeat')
  const passwordRepeat = document.querySelector('#form-input-passwordrepeat');

  if (data.password !== data.passwordrepeat) {
    passwordRepeat.classList.add('error')
    passwordRepeatErrorText.textContent = 'Пароли не совпадают'
    hasError = true;
  } else {
    passwordRepeat.classList.remove('error')
    passwordRepeatErrorText.textContent = ''
  }

  if (hasError) {
    return;
  }

  currentUser = {
    email: data.email,
    password: data.password,
    firstname: data.firstname,
    surname: data.surname,
    birthday: data.birthday,
  };

  currentUser.createdOn = new Date()

  passwordRepeatErrorText.classList.add('successful-reg')
  passwordRepeatErrorText.textContent = 'Успешная регистрация'
  registrationForm.reset();
  formInputs.forEach(input => input.disabled = true)
  formRegBtn.disabled = true;
})

// 7. Кнопку "Аутентификация"
// 8. Создается модальное окно  
const loginButton = document.querySelector('.btn-login')
const modalLogin = document.querySelector('.modal-login')

loginButton.addEventListener('click', () => {
  modalLogin.classList.add('modal-showed')
})

const modalLoginCloseBtn = document.querySelector('.modal-login-close-button')

modalLoginCloseBtn.addEventListener('click', () => {
  modalLogin.classList.remove('modal-showed')
})


const loginEnterBtn = document.querySelector('.login-enter-button')

loginEnterBtn.addEventListener('click', () => {
  const loginForm = document.querySelector('.form-login')
  const errorText = document.querySelector('.login-error-text')

  const formData = new FormData(loginForm)
  const data = Object.fromEntries(formData)

  errorText.textContent = ''

  if (!currentUser || currentUser.email !== data.email || currentUser.password !== data.password) {
    errorText.textContent = 'Неправильный логин или пароль'
    return
  }

  // 10. Переменную "currentUser" добавлено дата и время входа.

  currentUser.lastLogin = new Date()
  modalLogin.remove();
})