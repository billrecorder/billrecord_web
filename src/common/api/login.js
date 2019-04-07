import http from '../js/http'

export const login = (data) => {
  return http({
    url: '/login',
    method: 'post',
    data: JSON.stringify(data),
    contentType: 'form',
  })
}
