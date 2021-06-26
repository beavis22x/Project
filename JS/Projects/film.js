const numberOfFilms = +prompt('Сколько фильмов вы просмотрели', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последни просмотренных фильмов?', ''),
      b = prompt('Оцените фильм', ''),
      c = prompt('Один из последни просмотренных фильмов?', ''),
      d = prompt('Оцените фильм', '');

  personalMovieDB.movies[a] = b;
  personalMovieDB.movies[c] = d;

console.log(personalMovieDB);