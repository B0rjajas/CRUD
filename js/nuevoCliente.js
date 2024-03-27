import { nuevoCLiente } from './API.js';
import { MostrarAlerta } from './Funciones.js';

(function() {
    const formulario = document.querySelector('#formulario')
    formulario.addEventListener('submit', validarCliente);

    function validarCliente(e){
        e.preventDefault();
        const nombre = document.querySelector('#nombre').value;
        const email = document.querySelector('#email').value;
        const telefono = document.querySelector('#telefono').value;
        const empresa = document.querySelector('#empresa').value;


        //Objeto Literal
        const cliente = {
            nombre,
            email,
            telefono,
            empresa
        }

        if(validar(cliente)){
            //Mostar mensaje
            MostrarAlerta('Todos los campos son obligatorios')
            return;
        }

        nuevoCLiente('Si se paso la validación')
    }

    function validar(obj){
        return !Object.values(obj).every(input => input !== '');
    
    }
    
})();
