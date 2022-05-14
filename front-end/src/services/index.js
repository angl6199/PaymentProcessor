import axios from 'axios';

export async function editarUsuario(data, id){
    try{
        const response = await axios({
            method: `POST`,
            data: data,
            withCredentials: true,
            url: `http://localhost:8000/users/update/${id}`,
        })
        return response
    }catch(e){
        return e
    }
}

export async function getCargo(params){
    try{
        const response = await axios({
            url: `http://localhost:8000/pagos/${params}`,
            method: `GET`,
        })
        return response
    }catch(e){
        return e
    }
}

export async function getCargos(params){
    try{
        const response = await axios({
            url: `http://localhost:8000/pagos/${params}`,
            method: `GET`,
        })
        return response
    }catch(e){
        return e
    }
}

export async function crearPago(data){
    try{
        const response = await axios({
            method: `POST`,
            data: data,
            withCredentials: true,
            url: `http://localhost:8000/pagos/create`,
        })
        return response
    }catch(e){
        return e
    }
}

export async function loginRequest(data) {
    try{
        const response = await axios({
            method: `POST`,
            data: data,
            withCredentials: true,
            url: `http://localhost:8000/users/login`,
        })
        return response
    }catch(e){
        return e
    }
}

export async function registerRequest(data) {
    try{
        const response = await axios({
            url: `http://localhost:8000/users/register`,
            method: `POST`,
            data: data,
        })

        return response
    }catch(e){
        return e
    }
}

export async function validateUser() {
    try{
        const response = await axios({
            url: `http://localhost:8000/users/validate`,
            method: `GET`,
        })

        return response
    }catch(e){
        return e
    }
}