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

const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

if (a != null && b != null && a != '' && b != '' && a.length < 50){
   personalMovieDB.movies[a] = b;
   alert("Ya zapomnil poshli dalshe");
} else {
   alert('Chto to ne tak vvodish poprobuy snova');
   i--;
}
}

if (personalMovieDB.count < 10){
   alert("Vi prosmotreli slishkom malo filmov");
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30){
   alert("Ooo Vi klasicheski zritel");
} else if (personalMovieDB.count >= 30){
   alert("Ooo Vi Kinoman");
} else  {
   alert("Blin Proizoshla oshibka");
}

