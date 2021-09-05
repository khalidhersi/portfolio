const h1 = document.getElementById('welcome-h1');

const colorValue = () => {
    return Math.floor(Math.random() * 255)
};

function colorChange(event){
    let randomColor = 'rgb(' + colorValue() + ',' + colorValue() + ',' + colorValue() + ')';
    event.target.style.color = randomColor;
};

h1.addEventListener('mouseenter', colorChange);

