import generateHeader from './header'
import generateHome from './home'
import generateMenu from './menu'
import generateAbout from './about'

const content = document.getElementById('content');
const divHeader = generateHeader();
const home = generateHome();
const menu = generateMenu();
const about = generateAbout();

content.appendChild(divHeader.header);
content.appendChild(home);
content.appendChild(menu);
content.appendChild(about);

//default display//
menu.style.display = 'none';
about.style.display = 'none';

divHeader.home.addEventListener('click', function() {
    menu.style.display = 'none';
    about.style.display = 'none';
    home.style.display = 'flex';
})

divHeader.menu.addEventListener('click', function() {
    home.style.display = 'none';
    about.style.display = 'none';
    menu.style.display = 'grid'
})

divHeader.about.addEventListener('click', function() {
    home.style.display = 'none';
    menu.style.display = 'none';
    about.style.display = 'flex';
})

