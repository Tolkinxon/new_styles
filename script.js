const button = document.querySelector('.btn')
const top1 = document.querySelector('.top')
const bottom1 = document.querySelector('.bottom')
const left1 = document.querySelector('.left')
const right1 = document.querySelector('.right')

let t = 0
let b = 0
let r = 0
let l = 0

button.addEventListener('click', () => {
  top1.style.cssText = `
        transform:rotateX(90deg) translateZ(100px) rotateZ(${(t += 10)}deg);
      `
  bottom1.style.cssText = `
      transform:rotateX(90deg) translateZ(-100px) rotateZ(${(b += 10)}deg);
    `

  right1.style.cssText = `
            transform-origin: center top -100px;
          transform:translateZ(100px) rotateY(${(r -= 10)}deg)  ;
          `
  left1.style.cssText = `
          transform-origin: center top 100px;
          transform: translateZ(-100px) rotateY(${(l -= 10)}deg)  ;
          `
})
