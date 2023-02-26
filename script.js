const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')
const left1 = document.querySelector('.left')
const right1 = document.querySelector('.right')
const front1 = document.querySelector('.front')
const behind1 = document.querySelector('.behind')

let i = 90
let j = 0

const rotateX = (number) => {
  top1.style.cssText = `  
    transform:  rotateX(${(i += number)}deg) translateZ(100px); `
  bottom1.style.cssText = `
    transform:   rotateX(${i + 180}deg)   translateZ(100px);`
  right1.style.cssText = `
    transform: rotateY(90deg) rotate(${i}deg)   translateZ(100px);`
  left1.style.cssText = `
    transform: rotateY(-90deg) rotate(${-i}deg) translateZ(100px);`
  front1.style.cssText = `
    transform:  rotateX(${i - 90}deg)   translateZ(100px);`
  behind1.style.cssText = `
    transform:  rotateX(${i + 90}deg)  translateZ(100px); `
}

const rotateY = (number) => {
  front1.style.cssText = `
    transform: rotateY(${(j += number)}deg)  translateZ(100px);`
  right1.style.cssText = `
    transform: rotateY(${j + 90}deg) translateZ(100px); `
  behind1.style.cssText = `
    transform: rotateY(${j + 180}deg)   translateZ(100px);`
  bottom1.style.cssText = `
    transform: rotateX(-90deg) rotate(${j}deg)  translateZ(100px);`
  left1.style.cssText = `
    transform: rotateY(${j - 90}deg)   translateZ(100px);`
  top1.style.cssText = `
   transform:  rotateX(90deg) rotate(${-j}deg)   translateZ(100px); `
}

document.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowUp') {
    rotateX(10)
  }

  if (e.code === 'ArrowDown') {
    rotateX(-10)
  }

  if (e.code === 'ArrowRight') {
    rotateY(10)
  }

  if (e.code === 'ArrowLeft') {
    rotateY(-10)
  }
})
