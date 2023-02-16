import throttle from 'lodash.throttle';

// Define constants for the app
const STORAGE_KEY = 'feedback-form-state';

// Get DOM elements
const formEl = document.querySelector('.feedback-form');

// Define functions
function onFormInput(e) {
  const { name, value } = e.target;
  const oldData = getData();
  setData({ ...oldData, ...{ [name]: value } });
}

function onFormSubmit(e) {
  e.preventDefault();

  // Log the form data to the console
  console.log({
    email: e.target.elements.email.value,
    message: e.target.elements.message.value,
  });

  // Clear the form and local storage
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function setData(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function getData() {
  const dataJSON = localStorage.getItem(STORAGE_KEY);

  // If data is present in local storage, parse and return it
  // Otherwise, return empty values
  return dataJSON
    ? JSON.parse(dataJSON)
    : {
        email: '',
        message: '',
      };
}

function init() {
  // Add event listeners to the form elements
  formEl.addEventListener('input', throttle(onFormInput, 500));
  formEl.addEventListener('submit', onFormSubmit);

  // Populate the form with saved data from local storage
  const { email, message } = getData();
  formEl.elements.email.value = email;
  formEl.elements.message.value = message;
}

// Call the init function to start the app
init();
