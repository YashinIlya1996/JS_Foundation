let countParam = (new URL(document.location.href)).searchParams.get('count')
const BLOCK_COUNT = !isNaN(countParam) && countParam ? Number(countParam) : 500

const board = document.querySelector('#board')
for (let i = 0; i < BLOCK_COUNT; i++) {
    const block = document.createElement('div')

    block.addEventListener('mouseover', () => {
        setColor(block)
    })

    block.addEventListener('mouseleave', () => {
        block.style.backgroundColor = '#1d1d1d'
        block.style.boxShadow = '0 0 2px black'
    })
    block.classList.add('square')
    board.append(block)
}


function setColor(block) {
    const color = nextColor()
    block.style.backgroundColor = color
    block.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

const nextColor = function() {
    let value = 0
    const step = 10
    return () => {
        value = (value + step) % 360
        return `hsl(${value}, 100%, 50%)`
    }
}()