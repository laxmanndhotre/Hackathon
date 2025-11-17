import config from './config';
import {toast} from 'react-toastify'
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

export async function registerUser(name, email, password, mobile) {
    try {
        const url = config.BASE_URL + '/user/signup'
        const body = { name, email, password, mobile }
        const response = await axios.post(url, body)
        return response.data
    } catch (ex) {
        toast.error(ex)
    }
}