import axios from 'axios'

let $axios = axios.create({
  baseURL: '/api/',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' }
})

// Request Interceptor
$axios.interceptors.request.use(function (config) {
  config.headers['Authorization'] = 'Fake Token'
  return config
})

// Response Interceptor to handle and log errors
$axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  // Handle Error
  console.log(error)
  return Promise.reject(error)
})

export default {

  fetchPersonal () {
    return $axios.get(`/user/personal`)
      .then(response => response.data)
  },

  getLoginInfo () {
    return $axios.get(`/user/info`)
      .then(response => response.data)
  },

  logoutUser () {
    return $axios.get(`/user/logout`)
      .then(response => response.data)
  },

  loginUser (params) {
    return $axios.post(`/user/login`, params)
      .then(response => response.data)
  },

  registerUser (params) {
    return $axios.post(`/user/register`, params)
      .then(response => response.data)
  }

}
