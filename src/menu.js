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
    createFoodCard(asianSection, 'Nasi Lemak', 'Malaysian dish featuring anchovies, fragrant rice, spicy sambal paste, peanuts and cucmbers.', '8', 'Sambal is served separately')
    createFoodCard(asianSection, 'Hokkien Mee', 'Spicy noodle soup served with prawns, hard boiled egg and bean sprouts.', '10')
    createFoodCard(asianSection, 'Miso Ramen', 'Ramen noodles in rich miso soup, served with fish cake and bean sprouts.', '8', 'Teriyaki Chicken addon available for RM 5')
    createFoodCard(asianSection, 'Kare Chicken Katsu Rice', 'Rice and chicken cutlets served with Japanese curry.', '12')
    createFoodCard(asianSection, 'Banana Leaf Rice', 'Fragrant rice served on banana leaf with 4 dishes of the day', '12', 'Vegetarian option available  upon request, Biryani rice addon available for RM 2')
    contentCard.appendChild(asianSection)
}

function createWesternSection() {
    let westernSection = document.createElement('div')
    let westernTitle = document.createElement('h2')
    westernTitle.classList.add('menu', 'small-title')
    westernTitle.textContent = 'Western'
    westernSection.appendChild(westernTitle)
    let westernText = document.createElement('p')
    westernText.classList.add('menu', 'text')
    westernText.textContent = 'Savour hearty meals that will take you on a exceptional journey through the best of Western cuisine!'
    westernSection.appendChild(westernText)
    createFoodCard(westernSection, 'Chicken Chop', 'Fried boneless chicken in mushroom sauce, served with fries and salad of the day.', '12', 'Wedges addon available for RM 2')
    createFoodCard(westernSection, 'Fish & Chips', 'Fresh fried fish in tartar sauce, served with fries and salad of the day.', '14', 'Wedges addon available for RM 2')
    createFoodCard(westernSection, 'Spaghetti Bolognese', 'Spaghetti in flavourful tomato sauce with minced meat.', '10')
    createFoodCard(westernSection, 'Spaghetti Aglio Olio', 'Spaghetti seasoned with tomatoes and various spices.', '8', 'Non-spicy version available upon request')
    createFoodCard(westernSection, 'Double Cheeseburger', 'Beef and cheese slices covered with fresh burger buns.', '10', 'Chicken version available upon request')
    createFoodCard(westernSection, 'Pretty Cheesy Pizza', 'Simple but delicious 4 cheese pizza.', '8')
    createFoodCard(westernSection, 'Red, Yellow and Brown', 'Pizza with pepperoni, cheese and mushrooms.', '10')
    contentCard.appendChild(westernSection)
}

function createDessertSection() {
    let dessertSection = document.createElement('div')
    let dessertTitle = document.createElement('h2')
    dessertTitle.classList.add('menu', 'small-title')
    dessertTitle.textContent = 'Dessert'
    dessertSection.appendChild(dessertTitle)
    let dessertText = document.createElement('p')
    dessertText.classList.add('menu', 'text')
    dessertText.textContent = 'Treat your taste buds (and traumatise your pancreas) with these sweet and lovely desserts!'
    dessertSection.appendChild(dessertText)
    createFoodCard(dessertSection, 'Ice Cream', 'Choose from vanilla, chocolate and strawberry goodness, served in a cup.', '4', 'Cone addon available for RM 2')
    createFoodCard(dessertSection, 'Waffles', 'Classic fluffy treats, served with butter and fruit jam', '6')
    createFoodCard(dessertSection, 'Cendol', 'A local favourite, served with black grass jelly.', '6')
    createFoodCard(dessertSection, 'Ice Kacang', 'Shaved ice enriched with gula melaka, red beans and sweet corn.', '6')
    createFoodCard(dessertSection, 'Cheesecake', "Cake with cheese and a crumbly cookie layer at the bottom.", '6')
    createFoodCard(dessertSection, 'Carrot Cake', 'Cake with carrots, spices, cream cheese, and nuts aplenty.', '6')
    contentCard.appendChild(dessertSection)
}

function createDrinkCard(drinksList, name, hotPrice, coldPrice, note) {
    let drinkCard = document.createElement('div')
    drinkCard.classList.add('drink', 'card')
    let drinkName = document.createElement('h3')
    drinkName.classList.add('drink', 'name')
    drinkName.textContent = name
    drinkCard.appendChild(drinkName)
    let hotText = document.createElement('p')
    hotText.classList.add('hot', 'text')
    hotText.textContent = 'Hot: '
    drinkCard.appendChild(hotText)
    let hotPriceText = document.createElement('h3')
    hotPriceText.classList.add('hot', 'price')
    hotPriceText.textContent = 'RM: ' + hotPrice
    drinkCard.appendChild(hotPriceText)
    let coldText = document.createElement('p')
    coldText.classList.add('cold', 'text')
    coldText.textContent = 'Cold: '
    drinkCard.appendChild(coldText)
    let coldPriceText = document.createElement('h3')
    coldPriceText.classList.add('cold', 'price')
    coldPriceText.textContent = 'RM: ' + coldPrice
    drinkCard.appendChild(coldPriceText)
    if (note !== undefined) {
        let drinkNote = document.createElement('h4')
        drinkNote.classList.add('drink', 'note')
        drinkNote.textContent = 'NOTE: ' + note
        drinkCard.appendChild(drinkNote)
    }    
    drinksList.appendChild(drinkCard)
}

function createDrinksSection() {
    let drinksSection = document.createElement('div')
    let drinksTitle = document.createElement('h2')
    drinksTitle.classList.add('menu', 'small-title')
    drinksTitle.textContent = 'Drinks'
    drinksSection.appendChild(drinksTitle)
    let drinksText = document.createElement('p')
    drinksText.classList.add('menu', 'text')
    drinksText.textContent = 'Quench your thirst with our refreshing and mood-boosting beverages!'
    drinksSection.appendChild(drinksText)
    let drinksList = document.createElement('div')
    drinksList.classList.add('drinks-list')
    createDrinkCard(drinksList, 'Milk Tea (Teh)', '3', '4')
    createDrinkCard(drinksList, 'Local Coffee', '3', '4')
    createDrinkCard(drinksList, 'Milo', '3', '4', 'Milo Dinosaur addon available for RM 3')
    createDrinkCard(drinksList, 'Herbal Tea', '2', '3')
    createDrinkCard(drinksList, 'Soy Bean', '2', '3')
    createDrinkCard(drinksList, 'Tea (Teh O)', '2', '3', 'Limau addon available for RM 1')
    createDrinkCard(drinksList, 'Americano', '2', '3')
    createDrinkCard(drinksList, 'Latte', '5', '6', 'Oat milk addon available for RM 2')
    createDrinkCard(drinksList, 'Cappuccino', '5', '6', 'Oat milk addon available for RM 2')
    createDrinkCard(drinksList, 'Chocolate', '4', '5')
    createDrinkCard(drinksList, 'Matcha Latte', '5', '6', 'Oat milk addon available for RM 2')
    createDrinkCard(drinksList, 'Mineral Water', '1', '2', 'Sparkling water addon available for RM 2')
    drinksSection.appendChild(drinksList)
    contentCard.appendChild(drinksSection)
}

export function renderContent() {
    content.innerHTML = ''
    contentCard.innerHTML = ''
    createTitleSection()
    createAsianSection()
    createWesternSection()
    createDessertSection()
    createDrinksSection()
    content.appendChild(contentCard)
}