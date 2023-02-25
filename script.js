'use strict'

const button = document.querySelector('.btn')
const top = document.querySelector('.top')
const bottom = document.querySelector('.bottom')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

right.style.backgroundColor = 'black'

button.addEventListener('click', () => {
  right.style.backgroundColor = 'black'
})
