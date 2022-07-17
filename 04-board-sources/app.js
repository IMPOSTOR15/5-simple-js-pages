const board = document.querySelector('#board')

const colors =['#2C1B47', '#724C9D', '#DCCAE9', '#9356A0', '#1e0039', '#604d9e', '#a27eb8', '#aaa2d8']

const SQARES_NUMBER = 1600

for (let i = 0; i < SQARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))


    board.append(square)
}

function setColor(element) {
    const color = getRandomeColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomeColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}