let doc = document

let box = doc.querySelector('.box')
let cover = doc.querySelector('.cover')

cover.addEventListener('touchstart' , touch)

function touch() {
    cover.style.borderBottomLeftRadius = '0px'
    cover.style.borderBottomRightRadius = '0px'
    cover.style.transform = 'transtranslateY(-30px)'
}