/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы просмотрели', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы просмотрели', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++ ) {
        const a = prompt('Один из последни просмотренных фильмов?', ''),
              b = prompt('Оцените фильм', '');
              
    // ( a != null && b != null && a != '' && b != '' && a.length < 50) ? personalMovieDB.movies[a] = b : i--;
        if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();


function detectPersonalLevel() {  
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (10 <= personalMovieDB.count < 30 ) {
        console.log('Зритель ебать');
    } else if (personalMovieDB.count >= 30) {
        console.log('Хуеман');
    } else {
        console.log('ERROR');
    }
}

// detectPersonalLevel();

function showMyDb(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDb(personalMovieDB.privat);

function writeYourGeners () {
    for (let i = 1; i < 4; i++) {
        const genre = prompt(`Твои любимый жанр под номером ${i} `, '');
        personalMovieDB.genres[i - 1]  = genre;
    }
}

writeYourGeners ();