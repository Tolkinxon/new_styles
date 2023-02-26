const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')
const left1 = document.querySelector('.left')
const right1 = document.querySelector('.right')
const front1 = document.querySelector('.front')
const behind1 = document.querySelector('.behind')
const container = document.querySelector('.container')

let i = -90
let j = 0

// const rotateXY = (number, x, y, z) => {
//   top1.style.cssText = `
//     transform:  rotate3d(${x}, ${y}, ${z}, ${(i += number)}deg) translateZ(100px); `
//   bottom1.style.cssText = `
//     transform:  rotate3d(${x}, ${y},  ${z}, ${i + 180}deg)   translateZ(100px);`
//   right1.style.cssText = `
//     transform: rotate3d(${x}, ${y},  ${z}, ${i}deg)  translateZ(100px);`
//   left1.style.cssText = `
//     transform: rotate3d(${x}, ${y},  ${z}, ${i}deg) translateZ(100px);`
//   front1.style.cssText = `
//     transform:  rotate3d(${x}, ${y},  ${z}, ${i + 90}deg)   translateZ(100px);`
//   behind1.style.cssText = `
//     transform:  rotate3d(${x}, ${y},  ${z}, ${
//     i + 270
//   }deg)   translateZ(100px); `
// }

const rotateX = (number) => {
  top1.style.cssText = `
    transform: rotateY(${j}deg)  rotateX(${(i += number)}deg) translateZ(100px); `
  bottom1.style.cssText = `
    transform: rotateY(${j}deg)  rotateX(${i + 180}deg)   translateZ(100px);`
  right1.style.cssText = `
    transform: rotateY(${j}deg) rotateX(${i}deg)  translateZ(100px);`
  left1.style.cssText = `
    transform: rotateY(${j}deg) rotateX(${i}deg) translateZ(100px);`
  front1.style.cssText = `
    transform:  rotateY(${j}deg)  rotateX(${
    i + 90
  }deg)   translateZ(100px);`
  behind1.style.cssText = `
    transform: rotateY(${j}deg)  rotateX(${
    i + 270
  }deg)  translateZ(100px); `
}

const rotateY = (number) => {
  top1.style.cssText = `
  transform: rotateX(${i}deg) rotateY(${(j += number)}deg)  translateZ(100px);`
  right1.style.cssText = `
  transform:  rotateX(${i}deg)   rotateY(${j}deg) translateZ(100px); `
  left1.style.cssText = `
  transform: rotateX(${i}deg)   rotateY(${j + 180}deg)   translateZ(100px);`
  bottom1.style.cssText = `
  transform: rotateX(${i}deg)  rotateY(${j + 90}deg) translateZ(100px);`
  front1.style.cssText = `
  transform: rotateX(${i}deg)   rotateY(${j}deg)   translateZ(100px);`
  behind1.style.cssText = `
  transform: rotateX(${i}deg) rotateY(${j + 270}deg)  translateZ(100px); `
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
