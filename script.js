let doc = document

let cover1 = doc.querySelector('.ri-mail-fill')
let cover2 = doc.querySelector('.ri-smartphone-line')
let cover3 = doc.querySelector('.ri-map-pin-line')

console.log(cover1)
console.log(cover2)
console.log(cover3)

cover1.addEventListener('touchstart' , touch1)
cover2.addEventListener('touchstart' , touch2)
cover3.addEventListener('touchstart' , touch3)

function touch1() {
    cover1.style.borderBottomLeftRadius = '0px'
    cover1.style.borderBottomRightRadius = '0px'
    cover1.style.transform = 'transtranslateY(-30px)'
}

function touch2() {
    cover2.style.borderBottomLeftRadius = '0px'
    cover2.style.borderBottomRightRadius = '0px'
    cover2.style.transform = 'transtranslateY(-30px)'
}

function touch3() {
    cover3.style.borderBottomLeftRadius = '0px'
    cover3.style.borderBottomRightRadius = '0px'
    cover3.style.transform = 'transtranslateY(-30px)'
}