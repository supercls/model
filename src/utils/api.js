import service from './fetch'
export function register(data) {       
    return service({
      url: 'Sys/GetNurse',
      method: 'get',
      params: data
    })
  }
 