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

function createBeginningsSection() {
    let beginningsCard = document.createElement('div')
    beginningsCard.classList.add('card')
    let beginningsTitle = document.createElement('h2')
    beginningsTitle.classList.add('section-title')
    beginningsTitle.textContent = 'Beginnings'
    beginningsCard.appendChild(beginningsTitle)
    contentCard.appendChild(beginningsCard)
    let beginningsContainer = document.createElement('div')
    beginningsContainer.classList.add('beginnings', 'section-container')
    let beginningsText = document.createElement('div')
    beginningsText.classList.add('beginnings-text')
    let beginningsDate = document.createElement('h3')
    beginningsDate.classList.add('section-date')
    beginningsDate.textContent = '2016'
    beginningsText.appendChild(beginningsDate)
    let beginningsDescription = document.createElement('p')
    beginningsDescription.classList.add('section-text')
    beginningsDescription.textContent = "After coming back from a 1 year expedition to Taiwan, founder Pink Bear Bear decided to continue exploring new places, and set up a new Plushie Kingdom in Alor Setar. Far away from his original home, Plushie Village in Bagan Serai, the Plushie Kingdom managed to attract many new inhabitants!"
    beginningsText.appendChild(beginningsDescription)
    beginningsContainer.appendChild(beginningsText)
    let beginningsPhoto = document.createElement('img')
    beginningsPhoto.classList.add('beginnings', 'section-photo')
    beginningsPhoto.src = alorSetar
    beginningsPhoto.alt = 'Picture showing Pink Bear Bear and his family staying at Alor Setar'
    beginningsContainer.appendChild(beginningsPhoto)
    beginningsCard.appendChild(beginningsContainer)
    contentCard.appendChild(beginningsCard)
}

export function renderContent() {
    content.innerHTML = ''
    contentCard.innerHTML = ''
    createTitleSection()
    createBeginningsSection()
    // createExpansionSection()
    // createCurrentSection()
    // createResearchSection()
    content.appendChild(contentCard)
}