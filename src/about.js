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