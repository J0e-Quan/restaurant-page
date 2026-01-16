let content = document.querySelector('#content')
let contentCard = document.createElement('div')
contentCard.classList.add('content-card')

function createTitleSection() {
    let titleCard = document.createElement('div')
    titleCard.classList.add('title-card')
    let menuTitle = document.createElement('h1')
    menuTitle.classList.add('menu', 'title')
    menuTitle.textContent = 'Menu'
    titleCard.appendChild(menuTitle)
    let titleCardText = document.createElement('p')
    titleCardText.classList.add('title-card-text')
    titleCardText.textContent = 'We serve a wide variety of food and drinks, including Asian and Western cuisines, as well as mouth-watering desserts!'
    titleCard.appendChild(titleCardText)
    contentCard.appendChild(titleCard)
}

function createFoodCard(section, name, description, price, note) {
    let foodCard = document.createElement('div')
    foodCard.classList.add('food', 'card')
    let foodName = document.createElement('h3')
    foodName.classList.add('food', 'name')
    foodName.textContent = name
    foodCard.appendChild(foodName)
    let foodText = document.createElement('p')
    foodText.classList.add('food', 'text')
    foodText.textContent = description
    foodCard.appendChild(foodText)
    let foodPrice = document.createElement('h3')
    foodPrice.classList.add('food', 'price')
    foodPrice.textContent = 'RM ' + price
    foodCard.appendChild(foodPrice)
    if (note !== undefined) {
        let foodNote = document.createElement('h4')
        foodNote.classList.add('food', 'note')
        foodNote.textContent = 'NOTE: ' + note
        foodCard.appendChild(foodNote)
    }
    section.appendChild(foodCard)
}

function createAsianSection() {
    let asianSection = document.createElement('div')
    let asianTitle = document.createElement('h2')
    asianTitle.classList.add('menu', 'small-title')
    asianTitle.textContent = 'Asian'
    asianSection.appendChild(asianTitle)
    let asianText = document.createElement('p')
    asianText.classList.add('menu', 'text')
    asianText.textContent = 'Enjoy unique and expertly crafted dishes, rich with flavours close to home!'
    asianSection.appendChild(asianText)
    createFoodCard(asianSection, 'Chicken Rice', 'A Hainanese classic, served with spicy local chili and braised vegetables.', '12', 'Chili is served separately, boneless chicken option available upon request')
    contentCard.appendChild(asianSection)
}

export function renderContent() {
    content.innerHTML = ''
    contentCard.innerHTML = ''
    createTitleSection()
    createAsianSection()
    // createWesternSection()
    // createDrinksSection()
    // createDessertSection()
    content.appendChild(contentCard)
}