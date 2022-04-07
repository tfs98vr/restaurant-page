const generateMenu = () => {
    const menu = document.createElement('div');
    const pizza = document.createElement('div');
    const burguer = document.createElement('div');
    const vegan = document.createElement('div');
    const wine = document.createElement('div');

    menu.appendChild(pizza);
    menu.appendChild(burguer);
    menu.appendChild(vegan);
    menu.appendChild(wine);

    const pizzaImg = document.createElement('div');
    const pizzaTxt = document.createElement('div');
    const burguerImg = document.createElement('div');
    const burguerTxt = document.createElement('div');
    const veganImg = document.createElement('div');
    const veganTxt = document.createElement('div');
    const wineImg = document.createElement('div');
    const wineTxt = document.createElement('div');

    pizzaTxt.textContent = 'Pizza';
    burguerTxt.textContent = 'Hamburguer';
    veganTxt.textContent = 'Vegan';
    wineTxt.textContent = 'Wine';

    pizza.appendChild(pizzaImg);
    pizza.appendChild(pizzaTxt);
    burguer.appendChild(burguerImg);
    burguer.appendChild(burguerTxt);
    vegan.appendChild(veganImg);
    vegan.appendChild(veganTxt);
    wine.appendChild(wineImg);
    wine.appendChild(wineTxt);

    menu.setAttribute('id', 'menu');
    pizza.setAttribute('class', 'item-menu');
    burguer.setAttribute('class', 'item-menu');
    vegan.setAttribute('class', 'item-menu');
    wine.setAttribute('class', 'item-menu');

    pizzaImg.setAttribute('id', 'img-pizza');
    burguerImg.setAttribute('id', 'img-burguer');
    veganImg.setAttribute('id', 'img-vegan');
    wineImg.setAttribute('id', 'img-wine');

    return menu
}

export default generateMenu