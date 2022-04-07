const generateAbout = () => {
    const about = document.createElement('div');
    const aboutTitle = document.createElement('div');
    const aboutTxt = document.createElement('div');

    about.setAttribute('id', 'about');

    aboutTitle.textContent = 'About Us';
    aboutTxt.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

    about.appendChild(aboutTitle);
    about.appendChild(aboutTxt);

    return about
}

export default generateAbout