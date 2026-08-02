import './style.css'

document.querySelector('#app').innerHTML = `
<div class="page">
    <div class="heart">❤️</div>

    <h1>Привет, Поль!</h1>

    <p>
        Этот сайт существует только потому,
        что есть ты.
    </p>

    <button>
        Нажми на кнопку ❤️
    </button>
</div>
`


const button = document.querySelector("button");

button.addEventListener("click", () => {
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");

    heart.innerHTML = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = "30px";
    heart.style.transition = "3s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.top = "-100px";
        heart.style.opacity = "0";
    }, 50);

    setTimeout(() => {
        heart.remove();
    }, 3000);
}