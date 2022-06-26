const startBtn = document.querySelector('.screen .start')
const screens = document.querySelectorAll('.screen')
const timeList = document.querySelector('.time-list')
const timeCounter = document.getElementById('time')
const board = document.getElementById('board')

let time = 0;
let score = 0
const MAX_CIRCLE_DIAMETER = 30
const MIN_CIRCLE_DIAMETER = 10

const nextColor = function () {
    let value = 0
    const step = 10
    return () => {
        value = (value + step) % 360
        return `hsl(${value}, 100%, 50%)`
    }
}()

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
});

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'))
        screens[1].classList.add('up')
        startGame()
    }
});

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')) {
        score++;
        event.target.remove()
        createRandomCircle()
    }
})


function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle()
    setTime(time)
}

function stopGame() {
    timeCounter.parentNode.style.opacity = 0
    board.innerHTML = `<h1>Ваш счет: <span class="primary">${score}</span></h1>`
}

function decreaseTime() {
    if (time === 0) {
        stopGame()
    } else {
        let current = --time
        setTime(current)
    }
}

function setTime(value) {
    timeCounter.innerHTML = `00:${value > 9 ? value : `0${value}`}`
}

function createRandomCircle() {
    const circle = document.createElement('dic')
    circle.classList.add('circle')
    board.append(circle)
    const circleSize = getRandInt(MIN_CIRCLE_DIAMETER, MAX_CIRCLE_DIAMETER)
    const {height: boardHeight, width: boardWidth} = board.getBoundingClientRect()
    const circleX = getRandInt(0, boardWidth - circleSize)
    const circleY = getRandInt(0, boardHeight - circleSize)

    circle.style.width = `${circleSize}px`
    circle.style.height = `${circleSize}px`
    circle.style.left = `${circleX}px`
    circle.style.top = `${circleY}px`
    circle.style.background = nextColor()
}

function getRandInt(start, stop) {
    return Math.floor(Math.random() * (stop - start + 1)) + start
}

