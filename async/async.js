import { UserStore } from './user-store.js';

const userCards = document.querySelector('.user-cards');
const userCardTemplate = document.querySelector('.user-card-template');
const btnDeleteAllUsers = document.querySelector('.btn-delete-all-users');
const btnLoadAllUsers = document.querySelector('.btn-load-all-users');

const userStore = new UserStore();
loadData();

async function loadData() {
  let users = userStore.getUsers();

  if (users.length) {
    renderUsers(users);
    return;
  }

  userCards.textContent = 'Данные загружаются...';
  try {
    users = await fetchUsers();
    userStore.setUsers(users);

    setTimeout(() => renderUsers(users), 1000);
  } catch (e) {
    userCards.textContent = 'Ошибка загрузки';
  }
}

async function fetchUsers() {
  const response = await fetch('./user.json');
  const data = await response.json();
  return data.users;
}

function renderUsers(users) {
  userCards.textContent = '';
  users.forEach(user => {
    const userNode = userCardTemplate.content.cloneNode(true);
    userNode.querySelector('.user-card-name').textContent = `Имя: ${user.name}`;
    userNode.querySelector('.user-card-surname').textContent = `Фамилия: ${user.surname}`;
    userNode.querySelector('.user-card-email').textContent = `Почта: ${user.email}`;
    userNode.querySelector('.user-card-age').textContent = `Возраст: ${user.age}`;
    userNode.querySelector('.btn-user-delete').addEventListener('click', () => {
      userStore.removeById(user.id);
      renderUsers(userStore.getUsers());
    });

    userCards.appendChild(userNode);
  });
}

btnLoadAllUsers.addEventListener('click', loadData);

btnDeleteAllUsers.addEventListener('click', () => {
  userStore.removeAll();
  renderUsers(userStore.getUsers());
});