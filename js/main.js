"use strict";

//some comment in the code js
/*
multi
line
comment
*/
/*Переменные*/
console.log("");
console.log("Переменные");
let message;
message = "some message for the further using"; //saved string variable
let user = "Suhrob";
let _User = "Admin";
let $age = 25;
let неужели = "OMG";
let about = "top CSS & JS coder";
let numbVariable = 5;
let complexString = `Some ${2+5} text for ${user}`;
console.log(complexString);
console.log($age + _User + неужели);

/*Типы данных*/
console.log("");
console.log("Типы данных");
console.log(1 / 0);
console.log(Infinity);
console.log(NaN); // когда в результате вычислений получается не число
console.log("test" / 2);
console.log(null); // ничего или пусто
console.log(undefined); // значение не было присвоенно
let undefVariable;
console.log (undefVariable);
console.log(typeof (numbVariable)); // возвращает строку с именем типа переменной
console.log(typeof (null)); /*null - object*/
console.log(typeof (alert)); /*function*/
console.log(typeof ('true')); /*string*/
console.log(typeof (true)); /*boolean*/

/*Работа со строками*/
console.log("");
console.log("Работа со строками");
console.log(`The value - 10 have type is -  ${typeof (10)}`);
console.log(`This number type after explicit conversion by String() - ${typeof (String(10))}`); //явное преобразование в строку
console.log(`Try to convert String '123' type to Number if it possible -  ${Number("123")}`);
console.log(`Try to convert String 'It can't be convert' type to Number if it possible -  ${Number("It can't be convert")}`);

/*Автопреобразования*/
console.log("");
console.log("Автопреобразования");
console.log(1 + "2"); // получается строка 12
console.log(Boolean(0)); //false
console.log(Boolean("0")); //true, а пустая строка при этом будет false, кроме пробела :)
console.log("" + 1 + 0); // "10"
console.log("" - 1 + 0); // -1
console.log(true + false); // 1
console.log("1" + 1); // "11"
console.log(6 / "3"); // 2
console.log("2" * "3"); // 6
console.log(4 + 5 + "px"); // "9px"
console.log("px" + 4 + 5); // "px45"
console.log("px" - 2); // NaN
console.log(7 / 0); // Infinity
console.log(null + 1); // 1
console.log(5 - "-9"); // 14

/*Приоритет операций*/
console.log("");
console.log("Приоритет операций");
let a = 1, b = 2;
let c = 3 - (a = b + 1); // сначала происходит вычисление в скобках и затем это присваивается в А
console.log(a); // 3
console.log(c); // 0
console.log(b); // 2

/*Операторы*/
console.log("");
console.log("Операторы");
console.log(5 % 2); // 1, вычисляем остаток операции деления 5 на 2
console.log(2 ** 3); // 8, операция возведения числа 2 в степень 3
console.log(4 ** (1/2)); // 2, это аналог взятию квадратного корня от числа 4
console.log(8 ** (1/3)); // 2, это аналог взятию кубического корня от числа 8
