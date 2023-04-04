// Memunculkan popup form
let popup = document.querySelector('.popup')
const cls_btn = popup.querySelector('.popup__close-btn')
const edit_btn = document.querySelector('.profile__edit-btn')

function toggleForm() {
  popup.classList.toggle('popup_opened');
}

edit_btn.addEventListener('click', toggleForm);
cls_btn.addEventListener('click', toggleForm);

// Mengaktifkan like
let like_btn = document.querySelectorAll('.photo-grid__like-btn');

function likeAct(event) {
   event.preventDefault();
   if (this.textContent === '\u2665') {
     this.textContent = '\u2661';
   } else {
     this.textContent = '\u2665';
   }
}

for (let i = 0; i < like_btn.length; i++) {
  like_btn[i].addEventListener('click', likeAct);
}

// Function input
let inputName = popup.querySelector('.popup__input_text_name')
let inputTitle = popup.querySelector('.popup__input_text_title')
let dName = document.querySelector('.profile__name')
let dTitle = document.querySelector('.profile__title')
let submitButton = document.querySelector('.popup__submit-btn')

function submitForm(event) {
  event.preventDefault();

  dName.textContent = inputName.value;
  dTitle.textContent = inputTitle.value;

  inputName.value = '';
  inputTitle.value = '';

  popup.classList.remove('popup_opened');
}

submitButton.addEventListener('click',submitForm);