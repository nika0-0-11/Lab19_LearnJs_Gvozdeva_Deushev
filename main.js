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

// function sumFunc(a, b) {
//     return a + b;

// }

// // Стрелочная функция:

// const sumFunc2 = (a, b) => a + b;

// // Правила:
// // 1. Один параметр — скобки необязательны:
// const double = x => x * 2;

// // 2. Несколько параметров — скобки обязательны:
// const sumFunc3 = (a, b) => a +b;

// // 3. Нет параметров — пустые скобки:
// const sayGreeting = () => console.log("Hello");

// // 4. Одна строка — return неявный:
// const square = x => x * x;

// // 5. Несколько строк — фигурные скобки + явный return:
// const calculate = (a, b) => {
//     let result = a + b;
//     return result * 2;
// }

// Массивы в JavaScript

// Создание массива

// let numberArr = [1, 2, 3, 4, 5];
// console.log(numberArr);

// // Доступ к элементам массива

// console.log(numberArr[0]);
// console.log(numberArr[1]);

// // Практическое задание №1

// let colors = ["Фиолетовый", "Розовый", "Черный"];
// console.log(colors[0]);
// console.log(colors[colors.length - 1]);

// colors[1] = "Красный";

// console.log(colors);

// // Длина массива

// console.log(numberArr.length);

// // Добавление и удаление элементов

// // Добавление в конец (push)
// numberArr.push(10);
// console.log(numberArr);

// // Удаление из конца (pop)
// numberArr.pop();
// console.log(numberArr);

// // Практическое задание №2

// let students = [];

// students.push("Ника");
// students.push("Тимур");
// students.push("Денис");

// students.pop();

// console.log(students);

// // Перебор массива с помощью цикла for

// let numbers2 = [10, 20, 30];

// for (let i = 0; i < numbers2.length; i++) {
//     console.log(numbers2[i]);
// }

// // Цикл for...of

// for (let value of numbers2) {
//     console.log(value);
// }

// // Массивы с разными типами данных

// let mixedArray = [1, "text", true, 3.14];
// console.log(mixedArray);

// // Поиск элемента в массиве

// // Метод 1: indexOf() — возвращает индекс
// console.log(numberArr.includes(1));
// console.log(numberArr.indexOf(2));

// // Метод 2: includes() — возвращает true/false
// console.log(fruits.includes("Яблоко"));
// console.log(fruits.includes("Манго"));

// // Практическое задание №4

// let cities = ["Волжский", "Волгоград", "Самарканд", "Ташкент", "Казань"];

// let searchCity = "Казань";

// let cityIndex = cities.indexOf(searchCity);

// if (cityIndex !== -1) {
//     console.log(`Город ${searchCity} найден`);
//     console.log(`Индекс города: ${cityIndex}`);
// } else {
//     console.log(`Город ${searchCity} не найден`)
// }

// Объекты в JavaScript

// Создание объекта (object literal)

let user2 = {
    name: "Nika",
    age: 18,
    isStudent: true, 
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}`);
    },
};

console.log(user2);

// Доступ к свойствам объекта

// Через точку:
console.log(user2.name);
console.log(user2.age);

// Через квадратные скобки:
console.log(user2["name"]);

// Практическое задание №1

let book = {
    title: "Грокаем Алгоритмы",
    author: "Адитья Бхаргава",
    year: 2016
};

console.log("Название: ", book.title);
console.log("Автор: ", book.author);
console.log("Год издания: ", book.year);

book.year = 2022;

console.log("Год издания: ", book.year);

// Добавление и удаление свойств

user2.age = 19;
user2.name = "Тимур";
delete user2.isStudent;
console.log(user2);

//  Объект с методами

user2.sayHello();

// Практическое задание №2

let car = {
    brand: "Toyota",
    year: 1968,
    getInfo: function() {
        console.log(`Автомобиль: ${this.brand}, Год выпуска: ${this.year}`);
    }
};

car.getInfo();

// Перебор свойств объекта

for (let key in user2) {
    console.log(key + ": " + user2[key]);
}

// Практическое задание №3

let product = {
    name: "Ноутбук",
    price: 45000,
    brand: "Lenovo",
};

console.log("Свойства объекта product: ")

for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}

// Вложенные объекты и массивы

let student = {
    name: "Тимур",
    skills: ["HTML", "CSS", "JS"],
    address: {
        city: "Волжский",
        street: "Пушкина",
    },
};

console.log(student.skills[0]);
console.log(student.address.city);