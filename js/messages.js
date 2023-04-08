import {onDocumentKeydown} from './form.js';

const successMessageTemplateElement = document.querySelector('#success')
  .content
  .querySelector('.success');

const errorMessageTemplateElement = document.querySelector('#error')
  .content
  .querySelector('.error');

const onCloseSuccessMessage = () => {
  const successElement = document.querySelector('.success');
  const successCloseElement = successElement.querySelector('.success__button');
  successCloseElement.removeEventListener('click',onCloseSuccessMessage);
  document.removeEventListener('keydown',onDocumentKeydown);
  successElement.remove();
};

function onClickOutOfSuccessMessage (evt) {
  if (!evt.target.closest('.success__inner')){
    onCloseSuccessMessage();
  }
}

const showSuccessMessage = () => {
  const successMessageElement = successMessageTemplateElement.cloneNode(true);
  document.body.appendChild(successMessageElement);

  const successElement = document.querySelector('.success');
  const successCloseElement = successElement.querySelector('.success__button');
  successCloseElement.addEventListener('click', onCloseSuccessMessage);
  document.addEventListener('keydown',onDocumentKeydown);
  successElement.addEventListener('click',onClickOutOfSuccessMessage);
};

const onCloseErrorMessage = () => {
  const errorElement = document.querySelector('.error');
  const errorCloseElement = errorElement.querySelector('.error__button');
  errorCloseElement.removeEventListener('click',onCloseErrorMessage);
  removeEventListener('keydown', onDocumentKeydown);
  errorElement.remove();
};

function onClickOutOfErrorMessage (evt) {
  if (!evt.target.closest('.error__inner')){
    onCloseErrorMessage();
  }
}

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplateElement.cloneNode(true);
  document.body.appendChild(errorMessage);
  const errorElement = document.querySelector('.error');
  const errorCloseElement = errorElement.querySelector('.error__button');
  errorCloseElement.addEventListener('click', onCloseErrorMessage);
  document.addEventListener('keydown',onDocumentKeydown);
  errorElement.addEventListener('click',onClickOutOfErrorMessage);
};

export {showSuccessMessage,showErrorMessage,onCloseErrorMessage as closeErrorMessage,onCloseSuccessMessage as closeSuccessMessage};
