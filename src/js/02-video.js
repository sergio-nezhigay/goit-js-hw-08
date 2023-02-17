import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// Constants
const STORAGE_KEY = 'videoplayer-current-time';

// DOM Elements
const iframe = document.querySelector('iframe');

// Functions
function onTimeUpdate({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

function getTimeFromStorage() {
  const seconds = localStorage.getItem(STORAGE_KEY);
  return seconds || 0;
}

function init() {
  // Create a new Vimeo player instance
  const player = new Player(iframe);

  // Get the current time from local storage
  const currentTime = getTimeFromStorage();

  // Set the current time of the player to the saved time
  player
    .setCurrentTime(currentTime)
    .catch(err => console.log('Error in setCurrentTime: ', err));

  // Add a throttled event listener for the timeupdate event
  player.on('timeupdate', throttle(onTimeUpdate, 1000));
}

// Initialize the player
init();
