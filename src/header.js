const generateHeader = () => {
    const header = document.createElement('header');
    const title = document.createElement('div');
    const list = document.createElement('ul');
    const liHome = document.createElement('li');
    const liMenu = document.createElement('li');
    const liAbout = document.createElement('li');

    header.appendChild(title);
    header.appendChild(list);

    list.appendChild(liHome);
    list.appendChild(liMenu);
    list.appendChild(liAbout);

    title.textContent = 'Generic Restaurant';
    liHome.textContent = 'Home';
    liMenu.textContent = 'Menu';
    liAbout.textContent = 'About Us';

    return {'header': header, 'title': title, 'home': liHome, 'menu': liMenu, 'about': liAbout}
}

export default generateHeader