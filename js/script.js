'use strict';

// Select DOM Items ---------------------------------------------
const menuBtn = document.querySelector('.menu-burger-btn'),
      menu = document.querySelector('.menu-mobile');

// Set Initial State of Menu ---------------------------------------------
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');

        // Set Menu State ---------------------------------------------
        showMenu = true;
        
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');

        // Set Menu State ---------------------------------------------
        showMenu = false;  
        }
}