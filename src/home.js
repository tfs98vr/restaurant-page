const generateHome = () => {
    const home = document.createElement('div');
    home.textContent = 'I realized very early the power of food to evoke memory, to bring people together, to transport you to other places, and I wanted to be a part of that.';
    home.setAttribute('id', 'home');

    return home
}

export default generateHome