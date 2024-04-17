import isEmail from "validator/lib/isEmail";


const show_error_message = 'show-error-message';

const form = document.querySelector('.form') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('email') as HTMLInputElement;
const password = document.querySelector('.password') as HTMLInputElement;
const confirmPassword = document.querySelector('.password2') as HTMLInputElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault();
  checkEmptyValues(username, email, password, confirmPassword);
  checkEmail(email);
  checkPasswords(password, confirmPassword);
});

function hideErrorMessage(form: HTMLFormElement): void {
  form
    .querySelectorAll('.' + show_error_message)
    .forEach((item) => item.classList.remove(show_error_message));
}

function showErrorMessage(input: HTMLInputElement, message: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = message;
  formFields.classList.add(show_error_message);
}

function checkEmptyValues(...args: HTMLInputElement[]): void {
  args.forEach((item) => {
    if (!item.value) showErrorMessage(item, 'Field cant be empty!');
  });
}

function checkEmail(email: HTMLInputElement): void {
  if (!isEmail(email.value)) showErrorMessage(email, 'Email is invalid!');
}

function checkPasswords(password: HTMLInputElement, confirmPassword: HTMLInputElement){
  if (password.value !== confirmPassword.value)
    showErrorMessage(password, 'Passwords is not equal!');
}

showErrorMessage(username, 'Ok');
hideErrorMessage(form);
