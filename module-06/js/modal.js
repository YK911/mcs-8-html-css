const modal = document.querySelector('[data-modal]');
const modalOpenBtn = document.querySelector('[data-modal-open]');
const modalCloseBtn = document.querySelector('[data-modal-close]');

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);

function toggleModal() {
  modal.classList.toggle('is-open');
}

// const feedbackFormEl = document.forms.feedback;

// feedbackFormEl.addEventListener('submit', event => {
//   event.preventDefault();

//   const data = new FormData(event.currentTarget);

//   for (const [key, value] of data) {
//     console.log(key);
//     console.log(value);
//   }
// });

// const rangeEl = document.querySelector('input[type="range"]');
// const rangeValueEl = document.querySelector('.volume-value');

// rangeValueEl.textContent = rangeEl.value;

// rangeEl.addEventListener('input', event => {
//   rangeValueEl.textContent = event.target.value;
// });
