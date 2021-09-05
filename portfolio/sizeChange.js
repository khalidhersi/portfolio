const p = document.getElementById('name');

const sizeValue = () => {
    return (Math.random() + 0.25) * 1.5;
};
function sizeIncrease(event){
    let randomSize = sizeValue() + 'em'
    event.target.style.fontSize = randomSize;
};

p.addEventListener('mouseenter', sizeIncrease);
