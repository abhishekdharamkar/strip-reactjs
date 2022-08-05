
import axios from "axios";
const baseURL=process.env.REACT_APP_SERVER_BASE_URL;
export default axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});