// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

//  Практическое задание №1

// for (let count = 0; count < 10; count++) {
//     if (count % 2 == 0) {
//         console.log(count);
//     }
// }

//Цикл while
// let count = 0;

// while (count < 3) {
//     console.log("Count:", count);
//     count++;
// }

// Практическое задание №2

// let number = 5;

// while (number > 0) {
//     console.log("Number:", number);
//     number--;
// }

// Цикл do...while

// let doValue = 0;

// do {
//     console.log("Value:", doValue);
//     doValue++;
// } while (doValue < 3);

// Операторы break и continue

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         break;
//     }
//     console.log(i);
// }

// Практическое задание №4

// for (let i = 0; i < 10; i++) {
//     if (i === 5) {
//         continue;
//     }
//     else if (i === 8) {
//         break;
//     }
//     console.log(i);
// }

// Вложенные циклы

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`i = ${i}, j = ${j}`);
//     }
// }

// Практическое задание №5

// for (i = 1; i <= 4; i++) {
//     let sym = "";
//     for (j = 1; j <= i; j++) {
//         sym += "*";
//     }
//     console.log(sym);
// }

// Объявление функции (классический способ)

// function sum (a, b) {
//     return a + b;
// }

// console.log(sum(3, 5));

// Практическое задание №1

// function multiply(x, y) {
//     return x * y;
// }

// console.log(multiply(5, 3));

// function sayHello(name) {
//     console.log(`Hello, ${name}`);
// }

// sayHello("Nika");

// function printInfo(name, age) {
//     console.log(`Name: ${name} \nAge: ${age}`);
// }

// printInfo("Nika", 18);

// Значения параметров по умолчанию

// function greet(name = "Гость") {
//     console.log("Привет, " + name);
// }

// greet();
// greet("Nika");

// Практическое задание №3

// function calculateDiscount(price, discount = 10) {
//     return (price - (price * discount) / 100); 
// }

// console.log(calculateDiscount(100));
// console.log(calculateDiscount(100, 50))

// Функции как значения

// const add = function (a, b) {
//     return a + b;
// };
// console.log(add(2, 3));

// // Пример замыканий (closure):

// function makeCounter() {
//     let count = 0;
//     return function () {
//         count++;
//         return count;
//     };
// }

// const counter = makeCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

// Стрелочные функции (Arrow Functions)

// Обычная функция:

function sumFunc(a, b) {
    return a + b;

}

// Стрелочная функция:

const sumFunc2 = (a, b) => a + b;

// Правила:
// 1. Один параметр — скобки необязательны:
const double = x => x * 2;

// 2. Несколько параметров — скобки обязательны:
const sumFunc3 = (a, b) => a +b;

// 3. Нет параметров — пустые скобки:
const sayGreeting = () => console.log("Hello");

// 4. Одна строка — return неявный:
const square = x => x * x;

// 5. Несколько строк — фигурные скобки + явный return:
const calculate = (a, b) => {
    let result = a + b;
    return result * 2;
}