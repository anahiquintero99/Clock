const hourWrapper = document.querySelector('.hour');
const minuteWrapper = document.querySelector('.minute');
const secondWrapper = document.querySelector('.second');
const clock = document.querySelector('.clock');
const SECOND = 1000;

/**
 * Return a 2-digit number
 *
 * @param {Number} number - The number to be formatted.
 */
function formatTwoDigits(number) {
  return number < 10 ? `0${number}` : number;
}

/**
 * Get current time and update DOM.
 */
function getTime() {
  const now = new Date();
  const hour = formatTwoDigits(now.getHours());
  const minute = formatTwoDigits(now.getMinutes());
  const second = formatTwoDigits(now.getSeconds());

  //clock.textContent = `${hour} : ${minute} : ${second}`;
  hourWrapper.textContent = hour;
  minuteWrapper.textContent = minute;
  secondWrapper.textContent = second;

}

setInterval(getTime, SECOND)
