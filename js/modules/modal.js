export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);

    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  toggleModal() {
    this.containerModal.classList.toggle('active');
  }

  eventToggleModal(event) {
    event.preventDefault();
    this.toggleModal();
  }

  clickOutsideModal(event) {
    if (event.target === this.containerModal) {
      this.toggleModal();
    }
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToggleModal);
    this.closeButton.addEventListener('click', this.eventToggleModal);
    this.containerModal.addEventListener('click', this.clickOutsideModal);
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents();
    }
    
    return this;
  }
}
