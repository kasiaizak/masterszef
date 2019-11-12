"use strict";

import moment from 'moment';
import browserUpdate from 'browser-update';

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

browserUpdate({
  required: {e:-2,f:-6,o:-6,s:10,c:-6},
  insecure:true,
  unsupported:true,
  reminder:0,
  reminderClosed: 1
});

const autor = 'Kasia Izak';
console.log(`Hej, nazywam się ${autor} i jestem autorką tej strony.
Fajnie, że zaglądasz do konsoli, ale czego się tu spodziewasz znaleźć? ;-)`);


const footerParagraph = document.querySelector('.footer__paragraph--js');

footerParagraph.innerHTML = `Stronę koduje: ${autor}`;

function welcome(name, age) {
/* const welcome = (name, age) => { */
  if (age < 18) {
    console.log (`Witaj ${name}, widzę że do pełnoletności jeszcze trochę brakuje, ale to nie szkodzi! :-)`)
  } else {
    console.log (`Witaj ${name}, widzę że 18 lat to masz już skończone... :-)`)
  }
}

welcome('Kasia', 36);

// hamburger menu
const navigationSwitcher = document.querySelector('.navigation__switcher--js')

navigationSwitcher.addEventListener('click', (e) => {
  const navigationList = document.querySelector('.navigation__list--js')
  navigationList.classList.toggle('navigation__list--visible');
  if (navigationList.classList.contains('navigation__list--visible')) {
    navigationSwitcher.innerHTML = 'x';
  } else {
    navigationSwitcher.innerHTML = '≡';
  }
});
