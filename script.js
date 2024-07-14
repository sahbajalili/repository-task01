let doc = document

let box = doc.querySelector('.box')
let cover1 = doc.querySelector('.1')
let cover2 = doc.querySelector('.2')
let cover3 = doc.querySelector('.3')

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