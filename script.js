const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')
const left1 = document.querySelector('.left')
const right1 = document.querySelector('.right')
const front1 = document.querySelector('.front')
const behind1 = document.querySelector('.behind')
const container = document.querySelector('.container')
const box = document.querySelector('.box')

let i = 90
let j = 0

const rotateXY = (number, x, y) => {
  top1.style.cssText = `
    transform:  rotate3d(${x}, ${y}, 0, ${(i += number)}deg) translateZ(100px); `
  bottom1.style.cssText = `
    transform:  rotate3d(${x}, ${y}, 0, ${i + 180}deg)   translateZ(100px);`
  right1.style.cssText = `
    transform: rotate3d(${x}, ${y}, 0, ${i}deg)  translateZ(100px);`
  left1.style.cssText = `
    transform: rotate3d(${x}, ${y}, 0, ${i}deg) translateZ(100px);`
  front1.style.cssText = `
    transform:  rotate3d(${x}, ${y}, 0, ${i + 90}deg)   translateZ(100px);`
  behind1.style.cssText = `
    transform:  rotate3d(${x}, ${y}, 0, ${i + 270}deg)   translateZ(100px); `
}

document.addEventListener('keydown', (e) => {
  console.log(e.code)

  if (e.code === 'ArrowUp') {
    rotateXY(10, 1, 0)
  }

  if (e.code === 'ArrowDown') {
    rotateXY(-10, 1, 0)
  }

  if (e.code === 'ArrowRight') {
    rotateXY(10, 0, 1)
  }

  if (e.code === 'ArrowLeft') {
    rotateXY(-10, 0, 1)
  }
})
