'use strict'

const nombre = document.getElementById('nombre');
const apellido = document.getElementById('apellido');
const correo = document.getElementById('correo');
const celular = document.getElementById('celular');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const aceptar = document.getElementById('aceptar')

const empty = () =>{
    if(!nombre.value){
        pname.innerHTML = 'el valor no puede estar vacio';
    }
}


