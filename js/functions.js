/* Функция для проверки длины строки. Она принимает строку, которую нужно проверить, и максимальную длину и возвращает true, если строка меньше или равна указанной длине, и false, если строка длиннее. Эта функция нам пригодится для валидации формы. Примеры использования функции:
// Строка короче 20 символов
имяФункции('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
имяФункции('проверяемая строка', 18); // true
// Строка длиннее 10 символов
имяФункции('проверяемая строка', 10); // false*/

const checkStringLenght = (string, length) =>{
  if (string.length <= length) {
    return true;
  }
  return false;
};

//Строка короче 20 символов
console.log('1 тест', checkStringLenght('aaaaaaaaaaaaaaaa',20)); //результат true

//Строка равна 18 символам
console.log('2 тест', checkStringLenght('aaaaaaaaaaaaaaaaaa',18)); // результат true

//Строка длиннее 10 символов
console.log('3 тест', checkStringLenght('aaaaaaaaaaaaaaaa', 10)); // результат false

//задание 2
/*Функция для проверки, является ли строка палиндромом. Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево. Например:

// Строка является палиндромом
имяФункции('топот'); // true
// Несмотря на разный регистр, тоже палиндром
имяФункции('ДовОд'); // true
// Это не палиндром
имяФункции('Кекс');  // false
// Это палиндром
имяФункции('Лёша на полке клопа нашёл '); // true*/

const checkForPolyndromes = (string) =>{
  string = string.replaceAll(' ','');
  string = string.toLowerCase();

  const reversedString = string. split('').reverse().join('');
  return(string === reversedString);
};

console.log('1 тест',checkForPolyndromes('топот')); // результат true
console.log('2 тест',checkForPolyndromes('ДовОд')); // результат true
console.log('3 тест',checkForPolyndromes('Кекс')); // результат false
console.log('4 тест', checkForPolyndromes('Лёша на полке клопа нашёл ')); // true


