import { AxiosError } from 'axios'
import { useQuery } from 'react-query'
import { getTokens } from '@/api'

const useTokens = (options?: any) =>
  // @ts-ignore
  useQuery<IToken[], AxiosError>(['tokens'], getTokens, options)

export default useTokens
