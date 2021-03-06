'use strict'
const store = require('./../store')
const commonUi = require('./../commonUi')

const gotoSignUpScreen = () => {
  commonUi.hideScreens()
  $('#sign-up-form').trigger('reset')
  commonUi.showScreen('#sign-up-form')
}

const gotoSignInScreen = () => {
  commonUi.hideScreens()
  $('#sign-in-form').trigger('reset')
  commonUi.showScreen('#sign-in-form')
}

const gotoChangePasswordScreen = () => {
  commonUi.hideScreens()
  $('#change-password-form').trigger('reset')
  commonUi.showScreen('#change-password-form')
}

const onSignUpSuccess = function (response) {
  commonUi.showMessage(response.user.email + ' successfully signed up')
  $('#sign-up-form').hide()
  $('#sign-up-form').trigger('reset')
}

const onSignUpFail = function (response) {
  commonUi.showError('Sign up failed', response)
  $('#sign-up-form').trigger('reset')
}

const onSignInSuccess = function (response) {
  commonUi.showMessage(response.user.email + ' successfully signed in')
  // $('#sign-in').trigger('reset')
  store.user = response.user
  $('#buttons-when-signed-out').hide()
  // no need to hide screens as all screens will be hidden
  commonUi.hideScreens()
  commonUi.showScreen('#buttons-when-signed-in')
  $('#sign-in-form').trigger('reset')
}

const onSignInFail = function (response) {
  commonUi.showError('Sign in failed', response)
  $('#sign-in-form').trigger('reset')
}

const onChangePwSuccess = function (response) {
  commonUi.showMessage('Successfully changed password')
  $('#change-password-form').trigger('reset')
  $('#change-password-form').hide()
}

const onChangePwFail = function (response) {
  commonUi.showError('Change pw failed', response)

  // console.log(response)
}

const onSignOutSuccess = function (response) {
  // console.log('XXXXXXX')
  commonUi.showMessage('Successfully signed out')
  commonUi.hideScreens()
  $('#buttons-when-signed-in').hide()
  $('#h1').show()
  commonUi.showScreen('#buttons-when-signed-out')
}

const onSignOutFail = function (response) {
  commonUi.showError('failed to sign out', response)
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
