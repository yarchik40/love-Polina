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
    <div id="letter" class="letter hidden">
    <h2>❤️ Для тебя ❤️</h2>

    <p id="text"></p>
</div>
</div>
`;


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


const message =
`Поль...

Я не умею писать красивые стихи, но если ты читаешь это, 
значит этот сайт всё-таки добрался до тебя. 
 
Я хотел сделать для тебя что-то своими руками.

Поэтому появился этот маленький сайт.

Пусть он напоминает тебе,
что где-то есть человек,
которому ты очень сильно нравишься. ❤️`;

const letter = document.getElementById("letter");
const text = document.getElementById("text");

button.addEventListener("click", () => {

    letter.classList.remove("hidden");
    letter.classList.add("show");

    typeText();

});


function typeText(){

    if(text.textContent.length > 0) return;

    let i = 0;

    const timer = setInterval(()=>{

        text.textContent += message[i];

        i++;

        if(i >= message.length){
            clearInterval(timer);
        }

    },35);

}