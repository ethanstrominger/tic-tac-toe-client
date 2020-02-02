'use strict'
const config = require('./../config.js')
const store = require('./../store.js')

const _ajaxCall = (method, endPoint, data, useToken) => {
  // set endPoint to blank string if undefined
  if (endPoint === undefined) {
    endPoint = ''
  }
  // add slash to endPoint if non-empty
  if (endPoint !== '') {
    endPoint = '/' + endPoint
  }

  // create adjaxArg
  const ajaxArg = {
    url: config.apiUrl + endPoint,
    method: method
  }

  // add headers property with authorization to ajax argument
  if (useToken) {
    ajaxArg.headers =
      {
        Authorization: `Token  token=${store.user.token}`
      }
  }

  // if defined, add data property to ajax argument
  if (data !== undefined) {
    ajaxArg.data = data
  }

  // make ajax call
  return $.ajax(ajaxArg)
}

/**
 * Call sign-up api
 * @param  {data} See api documentation for data format
 */
const signUp = (data) => _ajaxCall('POST', 'sign-up', data)

/**
 * Call sign-in api
 * @param  {data} See api documentation for data format
 */
const signIn = (data) => _ajaxCall('POST', 'sign-in', data)

const onClickSignUp = () => {
  console.log('Abc')
}
/**
 * Call sign-out api
 * @param  {data} See api documentation for data format
 */
const signOut = () => _ajaxCall('DELETE', 'sign-out', undefined, true)

/**
 * Call schange-password api
 * @param  {data} See api documentation for data format
 */
const changePw = (data) => _ajaxCall('PATCH', 'change-password', data, true)

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut,
  onClickSignUp
}
