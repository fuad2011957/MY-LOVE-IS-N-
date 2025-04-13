const loveBtn = document.querySelector('#click');
const neVidno = document.querySelector('.ne-vidno');
const heart1 = document.querySelector('.heart-1');
const heart2 = document.querySelector('.heart-2');
const h1 = document.querySelector('#h');

let max = 100;
let min = 20;

function love(){
    loveBtn.style.display = 'none';
    neVidno.style.display = 'flex';
    
    for(let i = 0; i < 50000; i++){
        let random = Math.floor(Math.random() * (max - min) + min);
        setTimeout(() => {
            neVidno.innerHTML = parseFloat(neVidno.innerHTML) + parseFloat(random) + '❤❤';
        }, 299 * i);
    };
};

loveBtn.addEventListener('click', () => {
    love();
});