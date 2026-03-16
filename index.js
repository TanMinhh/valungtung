const yesBtn = document.querySelector('.yesBtn');
const noBtn = document.querySelector('.noBtn');
const image = document.querySelector('.image img');
const firstText = document.querySelector('.firstText');
const secondText = document.querySelector('.secondText');

yesBtn.addEventListener('click', () => {
    image.src = 'img/pika_toge.png';
    image.classList.add('pika-mode');

    firstText.textContent = "Awwwwwww ♥";
    secondText.textContent = "Love You Sweetheart";

    const buttonContainer = document.querySelector('.button');
    buttonContainer.style.opacity = '0';
    buttonContainer.style.pointerEvents = 'none';

    setInterval(createHeart, 300);
});

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.style.fontSize = Math.random() * 20 + 20 + 'px';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

let noClickCount = 0;

noBtn.addEventListener('click', () => {
    noClickCount++;
    if (noClickCount === 1) {
        image.src = 'img/toge_cry_1.png';
        firstText.textContent = "Sweetheart..";
        yesBtn.style.width = "110px";
        yesBtn.style.height = "56px";
        noBtn.style.width = "65px";
        noBtn.style.height = "36px";
    } else if (noClickCount === 2) {
        image.src = 'img/toge_cry_2.png';
        firstText.textContent = "Ya ya..";
        yesBtn.style.width = "130px";
        yesBtn.style.height = "66px";
        noBtn.style.width = "55px";
        noBtn.style.height = "26px";
    } else if (noClickCount === 3) {
        image.src = 'img/toge_cry_3.png';
        firstText.textContent = "Yes pleaseeeee";
        secondText.textContent = "Do you wanna be MY VALENTINE?";
        yesBtn.style.width = "150px";
        yesBtn.style.height = "76px";
        noBtn.style.display = "none";
    }
});


