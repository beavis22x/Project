'use strict';

// const num = new Number(3);
// console.log(num);

// const num1 = new Function(3);
// console.log(num1);

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${this.name}`);
    };
}

User.prototype.exit = function () {
    console.log(`User ${this.name} exit`);
};

const ivan = new User('ivan', 28),
      alex = new User('alex', 23);

ivan.hello();
alex.hello();

ivan.exit();
alex.exit();

console.log(ivan);
console.log(alex);