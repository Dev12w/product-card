export class Modal {
  constructor(modalId, openButtonId, shouldCloseOnOverlay, closeModalButton) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;
    this.closeModalButton = this.modal.querySelector('.modal-close-button');

    this.#initOpen(openButtonId);
  }

  #closeHandler = () => this.close()

  open() {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose();
  }

  close() {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.closeModalButton.removeEventListener('click', this.#closeHandler);
    this.overlay.removeEventListener('click', this.#closeHandler);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(openButtonId) {
    const button = document.getElementById(openButtonId);
    button.addEventListener('click', () => this.open());
  }

  #initClose() {
    this.closeModalButton.addEventListener('click', this.#closeHandler);
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.#closeHandler);
    }
  }
}