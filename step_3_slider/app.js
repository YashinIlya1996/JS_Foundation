const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`

upBtn.addEventListener('click', () => {changeSlide(1)})
downBtn.addEventListener('click', () => {changeSlide(-1)})

function changeSlide(direction) {
    activeSlideIndex += direction
    if (activeSlideIndex === slidesCount) {activeSlideIndex = 0}
    if (activeSlideIndex < 0) {activeSlideIndex = slidesCount - 1}
    console.log(activeSlideIndex)

    mainSlide.style.transform = `translateY(-${activeSlideIndex}00vh)`
    sidebar.style.transform = `translateY(${activeSlideIndex}00vh)`
}