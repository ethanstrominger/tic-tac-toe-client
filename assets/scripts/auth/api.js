'use strict'
const commonApi = require('./../commonApi')

/**
 * Call sign-up api
 * @param  {data} See api documentation for data format
 */
const signUp = (data) => commonApi.ajaxCall('POST', 'sign-up', data)

/**
 * Call sign-in api
 * @param  {data} See api documentation for data format
 */
const signIn = (data) => commonApi.ajaxCall('POST', 'sign-in', data)

/**
 * Call sign-out api
 * @param  {data} See api documentation for data format
 */
const signOut = () => commonApi.ajaxCall('DELETE', 'sign-out', undefined, true)

/**
 * Call schange-password api
 * @param  {data} See api documentation for data format
 */
const changePw = (data) => commonApi.ajaxCall('PATCH', 'change-password', data, true)

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
