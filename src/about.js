import alorSetar from './assets/alor-setar.jpg'
import penangOld from './assets/penang-old.jpg'
import current from './assets/current.jpg'
import coffee from './assets/coffee.jpg'
import hotel from './assets/hotel.jpg'
import matcha from './assets/matcha.jpg'
import western from './assets/western.jpg'
import inFlightMeals from './assets/in-flight-meals.jpg'

let content = document.querySelector('#content')
let contentCard = document.createElement('div')
contentCard.classList.add('content-card')

function createTitleSection() {
    let titleCard = document.createElement('div')
    titleCard.classList.add('title-card')
    let aboutTitle = document.createElement('h1')
    aboutTitle.classList.add('about', 'title')
    aboutTitle.textContent = 'About Us'
    titleCard.appendChild(aboutTitle)
    let titleCardText = document.createElement('p')
    titleCardText.classList.add('title-card-text')
    titleCardText.textContent = "This is the story of how our restaurant came to be, how we got where we are today, and where we'll be going next."
    titleCard.appendChild(titleCardText)
    contentCard.appendChild(titleCard)
}

function createAboutPeriod(name, title) {
    //prepare period placeholder element names
    let cardElement = name + 'Card'
    let titleElement = name + 'Title'

    //create period
    cardElement = document.createElement('div')
    cardElement.classList.add(name, 'about', 'card')
    titleElement = document.createElement('h2')
    titleElement.classList.add('section-title')
    titleElement.textContent = title
    cardElement.appendChild(titleElement)
    contentCard.appendChild(cardElement)
}

function createAboutCard(cardName, order, name, date, description, src, alt) {
    //prepare card placeholder element names
    let cardElement = contentCard.querySelector('.' + cardName + '.card')
    let containerElement = name + 'Container'
    let textElement = name + 'Text'
    let dateElement = name + 'Date'
    let descriptionElement = name + 'Description'
    let photoElement = name + 'Photo'

    //create card
    containerElement = document.createElement('div')
    containerElement.classList.add('section-container')
    textElement = document.createElement('div')
    textElement.classList.add('text-container')
    dateElement = document.createElement('h3')
    dateElement.classList.add('section-date')
    dateElement.textContent = date
    textElement.appendChild(dateElement)
    descriptionElement = document.createElement('p')
    descriptionElement.classList.add('section-text')
    descriptionElement.textContent = description
    textElement.appendChild(descriptionElement)
    photoElement = document.createElement('img')
    photoElement.classList.add('section-photo')
    photoElement.src = src
    photoElement.alt = alt

    //order: tp = text then photo, pt = photo then text
    if (order === 'tp') {
        containerElement.appendChild(textElement)
        containerElement.appendChild(photoElement)
    } else if (order === 'pt') {
        containerElement.appendChild(photoElement)
        containerElement.appendChild(textElement)
    }
    cardElement.appendChild(containerElement)
}

function createBeginningsSection() {
    createAboutPeriod('beginnings', 'Beginnings')
    createAboutCard('beginnings', 
                    'tp', 
                    'beginnings', 
                    '2016', 
                    "After coming back from a 1 year expedition to Taiwan, founder Pink Bear Bear decided to continue exploring new places, and set up a new Plushie Kingdom in Alor Setar. Far away from his original home, Plushie Village in Bagan Serai, the Plushie Kingdom managed to attract many new inhabitants!", 
                    alorSetar, 
                    'Picture showing Pink Bear Bear and his family staying at Alor Setar')
    createAboutCard('beginnings',
                    'pt',
                    'inFlight',
                    '2017 - 2019',
                    "Pink Bear Bear was a frequent traveller who would go on to visit many countries. It was during these trips, where he discovered the joy of sharing good food and drinks with friends and family. The first Plush Munch would open in the Plushie Kingdom in Alor Setar in 2018. Pink Bear Bear would continue to add new menu items and meet many more new friends!",
                    inFlightMeals,
                    'Picture showing Pink Bear Bear looking at a in-flight meals menu'
                    )
}

function createRelocationSection() {
    createAboutPeriod('relocation', 'Relocation')
    createAboutCard('relocation', 
                    'tp', 
                    'relocation', 
                    '2020 - 2021',
                    "During a brief period of loosened lockdown regulations, the Plushie Kingdom was relocated to Penang. Plush Munch continued to operate during the pandemic in their shiny new castle! Despite the continuous success, Pink Bear Bear never stopped improving Plush Munch, and set his eyes toward a major new expansion...",
                    penangOld,
                    'Picture showing Pink Bear Bear with his friends and family at the relocated Plushie Kingdom in Penang')
}

function createImprovementCard(improvementCard, name, src, alt, description) {
    //prepare placeholder element names
    let improvementList = improvementCard.querySelector('.improvement-list')
    let cardElement = name + 'Card'
    let photoElement = name + 'Photo'
    let descriptionElement = name + 'Description'

    //create card
    cardElement = document.createElement('div')
    cardElement.classList.add('improvement', 'item')
    photoElement = document.createElement('img')
    photoElement.classList.add('improvement-photo')
    photoElement.src = src
    photoElement.alt = alt
    cardElement.appendChild(photoElement)
    descriptionElement = document.createElement('p')
    descriptionElement.classList.add('improvement-text', 'item')
    descriptionElement.textContent = description
    cardElement.appendChild(descriptionElement)

    improvementList.appendChild(cardElement)
}

function createImprovementSection() {
    let improvementCard = document.createElement('div')
    improvementCard.classList.add('improvement', 'about', 'card')
    let improvementTitle = document.createElement('h2')
    improvementTitle.classList.add('section-title')
    improvementTitle.textContent = 'Improvement'
    improvementCard.appendChild(improvementTitle)
    let improvementCardText = document.createElement('p')
    improvementCardText.classList.add('improvement-text')
    improvementCardText.textContent = "Pink Bear Bear had an ambitious plan - to combine Plushie Kingdom and Plushie Village in a new location, with a big new Plush Munch restaurant! He wasn't satisfied with serving all those new customers with his current menu though, so he and his friends set out to spice up their menu with some incredible new items..."
    improvementCard.appendChild(improvementCardText)
    let improvementList = document.createElement('div')
    improvementList.classList.add('improvement-list')
    improvementCard.appendChild(improvementList)
    createImprovementCard(improvementCard, 'coffee', coffee, 'Picture showing bearista researching coffee blends', "They searched for the finest coffee blends and beans...")
    createImprovementCard(improvementCard, 'western', western, 'Picture showing Pink Bear Bear and friends dining at a western restaurant', "They gained more experience in cooking quality Western food...")
    createImprovementCard(improvementCard, 'hotel', hotel, 'Picture showing Pink Bear Bear and friends examining a hotel in-room dining menu', "They ensured their food matched even the finest hotels...")
    createImprovementCard(improvementCard, 'matcha', matcha, 'Picture showing Pink Bear Bear looking at a matcha latte', "They also learned to make a larger variety of refreshing drinks...")
    contentCard.appendChild(improvementCard)
}

export function renderContent() {
    content.innerHTML = ''
    contentCard.innerHTML = ''
    createTitleSection()
    createBeginningsSection()
    createRelocationSection()
    createImprovementSection()
    // createExpansionSection()
    content.appendChild(contentCard)
}