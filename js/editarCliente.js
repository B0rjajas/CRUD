
import { obtenerCliente, editarCLiente } from "./API";


(function(){

    //Campos del formulario

    const nombreINput = document.querySelector('#nombre');
    const emailINput = document.querySelector('#email');
    const empresaINput = document.querySelector('#empresa');
    const telefonoINput = document.querySelector('#telefono');
    const idINput = document.querySelector('#id');


    document.addEventListener('DOMContentLoaded', ()=> {
        const parametrosURL = new URLSearchParams(window.location.search);

        const idCliente = parseInt( parametrosURL.get('id'));

        const cliente = obtenerCliente(idCliente);
        mostartCliente(cliente)


        //Submit al formulario
        const formulario = document.querySelector('#formulario');
        formulario.addEventListener('submit', validarCliente);        
    });

    function mostartCliente(cliente){
        const { nombre, empresa, email, telefono, id } = cliente;

        nombreINput.value = nombre;
        emailINput.value = email;
        empresaINput.value = empresa;
        telefonoINput.value = telefono;
        idINput.value = id;
    }

    function validarCliente(e){
        e.preventDefault();
        const cliente = {
            nombre: nombreInput.value,
            email: emailInput.value,
            telefono: telefonoInput.value,
            empresa: emailInput.value,
            id: parseInt(idInput.value)
        }

        console.log(cliente)

        if(validar(cliente)){
            //Mostar mensaje
            MostrarAlerta('Todos los campos son obligatorios')
            return;
        }
    }
})