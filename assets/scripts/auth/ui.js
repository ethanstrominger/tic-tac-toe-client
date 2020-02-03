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
  commonUi.showMessage(response.user.email + 'successfully signed up')
  $('#sign-up').trigger('reset')
}

const onSignUpFail = function (response) {
  commonUi.showError('Sign up failed', response)
}

const onSignInSuccess = function (response) {
  commonUi.showMessage(response.user.email + 'successfully signed in')
  // $('#sign-in').trigger('reset')
  store.user = response.user
  $('#buttons-when-signed-out').hide()
  // no need to hide screens as all screens will be hidden
  commonUi.hideScreens()
  commonUi.showScreen('#buttons-when-signed-in')
}

const onSignInFail = function (response) {
  commonUi.showError('Sign in failed', response)
}

const onChangePwSuccess = function (response) {
  commonUi.showMessage('successfully changed pw')
  $('#change-password').trigger('reset')
}

const onChangePwFail = function (response) {
  commonUi.showError('Change pw failed', response)

  // console.log(response)
}

const onSignOutSuccess = function (response) {
  // console.log('XXXXXXX')
  commonUi.showMessage('successfully signed out')
  $('#sign-out').trigger('reset')
  commonUi.hideScreens()
  $('#sign-out').hide()
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
