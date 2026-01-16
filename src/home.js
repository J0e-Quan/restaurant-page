import heroImg from './assets/hero-image.jpg'

export function renderContent() {
    let content = document.querySelector('#content')
    let contentCard = document.createElement('div')
    contentCard.classList.add('content-card')
    let heroCard = document.createElement('div')
    heroCard.classList.add('hero-card')
    let heroCardText = document.createElement('div')
    heroCardText.classList.add('hero-card-text')
    let title = document.createElement('h1')
    title.classList.add('title')
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
    content.appendChild(contentCard)
}