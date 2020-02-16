'use strict';
let btnRegistrar = document.querySelector("#id-btn-registrar");
let formulario = document.querySelector("#id-form");
let dbRegister = [];

formulario.addEventListener('submit', function(e) {

    if (this.sexo[0].checked == false && this.sexo[1].checked == false) {
        alert("Seleccione sexo!!!!");
        e.preventDefault();
    } else {
        console.log(getValuesForm());
        dbRegister.push(getValuesForm());
        localStorageRegister(dbRegister);
        this.reset();
        e.preventDefault();
    }
});


function getValuesForm() {
    const formulario = document.querySelector("#id-form");
    const controlsForm = document.querySelectorAll('[data-form]');
    const objUser = {
        name: controlsForm[0].value,
        lastname: controlsForm[1].value,
        cell: controlsForm[2].value,
        address: controlsForm[3].value,
        sex: formulario.sexo.value,
        user: controlsForm[4].value,
        password: controlsForm[5].value,
        email: controlsForm[6].value,
        skill: controlsForm[7].value,
        me: controlsForm[8].value,
        face: controlsForm[9].value,
        twitter: controlsForm[10].value,
        github: controlsForm[11].value,
        linkedin: controlsForm[12].value,
        codepen: controlsForm[13].value
    }

    return objUser;
}

function localStorageRegister(data) {
    localStorage.setItem('localDbRegister', JSON.stringify(data));
}