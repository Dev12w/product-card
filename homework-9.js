// 4. Форме, которая прикреплена в футере добавлина логика.

const buttonSubscribe = document.querySelector('.footer-email-btn-subscribe')
const footerEmail = document.querySelector('.footer-email-form-container')

const emailValidationRegexp = /^[^\s]+@gmail\.com$/


buttonSubscribe.addEventListener('click', (e) => {
  e.preventDefault()

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

const buttonRegistration = document.querySelector('.btn-registration')
const formRegTemplate = document.querySelector('.form-registration-content')

// 6. Сохраняем этот объект в переменную для дальнейшего использования.
let currentUser = undefined;


buttonRegistration.addEventListener('click', () => {

  const formClon = formRegTemplate.content.cloneNode(true)

  const formErrorEmailText = formClon.querySelector('.error-email')
  const registrationForm = formClon.querySelector('.form')
  const modalCloseBtn = formClon.querySelector('.modal-close-button')
  const formRegBtn = formClon.querySelector('.enter-button')
  const passwordRepeatErrorText = formClon.querySelector('.error-passwordrepeat')
  const closeModal = formClon.querySelector('.modal')


  modalCloseBtn.addEventListener('click', () => {
    closeModal.remove()
  })


  formRegBtn.addEventListener('click', (e) => {
    e.preventDefault()

    const formInputs = registrationForm.querySelectorAll('input');
    let hasError = false;

    formInputs.forEach(el => {
      el.classList.remove('error');

      if (el.hasAttribute('required') && el.value.trim() === '') {
        el.classList.add('error');
        hasError = true;
        return
      }

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

    if (formInputs.value !== '') {
      passwordRepeatErrorText.classList.add('successful-reg')
      passwordRepeatErrorText.textContent = 'Успешная регестрация'
      registrationForm.reset();
      formInputs.forEach(input => input.disabled = true)
      formRegBtn.disabled = true;
    }

  })
  document.body.appendChild(formClon)
})


// 7. Кнопку "Аутентификация"

const loginButton = document.querySelector('.btn-login')
const loginTemplate = document.querySelector('.form-login-content')

// 8. Создается модальное окно  

loginButton.addEventListener('click', (e) => {
  e.preventDefault()

  const formClon = loginTemplate.content.cloneNode(true)

  const loginForm = formClon.querySelector('.form')
  const closeModal = formClon.querySelector('.modal')
  const errorText = formClon.querySelector('.error-text')
  const enterButton = formClon.querySelector('.enter-button')
  const modalCloseBtn = formClon.querySelector('.modal-close-button')


  modalCloseBtn.addEventListener('click', () => {
    closeModal.remove()
  })

  enterButton.addEventListener('click', () => {

    const formData = new FormData(loginForm)
    const data = Object.fromEntries(formData)
    errorText.textContent = ''

    if (currentUser === undefined) {
      errorText.textContent = 'Ползователь не найден'
      return
    }

    if (currentUser.email !== data.email || currentUser.password !== currentUser.password) {
      errorText.textContent = 'Неправильный логин или пароль'
      return
    }

    // 10. Переменную "currentUser" добавлено дата и время входа.

    currentUser.lastLogin = new Date()
    console.log(currentUser)
    closeModal.remove();
  })

  document.body.appendChild(formClon)
})
