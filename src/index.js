import {renderContent as renderHome} from './home.js'
import {renderContent as renderMenu} from './menu.js'
import {renderContent as renderAbout} from './about.js'
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
    renderMenu()
})

aboutBtn.addEventListener('click', () => {
    renderAbout()
})