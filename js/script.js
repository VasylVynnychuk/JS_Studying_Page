/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const promoAdv = document.querySelector('.promo__adv'),
      promoImg = promoAdv.querySelectorAll('img'),
      promoText = promoAdv.querySelector('.promo__adv-title'),
      promoBg = document.querySelector('.promo__bg'),
      promoGenre = promoBg.querySelector('.promo__genre'),
      promoListFilms = document.querySelectorAll('.promo__interactive-list');
    //   promoListFilms = document.querySelectorAll('.promo__interactive-item');

// 1
// console.log(promoGenre);
promoText.remove();

promoImg.forEach(item => {
    item.remove();
});

// 2
promoGenre.textContent = "ДРАМА";

// 3
promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4 5
// console.log(promoListFilms);
promoListFilms[0].innerHTML = "";

movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
    promoListFilms[0].innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
    `; 
});

// promoListFilms.forEach((item, i) => {
//     item.textContent = `${i + 1} ${movieDB.movies[i]}`;
// });


