export class Modal {
  #isOpen = false
  constructor(modalId) {
    this.modal = document.querySelector(modalId)
    const btnClose = this.modal.querySelector('.close-button')
    btnClose.addEventListener('click', () => this.close())
  }

  open() {
    if (!this.modal.classList.contains('modal-showed')) {
      this.modal.classList.add('modal-showed')
      this.#isOpen = true
    }
  }

  close() {
    if (this.modal.classList.contains('modal-showed')) {
      this.modal.classList.remove('modal-showed')
      this.#isOpen = false
    }
  }

  isOpen() {
    return this.#isOpen
  }
}