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
  const submittedData = {};
  const formData = new FormData(formEl);
  // Collect and then log the form data to the console
  for (const [name, value] of formData) {
    submittedData[name] = value;
  }
  console.log(submittedData);

  // Clear the form and local storage
  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function setData(dataObj) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));
}

function getData() {
  // If form data is present in local storage, parse and return it
  // Otherwise, return empty object
  const dataJSON = localStorage.getItem(STORAGE_KEY) || '{}';

  try {
    return JSON.parse(dataJSON);
  } catch (e) {
    console.log('error: ', e);
    return {};
  }
}

function initListeners() {
  // Add event listeners to the form elements
  formEl.addEventListener('input', throttle(onFormInput, 500));
  formEl.addEventListener('submit', onFormSubmit);
}

function init() {
  initListeners();

  // Populate the form with saved data from local storage
  const savedFormData = getData();
  Object.entries(savedFormData).forEach(([key, value]) => {
    if (formEl.elements[key]) {
      formEl.elements[key].value = value;
    }
  });
}

// Call the init function to start the app
init();
