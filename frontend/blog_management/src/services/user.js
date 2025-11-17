import config from './config';
import {toast} from 'sonner'
import axios from 'axios'

export async function loginUser(email, password){
    try {
        const userbody = { email, password }
        const url = config.BASE_URL + '/users/signin'
        const response = await axios.post(url, userbody)
        return response.data
    } catch (ex) {
        toast.error(ex)
    }
}