import {useMemo} from 'react'
import data from '../../../data'
import {get} from 'lodash'

const useRawData=(key)=> {
  const response = useMemo(() => {
    return key ? get(data, key, '') : data
  }, [key])

  return response
}

export default useRawData
