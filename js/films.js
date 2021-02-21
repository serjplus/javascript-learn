const numberOfFilms = +prompt("Skolko filmov vi uzhe smotreli", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt("Один из последних просмотренных фильмов?", "Введите название..."),
      b = prompt("На сколько оцените его?", "5"),
      c = prompt("Один из последних просмотренных фильмов?", "Введите название..."),
      d = prompt("На сколько оцените его?", "5");

const N1 = 'N1',
      actor1 = prompt("Один из актеров1 ?", "1 ..."), 
      N2 = 'N2',   
      actor2 = prompt("Один из актеров2 ?", "2 ..."),
      N3 = 'N3',
      actor3 = prompt("Один из актеров3 ?", "3 ...");

const genre1 = prompt("Любимыи жанр 1?", "1 ..."),      
      genre2 = prompt("Любимыи жанр 2?", "2 ..."),
      genre3 = prompt("Любимыи жанр 3?", "3 ...");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

personalMovieDB.actors[N1] = actor1;
personalMovieDB.actors[N2] = actor2;
personalMovieDB.actors[N3] = actor3;

console.log(personalMovieDB);