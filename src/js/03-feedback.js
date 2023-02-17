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
  const {
    email: { value: email },
    message: { value: message },
  } = e.target.elements;
  // Log the form data to the console
  console.log({
    email,
    message,
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

  // If form data is present in local storage, parse and return it
  // Otherwise, return empty values
  if (dataJSON) {
    try {
      return JSON.parse(dataJSON);
    } catch (e) {
      console.log('error: ', e);
      return [];
    }
  } else return [];
}

function initListeners() {
  // Add event listeners to the form elements
  formEl.addEventListener('input', throttle(onFormInput, 500));
  formEl.addEventListener('submit', onFormSubmit);
}

function init() {
  initListeners();

  // Populate the form with saved data from local storage
  const savedformObject = getData();
  for (const [key, value] of Object.entries(savedformObject)) {
    formEl.elements[key].value = value;
  }
}

// Call the init function to start the app
init();
