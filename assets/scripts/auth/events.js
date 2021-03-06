'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onClickSignUp = (event) => {
  ui.gotoSignUpScreen()
}

const onClickSignIn = (event) => {
  ui.gotoSignInScreen()
}

const onClickChangePassword = (event) => {
  ui.gotoChangePasswordScreen()
}

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  api.signUp(signInData)
    .then(ui.onSignUpSuccess)
    .catch(ui.onSignUpFail)
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  api.signIn(signInData)
    .then(ui.onSignInSuccess)
    .catch(ui.onSignInFail)
}

const onChangePw = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  api.changePw(signInData)
    .then(ui.onChangePwSuccess)
    .catch(ui.onChangePwFail)
}

const onClickSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onSignOutFail)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onClickSignOut,
  onClickSignIn,
  onClickSignUp,
  onClickChangePassword
}
