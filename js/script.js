'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
          promoListFilms = document.querySelectorAll('.promo__interactive-list'),
          addForm = document.querySelector('.add'),
          addFilmInput = addForm.querySelector('.adding__input'),
          checkBox = addForm.querySelector("[type=checkbox]");
    

    const deleteAdv = (arr) => {
        promoText.remove();
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        promoGenre.textContent = "ДРАМА";
        promoBg.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
    
        let filmName = addFilmInput.value;
        const favoriteFilm = checkBox.checked;
        
        if (filmName) {

            if (filmName.length > 21) {
                filmName = `${filmName.substring(0, 22)}...`;
            }

            if (favoriteFilm) {
                console.log('Favorite film');
            }
            movieDB.movies.push(filmName);
            sortArr(movieDB.movies);
            
            createMovieList(movieDB.movies, promoListFilms[0]);
        }
    
        event.target.reset();
    });
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((item, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${item}
                    <div class="delete"></div>
                </li>
            `; 
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                films.splice(i, 1);

                createMovieList(films, parent);
            });
        }); 
    }

    deleteAdv(promoImg);
    makeChanges();
    createMovieList(movieDB.movies, promoListFilms[0]);
});
