export class Modal {
  constructor(modalId) {
    this.modal = document.querySelector(modalId)
    const btnClose = this.modal.querySelector('.close-button')
    btnClose.addEventListener('click', () => this.close())
  }

  open() {
    this.modal.classList.add('modal-showed')
  }

  close() {
    this.modal.classList.remove('modal-showed')
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed')
  }
}