import axios from "axios";
import config from "./config";
import { toast } from "sonner";

export async function getBlog() {
    const url = config.BASE_URL + '/blogs'
    try {
        const response = await axios.get(url)
        return response.data
    } catch (error) {
        toast.error(error.message || "An unexpected error occurred"); 
        return { status: 'error', error: error.message }; 

    }
}