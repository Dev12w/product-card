export class Modal {
  constructor(modalId, openButtonId, shouldCloseOnOverlay) {
    this.modal = document.getElementById(modalId);
    this.overlay = document.getElementById('overlay');
    this.shouldCloseOnOverlay = shouldCloseOnOverlay;

    this.#initOpen(openButtonId);
    this.modal.querySelector('.modal-close-button').addEventListener('click', this.close);
  }

  open = () => {
    this.modal.classList.add('modal-showed');
    this.overlay.classList.add('overlay-showed');
    this.#initClose();
  }

  close = () => {
    this.modal.classList.remove('modal-showed');
    this.overlay.classList.remove('overlay-showed');
    this.overlay.removeEventListener('click', this.close);
  }

  isOpen() {
    return this.modal.classList.contains('modal-showed');
  }

  #initOpen(openButtonId) {
    const button = document.getElementById(openButtonId);
    button.addEventListener('click', this.open);
  }

  #initClose() {
    if (this.shouldCloseOnOverlay) {
      this.overlay.addEventListener('click', this.close);
    }
  }
}