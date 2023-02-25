const button = document.querySelector('.btn')
const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')
const left1 = document.querySelector('.left')
const right1 = document.querySelector('.right')

let i = 0

button.addEventListener('click', () => {
  //   top1.style.cssText = `
  //       transform:rotateX(80deg) translateZ(100px) rotateZ(${i += 10}deg);
  //     `

  right1.style.cssText = `
        transform: rotateY(80deg) translateZ(100px) rotate3d(1, 1, 4, ${(i += 40)}deg)  ;
        `
})
