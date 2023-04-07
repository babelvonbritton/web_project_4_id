// Memunculkan popup form
const popup = document.querySelector('.popup')
const cls_btn = popup.querySelector('.popup__close-btn')
const edit_btn = document.querySelector('.profile__edit-btn')

function handlerPopupForm() {
  popup.classList.add('popup_opened');
}

function handleCloseForm(event) {
  event.preventDefault();

  popup.classList.remove('popup_opened')
}

edit_btn.addEventListener('click', handlerPopupForm);
cls_btn.addEventListener('click', handleCloseForm);

// Mengaktifkan like
const like_btn = document.querySelectorAll('.photo-grid__like-btn');

function handlerLikeAct(event) {
   event.preventDefault();

   if (this.textContent === '\u2665') {
     this.textContent = '\u2661';
   } else {
     this.textContent = '\u2665';
   }
}

for (let i = 0; i < like_btn.length; i++) {
  like_btn[i].addEventListener('click', handlerLikeAct);
}

// Function input
const form = popup.querySelector('.popup__container')

function handleProfileFormSubmit(event) {
  event.preventDefault();

  let inputName = popup.querySelector('.popup__input_text_name')
  let inputTitle = popup.querySelector('.popup__input_text_title')

  let nameValue = inputName.value;
  let titleValue = inputTitle.value;

  let dName = document.querySelector('.profile__name')
  let dTitle = document.querySelector('.profile__title')

  dName.textContent = nameValue;
  dTitle.textContent = titleValue;

  popup.classList.remove('popup_opened');
}

form.addEventListener('submit', handleProfileFormSubmit);