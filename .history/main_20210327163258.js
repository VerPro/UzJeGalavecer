'use strict';

const dateGala = daysjs('2021-06-15');
const today = daysjs();

if (today.isAfter(dateGala)) {
  document.write('<h1>Galavečer už byl, snad sis ho užila</h1>');
} else if (today === dateGala) {
  document.write('<h1>Dnes je Galavečer, doufám, že si ho užiješ!</h1>');
} else {
  document.write('<h1>Ne, Galavečer teprve bude</h1>');
}
