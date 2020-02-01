'use strict'
const store = require('./../store')

const hideScreens = () => {
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#board').hide()
}

const gotoSignUpScreen = () => {
  hideScreens()
  $('#sign-up-form').removeAttr('display')
  $('#sign-up-form').show()
}

const gotoSignInScreen = () => {
  hideScreens()
  $('#sign-in-form').removeAttr('display')
  $('#sign-in-form').show()
}

const gotoChangePasswordScreen = () => {
  hideScreens()
  $('#change-password-form').removeAttr('display')
  $('#change-password-form').show()
}

const onSignUpSuccess = function (response) {
  $('#message').text(response.user.email + 'successfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpFail = function (response) {
  $('#message').text('Failed')
}

const onSignInSuccess = function (response) {
  $('#message').text(response.user.email + 'successfully signed in')
  // $('#sign-in').trigger('reset')
  store.user = response.user
  console.log('Response', response)
  console.log('User ', store.user)
}

const onSignInFail = function (response) {
  $('#message').text('Sign in failed')
}

const onChangePwSuccess = function (response) {
  $('#message').text('successfully changed pw')
  $('#change-password').trigger('reset')
}

const onChangePwFail = function (response) {
  $('#message').text('Change pw failed')

  console.log(response)
}

const onSignOutSuccess = function (response) {
  console.log('XXXXXXX')
  $('#message').text('successfully signed out')
  $('#sign-out').trigger('reset')
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
  onSignOutFail,
  gotoSignInScreen,
  gotoSignUpScreen,
  gotoChangePasswordScreen
}
