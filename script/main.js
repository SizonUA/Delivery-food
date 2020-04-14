new WOW().init();

const body = document.querySelector('body'),
  modal = document.querySelector('.modal'),
  cartButton = document.getElementById('cart-button'),
  close = document.querySelector('.close'),
  cancel = document.getElementById('cancel');

// Function
const toggleModal = () => {
  modal.classList.toggle('modal-open');
  body.classList.toggle('body-hidden');
};

// Call
cartButton.addEventListener('click', toggleModal);
close.addEventListener('click', toggleModal);
cancel.addEventListener('click', toggleModal);
