/*jslint es6 devel: true*/

const numberOfFilms = +prompt("Skolko filmov vi uzhe smotreli", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for ( let i = 0; i < 2 ; i++ ){

const a = prompt("Один из последних просмотренных фильмов?", "Введите название..."),
      b = prompt("На сколько оцените его?", "5");

if (a != null && b != null && a != '' && b != '' && a.length < 50){
   personalMovieDB.movies[a] = b;
   console.log("done");
} else {
   console.log('error');
   i--;
}
}

console.log(personalMovieDB);