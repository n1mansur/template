import axios from "axios";

const httpRequest = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 100000,
})

const errorHandler = (error, hooks) => {
 
  return Promise.reject(error.response)
}


httpRequest.interceptors.request.use(
  config => {
    // const token = authStore.token.access_token

    const token = ''

    if(token) {
      config.headers.Authorization = `Bearer ${token}`
    }


    // config.headers['X-API-KEY'] = 'fino1'

    return config
  })

httpRequest.interceptors.response.use(response => response.data.data, errorHandler)


export default httpRequest
