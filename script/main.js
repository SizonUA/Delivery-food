new WOW().init();

const cartButton = document.getElementById('cart-button'),
  modal = document.querySelector('.modal'),
  close = document.querySelector('.close'),
  cancel = document.getElementById('cancel');

// Function
const toggleModal = () => modal.classList.toggle('modal-open');

// Call

cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
cancel.addEventListener('click', toggleModal);
