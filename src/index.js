import { loadHome } from './home-page.js';
import {loadMenu} from './menu-page.js'
import { loadContact } from './contact-us-page.js';
import "./style.css";
import buttonSoundFile from './sound.mp3';

const buttonSound = new Audio(buttonSoundFile);


function pages() {
    const button = document.querySelectorAll('.button');
    
    button.forEach(button => {
        button.addEventListener('click', (e) => {
            
            const tab = e.target.textContent;
            buttonSound.play();
            const content = document.getElementById('content');
            content.innerHTML = '';
            
            if(tab === 'Home') loadHome();
            if (tab === 'Menu') loadMenu();
            if (tab === 'Contact Us') loadContact();
        });
    });
}





loadHome();
pages();