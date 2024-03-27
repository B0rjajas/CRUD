const url = 'http://localhost:3000/cliente'

//NUevo CLiente
export const nuevoCLiente = async cliente => {
        try {
                await fetch(url, {
                        method: 'Post',
                        body: JSON.stringify(cliente),
                        headers: {
                                'Content-Type': 'applicaction/json'
                        }
                });
                window.location.href = 'index.html'
                
        } catch (error) {
                console.log(error)
                
        }       
}

//Obtiene todos los clientes 
export const obtenerClientes = async () => {
        try {
                const resultado = await fetch(url);
                const clientes = await resultado.json();
                return clientes;
        } catch (error) {

                console.log(error)
                
        }
}

//Eliminar todos los clientes 
export const elimiarCliente = async (id) => {
        try {
                await fetch(`${url}/${id}`);
                method: 'DELETE'
               
        } catch (error) {
                function validar(obj){
                        return !Object.values(obj).every(input => input !== '');
                    
                    }
                    
                console.log(error)
                
        }
}


//Obtiene solo un  cliente 
export const obtenerCliente = async (id) => {
        try {
                const resultado = await fetch(url);
                const cliente = await resultado.json();
                return cliente;
        } catch (error) {

                console.log(error)
                
        }
}


export const editarCLiente = async cliente => {
        try {
            await fetch(`${url}/${cliente.id}`, {
                method: 'PUT',
                body: JSON.stringify(cliente),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
    
            window.location.href = 'index.html'; // Redirigir después de editar el cliente
        } catch (error) {
            console.log(error);
        }
    }
    