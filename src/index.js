import { loadHome } from './home-page.js';
import {loadMenu} from './menu-page.js'
import { loadContact } from './contact-us-page.js';
import "./style.css";



function pages() {
    const button = document.querySelectorAll('.button');
    
    button.forEach(button => {
        button.addEventListener('click', (e) => {
            
            const tab = e.target.textContent;
            
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