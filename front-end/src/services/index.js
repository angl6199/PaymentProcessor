import axios from 'axios';

export async function loginRequest(data) {
    try{
        const response = await axios({
            url: `http://localhost:8000/users/login`,
            method: `POST`,
            data: data,
        })

        return response
    }catch(e){
        return e
    }
}