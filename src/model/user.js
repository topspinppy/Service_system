import { fetch } from './baseModel/fetch'

export const loginToSystem = datauser => {
  return fetch('POST', `${process.env.REACT_APP_API}signin`, datauser)
}
