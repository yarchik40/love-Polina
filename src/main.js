import './style.css'
// ======================
// 1. НАСТРОЙКИ ПРОГРАММЫ
// ======================

// Сколько сердечек вылетает при нажатии
const HEART_COUNT = 80

// Разные сердечки
const HEARTS = ['❤️', '💖', '💗', '💝', '💕', '💘']

// Текст для письма
const message = `Полин...

Я не умею писать красивые стихи, но если ты читаешь это, 
значит этот сайт всё-таки добрался до тебя. 
 
Я хотел сделать для тебя что-то своими руками.

Поэтому появился этот маленький сайт.

Пусть он напоминает тебе,
что где-то есть человек,
которому ты очень сильно нравишься. ❤️
Спасибо, что ты есть ❤️`

// ======================
// 2. СОЗДАЁМ HTML СТРАНИЦЫ
// ======================

// Добавляем весь HTML-код на страницу
document.querySelector('#app').innerHTML = `
<div class="page">
    <div class="heart">❤️</div>

    <h1>Привет, Поль!</h1>

    <p>
        Этот сайт существует только потому,
        что есть ты.
    </p>

    <button type="button" aria-expanded="false" aria-controls="letter">
        Нажми на кнопку ❤️
    </button>
    <div class="divider">
    ✦ ✦ ❤️ ✦ ✦
    </div>
    
    <div id="letter" class="letter hidden">
    <h2>❤️ Для тебя ❤️</h2>

    <p id="text"></p>
</div>
</div>
`

// ======================
// 3. ПОЛУЧАЕМ ЭЛЕМЕНТЫ СО СТРАНИЦЫ
// ======================

// Находим кнопку
const button = document.querySelector('button')
// Находим письмо
const letter = document.getElementById('letter')
// Находим место, куда будет печататься текст
const text = document.getElementById('text')

// ======================
// 4. ФУНКЦИИ
// ======================

// Печатает текст по одной букве
function typeText() {
  if (text.textContent.length > 0) return

  let i = 0

  const timer = setInterval(() => {
    const character = message[i]
    text.textContent += character

    i++

    // Когда письмо становится длиннее, держим его видимым на экране.
    if (character === '\n' || i % 12 === 0) {
      letter.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    }

    if (i >= message.length) {
      clearInterval(timer)
    }
  }, 35)
}

// Создаёт одно сердечко и запускает его анимацию
function createHeart() {
  const heart = document.createElement('div')

  const randomIndex = Math.floor(Math.random() * HEARTS.length)
  heart.innerHTML = HEARTS[randomIndex]
  heart.style.position = 'fixed'
  heart.style.left = Math.random() * window.innerWidth + 'px'
  heart.style.top = window.innerHeight + 'px'
  heart.style.fontSize = '30px'
  heart.style.transition = '3s linear'

  document.body.appendChild(heart)

  setTimeout(() => {
    heart.style.top = '-100px'
    heart.style.opacity = '0'
  }, 50)

  setTimeout(() => {
    heart.remove()
  }, 3000)
}

// Запускает одну волну сердечек.
function launchHearts() {
  for (let i = 0; i < HEART_COUNT; i++) {
    createHeart()
  }
}

// ======================
// 5. ЗАПУСК ПРОГРАММЫ
// ======================

// Ждём, пока пользователь нажмёт кнопку, показываем письмо, плавно прокручиваем страницу к письму
button.addEventListener('click', () => {
  button.disabled = true
  button.setAttribute('aria-expanded', 'true')
  button.textContent = 'Письмо открыто ❤️'

  letter.classList.remove('hidden')
  letter.classList.add('show')

  // Даём карточке раскрыться и только потом переводим к ней взгляд.
  setTimeout(() => {
    letter.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
    typeText()
    launchHearts()
  }, 350)
})
