import axios from "axios";

const api = axios.create({
    baseURL: "https://api-manager-test.infog2.com.br.infog2.com.br/",
    headers: {
        'Content-Type': 'application/json'
    }
})

export default api