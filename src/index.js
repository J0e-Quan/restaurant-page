import {renderContent as renderHome} from './home.js'
import {} from './menu.js'
import {} from './about.js'
import './styles.css'

//event listeners for tab buttons
let homeBtn = document.querySelector('#home')
let menuBtn = document.querySelector('#menu')
let aboutBtn = document.querySelector('#about')

//home page is rendered at first
renderHome()

homeBtn.addEventListener('click', () => {
    renderHome()
})

menuBtn.addEventListener('click', () => {
    //load menu page from menujs import
})

aboutBtn.addEventListener('click', () => {
    //load about page from aboutjs import
})