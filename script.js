const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')
const left1 = document.querySelector('.left')
const right1 = document.querySelector('.right')
const front1 = document.querySelector('.front')
const behind1 = document.querySelector('.behind')
const container = document.querySelector('.container')

let i = 90
let j = 0

document.addEventListener('keydown', (e) => {
  console.log(e.code)

  if (e.code === 'ArrowUp') {
    top1.style.cssText = `
          transform:  rotateX(${(i += 10)}deg)   translateZ(100px); `
    bottom1.style.cssText = `
          transform:  rotateX(${i + 180}deg)   translateZ(100px);`
    right1.style.cssText = `
          transform: rotateY(90deg) rotate(${i}deg)   translateZ(100px);`
    left1.style.cssText = `
          transform: rotateY(270deg) rotate(${-i}deg)   translateZ(100px);`
    front1.style.cssText = `
          transform:  rotateX(${i + 90}deg)   translateZ(100px);`
    behind1.style.cssText = `
          transform:  rotateX(${i + 270}deg)   translateZ(100px); `
  }

  if (e.code === 'ArrowDown') {
    top1.style.cssText = `
          transform:  rotateX(${(i -= 10)}deg)   translateZ(100px); `
    bottom1.style.cssText = `
          transform:  rotateX(${i + 180}deg)   translateZ(100px);`
    right1.style.cssText = `
          transform: rotateY(90deg) rotate(${i}deg)   translateZ(100px);`
    left1.style.cssText = `
          transform: rotateY(270deg) rotate(${-i}deg)   translateZ(100px);`
    front1.style.cssText = `
          transform:  rotateX(${i + 90}deg)   translateZ(100px);`
    behind1.style.cssText = `
          transform:  rotateX(${i + 270}deg)   translateZ(100px); `
  }
})
