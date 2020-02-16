'use strict';

/*para recepcionar data del local storage*/
window.addEventListener('load', () => {

    getData();
    llenarCard(getData());

    function getData() {
        let data = []
        let storage = localStorage.getItem("localDbRegister");
        if (storage == null) {
            console.log("No hay data");
            data = [];
        } else {
            data = JSON.parse(storage);
            /*console.log(data);*/
        }

        return data;
    }


    function llenarCard(data) {


        const container = document.querySelector('#id-container-cards');

        for (let elemento of data) {
            let card = document.createElement('article');
            card.classList.add('card');
            let { address, cell, codepen, email, face, github, lastname, linkedin, me, name, password, sex, skill, twitter, user } = elemento;
            console.log(elemento);
            card.innerHTML = `
            <div class="card__top">
                                <figure>
                                    <img src="https://picsum.photos/id/511/68/68" alt="">
                                </figure>
                                <h2>${name}</h2>
                                <h3>${skill}</h3>
                            </div>
                            <div class="card__bottom">
                                <ul class="card__bottom__phone d-flex jc-center">
                                    <li>
                                        <i class="fas fa-phone"></i>
                                    </li>
                                    <li>
                                        <a href="tel:01-923-085975">${cell}</a>
                                    </li>
                                </ul>
                                <ul class="card__bottom__social d-flex jc-center">
                                    <li>
                                        <a href="${face}">
                                            <i class="fab fa-facebook-square"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-github-alt"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">
                                            <i class="fab fa-codepen"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
            
            
            `
            container.appendChild(card);
        }

    }
});