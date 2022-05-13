import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://9488e748.us-south.apigw.appdomain.cloud/api/v1'
})
