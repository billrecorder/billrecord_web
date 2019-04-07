import http from '../js/http'

export const test = () => {
  return http({
    url: '/test',
    method: 'get',
  })
}
