'use strict';

// function showThis() {
//     console.log(this);
// }

// showThis();

// function showThis1(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//     console.log(sum());
// }

// showThis1(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//             function shout() {
//             console.log(this);   
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log('Hello!' + this.name);
//     };
// }
// let ivan = new User('Ivan', 25);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'Vanya'
};

sayName.call(user, 'Vasin');
sayName.apply(user, ['Vaskin']);

function count(num) {
    return this*num;
}

const double = count.bind(2);
console.log(double(3));
console.log(double(13));

const obj = {
    num:5,
    sayNumber: function () {// Так будет работать потому что у стрелочной функции нет своего контекста выозова, ее контекст это контекст рожителя то бишь метода sayNumber.
        const say = () =>{
            console.log(this.num);
        };
        
        say();
    }
};

obj.sayNumber();

const double1 = a => a * 2;
console.log(double1(4)); 

// 1) Обычная функция: this = window, но если use strict - undefined
// 2) Контекст у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта.
// 4) Ручная привязка this: call, apply, bind