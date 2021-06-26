const numberOfFilms = +prompt('Сколько фильмов вы просмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++ ) {
    const a = prompt('Один из последни просмотренных фильмов?', ''),
          b = prompt('Оцените фильм', '');

    if ( a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (10 <= personalMovieDB.count < 30 ) {
    console.log('Зритель ебать');
} else if (personalMovieDB.count >= 30) {
    console.log('Хуеман');
} else {
    console.log('ERROR');
}

console.log(personalMovieDB);