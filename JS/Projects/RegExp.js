'use strict';

//new RegExp('pattern', 'flags'); // Классический синтаксис, никто не пользуется
// /pattern/f

const ans = prompt('Введите ваше число');

const reg = /\d/;
console.log(ans.match(reg));// Вернет тру или фолс

const str = 'my name R2D2';
console.log(str.match(/\w\d\w\d/i)); // R2D2

// \D не числа
// \W не буквы

// i //найти что-то вне зависимости от регитсра
// g //Поиск нескольких вхождений 
// m //Многоистрочный режим --Классические флаги

// \d - digits
// \w - words
// \s - spaces

// console.log(ans.search(reg));
// console.log(ans.match(reg));

const pass = prompt('Password');

console.log(pass.replace(/./g, '*'));
    
console.log('12-34-56'.replace(/-/g, ':'));//12:34:

