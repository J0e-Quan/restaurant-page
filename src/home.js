import heroImg from './assets/hero-image.jpg'

let content = document.querySelector('#content')
let contentCard = document.createElement('div')
contentCard.classList.add('content-card')

function createHeroSection() {
    let heroCard = document.createElement('div')
    heroCard.classList.add('hero-card')
    let heroCardText = document.createElement('div')
    heroCardText.classList.add('hero-card-text')
    let title = document.createElement('h1')
    title.classList.add('restaurant-name')
    title.textContent = 'Plush Munch'
    heroCardText.appendChild(title)
    let location = document.createElement('h4')
    location.classList.add('location')
    location.textContent = '@ Plushie Kingdom'
    heroCardText.appendChild(location)
    heroCard.appendChild(heroCardText)
    let tagline = document.createElement('p')
    tagline.classList.add('tagline')
    tagline.textContent = "The cuddliest and cutest restaurant in town! With delicious food, refeshing drinks, and a lovely atmosphere, this is one food spot you won't want to miss!"
    heroCardText.appendChild(tagline)
    let heroPhoto = document.createElement('img')
    heroPhoto.classList.add('hero-photo')
    heroPhoto.src = heroImg
    heroPhoto.alt = 'A picture showing the front of the fictional restaurant, with various plushies residing in it'
    heroCard.appendChild(heroPhoto)
    contentCard.appendChild(heroCard)
}

function createDetailsSection() {
    let detailCard = document.createElement('div')
    detailCard.classList.add('detail', 'card')
    let hourCard = document.createElement('div')
    hourCard.classList.add('hour', 'card')
    let hourTitle = document.createElement('h2')
    hourTitle.classList.add('hour-title')
    hourTitle.textContent = 'Opening Hours:'
    hourCard.appendChild(hourTitle)
    let hourText = document.createElement('p')
    hourText.classList.add('hour-text')
    hourText.textContent = 'We are open everyday from 10am - 10pm! \n(Closed on public holidays - we have lives too!)'
    hourCard.appendChild(hourText)
    detailCard.appendChild(hourCard)
    let locationCard = document.createElement('div')
    locationCard.classList.add('location', 'card')
    let locationTitle = document.createElement('h2')
    locationTitle.classList.add('location-title')
    locationTitle.textContent = 'Our Address:'
    locationCard.appendChild(locationTitle)    
    let locationText = document.createElement('p')
    locationText.classList.add('location-text')
    locationText.textContent =
    `123-66, Some random apartment,
    Really Cool Street, Big Town,
    12345 Popular District,
    Lovely State, Malaysia`
    locationCard.appendChild(locationText)
    detailCard.appendChild(locationCard)
    contentCard.appendChild(detailCard)
}


export function renderContent() {
    content.innerHTML = ''
    contentCard.innerHTML = ''
    window.scrollTo(0,0)
    createHeroSection()
    createDetailsSection()
    content.appendChild(contentCard)
}