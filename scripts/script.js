// Variabel
const popup = document.querySelector('.popup')
const form = popup.querySelector('.popup__container')
const closeButton = popup.querySelector('.popup__close-btn')
const editButton = document.querySelector('.profile__edit-btn')
let inputName = popup.querySelector('.popup__input_text_name')
let inputTitle = popup.querySelector('.popup__input_text_title')
let dName = document.querySelector('.profile__name')
let dTitle = document.querySelector('.profile__title')

// Function popup open
function handlerPopupForm() {
  inputName.value = dName.textContent;
  inputTitle.value = dTitle.textContent;

  popup.classList.add('popup_opened');
}
// Function popup close
function handleCloseForm(event) {
  event.preventDefault();

  popup.classList.remove('popup_opened');
}

// Function input
function handleProfileFormSubmit(event) {
  event.preventDefault();

  let nameValue = inputName.value;
  let titleValue = inputTitle.value;

  dName.textContent = nameValue;
  dTitle.textContent = titleValue;

  handleCloseForm(event);
}

editButton.addEventListener('click', handlerPopupForm);
closeButton.addEventListener('click', handleCloseForm);
form.addEventListener('submit', handleProfileFormSubmit);