'use strict'
const store = require('./../store')
const commonUi = require('./../commonUi')

const gotoSignUpScreen = () => {
  commonUi.hideScreens()
  commonUi.showScreen('#sign-up-form')
}

const gotoSignInScreen = () => {
  commonUi.hideScreens()
  commonUi.showScreen('#sign-in-form')
}

const gotoChangePasswordScreen = () => {
  commonUi.hideScreens()
  commonUi.showScreen('#change-password-form')
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
  $('#buttons-when-signed-out').hide()
  // no need to hide screens as all screens will be hidden
  // commonUi.hideScreens()
  commonUi.showScreen('#buttons-when-signed-in')
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
  commonUi.hideScreens()
  commonUi.showScreen('#buttons-when-signed-out')
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
