'use strict'
const apiUrls = require('./../config.js')
const store = require('./../store.js')

const signUp = (data) => {
  return $.ajax({
    url: apiUrls.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = (data) => {
  return $.ajax({
    url: apiUrls.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
}

const signOut = () => {
  return $.ajax({
    url: apiUrls.apiUrl + '/sign-out',
    headers: {
      Authorization: `Token  token=${store.user.token}`
    },
    method: 'DELETE'
  })
}

const changePw = (data) => {
  const url = apiUrls.apiUrl + '/change-password'
  console.log('In change pw')
  console.log(url)
  console.log(`Token  token=${store.user.token}`)
  console.log(data)
  return $.ajax({
    url: url,
    headers: {
      Authorization: `Token  token=${store.user.token}`
    },
    method: 'PATCH',
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
