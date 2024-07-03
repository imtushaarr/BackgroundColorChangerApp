const body = document.getElementById('body');
const colorSpan = document.querySelector('#text span');
const button = document.getElementById('button');
const texth1 = document.querySelector('#text h1')


const colors = ['red', 'black', 'blue', 'green', 'yellow', 'skyblue', 'darkgreen'];
let currentIndex = 0;

function getBackgroundColor(){
    currentIndex = (currentIndex + 1) % colors.length;
    const newColor = colors[currentIndex]

    body.style.backgroundColor = newColor;
    colorSpan.textContent = newColor.toUpperCase()

    texth1.style.color = 'white';
    colorSpan.style.color = 'white';
}


button.addEventListener('click', getBackgroundColor)