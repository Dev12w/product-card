export class UserStore {
  constructor() {
    this.users = [];
    const usersJson = localStorage.getItem('users');

    if (usersJson) {
      this.users = JSON.parse(usersJson);
    }
  }

  getUsers() {
    return this.users;
  }

  setUsers(users) {
    this.users = users;
    localStorage.setItem('users', JSON.stringify(users));
  }

  removeAll() {
    this.users = [];
    localStorage.removeItem('users');
  }

  removeById(id) {
    const users = this.users.filter(u => u.id != id);
    this.setUsers(users);
  }
}