import axios, { Method } from 'axios'
import * as humps from 'humps'

const API_ENDPOINT = 'https://manekin-neko.herokuapp.com'

const instance = axios.create({
  baseURL: `${API_ENDPOINT}/api`,
})

type TProps = {
  url: string
  method?: Method
  body?: any
}

export const callAPI = async ({ url, method = 'POST', body }: TProps) => {
  const data = humps.decamelizeKeys(body)
  const res = await instance({ url, method, data })
  const result = humps.camelizeKeys(res.data)
  return result
}

export const getTokens = () =>
  callAPI({
    url: `/token`,
    method: 'GET',
  })
