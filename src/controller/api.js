import axios from "axios"

const baseURL = process.env.VUE_APP_URL

const getData = (route) => axios.get(baseURL + route)

const postData = (route, data) => axios.post(baseURL + route, data)

const scanData = (route, ticketNumber, Authentication) => axios.post(baseURL + route, ticketNumber, Authentication)

const audData = (route, Authentication) => {
    return axios.get(baseURL + route, Authentication)
}

export default { getData, postData, scanData, audData };
