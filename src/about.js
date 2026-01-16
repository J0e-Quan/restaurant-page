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
    //Increase length of desc tc. mention discovering more friends and branching out from plushie village
    beginningsDescription.textContent = "After coming back from a 1 year expedition to Taiwan, founder Pink Bear Bear decided to continue exploring, and set up a new Plushie Kingdom in Alor Setar."
    beginningsText.appendChild(beginningsDescription)
    beginningsContainer.appendChild(beginningsText)
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