let content = document.querySelector('#content')
let contentCard = document.createElement('div')
contentCard.classList.add('content-card')



export function renderContent() {
    content.innerHTML = ''
    contentCard.innerHTML = ''
    createTitleSection()
    createBeginningsSection()
    createExpansionSection()
    createCurrentSection()
    createResearchSection()
    content.appendChild(contentCard)
}