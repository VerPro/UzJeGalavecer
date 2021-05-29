'use strict';

const dateGala = daysjs('2021-06-15');
const today = daysjs();

if (today.isAfter(dateGala)) {
  document.write('Galavečer už byl, snad sis ho užila');
} else if (today === dateGala) {
  document.write('Dnes je Galavečer, doufám, že si ho užiješ!');
} else {
  document.write('Ne, Galavečer teprve bude');
}
