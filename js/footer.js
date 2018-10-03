'use strict';

// Select DOM Items ---------------------------------------------
const list = document.querySelector('.module-list');
const btn = list.querySelectorAll(':scope .module-btn');

for (let i=0; i<btn.length; i++) {
    btn[i].addEventListener('click', function() {
        const button = this; //kliknięty guzik

        // Select DOM Items inside module ---------------------------------------------
        const module = button.parentElement.parentElement,
              moduleBar = button.parentElement,
              moduleContent = moduleBar.nextElementSibling;

        // Hide module ---------------------------------------------
        if (parseInt(module.dataset.show, 10) === 1) {
            moduleContent.classList.remove('show');
            module.dataset.show = 0;
            
        // Show module ---------------------------------------------
        } else {
            moduleContent.classList.add('show');
            module.dataset.show = 1;
        }
    });
}