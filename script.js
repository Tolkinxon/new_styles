const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')
const left1 = document.querySelector('.left')
const right1 = document.querySelector('.right')
const front1 = document.querySelector('.front')
const behind1 = document.querySelector('.behind')
const container = document.querySelector('.container')

let i = 0

document.addEventListener('keydown', (e) => {
  console.log(e.code)

  // if (e.code === 'ArrowUp') {
  //   top1.style.cssText = `
  //           transform: rotateX(90deg) rotateX(${(i += 10)}deg)   translateZ(100px);
  //          `
  //   bottom1.style.cssText = `
  //          transform: rotateX(90deg) rotateX(${((i += 10) + 180)}deg)   translateZ(100px);
  //     `
  // }
  // if (e.code === 'ArrowDown') {
  //   top1.style.cssText = `
  //               transform: rotateX(90deg) rotateX(${(i -= 10)}deg)   translateZ(100px);
  //          `
  //   bottom1.style.cssText = `
  //          transform: rotateX(90deg) rotateX(${((i -= 10) + 180)}deg)   translateZ(100px);
  //     `
  // }

  if (e.code === 'ArrowUp') {
    top1.style.cssText = `
            transform:  rotateX(${(i += 10)}deg)   translateZ(100px);  
           `
    bottom1.style.cssText = `
           transform:  rotateX(${(i += 10) + 180}deg)   translateZ(100px);  
          `
  }
  if (e.code === 'ArrowDown') {
    top1.style.cssText = `
                transform: rotateX(${(i -= 10)}deg)   translateZ(100px);  
           `
    bottom1.style.cssText = `
           transform:  rotateX(${(i -= 10) + 180}deg)   translateZ(100px);  
          `
  }
})
