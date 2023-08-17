// Network Call (HTTP/ HTTPS)
import axios from 'axios';
// HTTP Call (HTTP Methods)
// GET - Read
// POST - Write (Insert/ Create)
// PUT - Update
// Delete - Remove
// CRUD Operations
export const apiClient = {
    get(){

    },
    async post(URL, data){
        try{
        const response = await axios.post(URL, data);
        console.log(response);
        return response;
        }
        catch(err){
            throw err;
        }
    },
    put(){

    },
    remove(){

    }
}