

function startGame() {
    // Генерируем случайное число от 1 до 6
var randomNumber = Math.floor(Math.random() * 6) + 1;

// Проверяем, выпало ли число 4
if (randomNumber === 4) {
  // Если да, вызываем alert
  alert('Выпало число 4!');
} else {
  // Если нет, выводим случайное число в консоль
  console.log('Случайное число: ' + randomNumber);
}

}