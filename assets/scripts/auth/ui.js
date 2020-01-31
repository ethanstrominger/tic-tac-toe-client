'use strict'
const store = require('./../store')

const onSignUpSuccess = function (response) {
  console.log('****** Success')
  $('#message').text(response.user.email + 'successfully signed up')
  $('#sign-up').trigger('reset')
  console.log(response)
}

const onSignUpFail = function (response) {
  $('#message').text('Failed')

  console.log(response)
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + 'successfully signed in')
  $('#sign-up').trigger('reset')
  store.user = response.user
  console.log(store)
}

const onSignInFail = function (response) {
  console.log("Failed")
  $('#message').text(response.user.email + 'sign in failed')

  console.log(response)
}

const onChangePwSuccess = function (response) {
  $('#message').text('successfully changed pw')
  $('#sign-up').trigger('reset')
}

const onChangePwFail = function (response) {
  $('#message').text('Change pw failed')

  console.log(response)
}

const onSignOutSuccess = function (response) {
  $('#message').text('successfully signed out')
  $('#sign-up').trigger('reset')
}

const onSignOutFail = function (response) {
  $('#message').text('failed to sign out')
  console.log(response)
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail,
  onSignInSuccess,
  onSignInFail,
  onChangePwFail,
  onChangePwSuccess,
  onSignOutSuccess,
  onSignOutFail
}
