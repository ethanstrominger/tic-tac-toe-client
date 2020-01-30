'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onSignUp = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  console.log('XXXXX', signInData)
  api.signUp(signInData)
    .then((response) => {
      ui.onSignUpSuccess(response)
    })
    .catch((response) => {
      ui.onSignUpFail(response)
    })
}

const onSignIn = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  console.log('XXXXX', signInData)
  api.signIn(signInData)
    .then((response) => {
      ui.onSignInSuccess(response)
    })
    .catch((response) => {
      ui.onSignInFail(response)
    })
}

const onChangePw = (event) => {
  event.preventDefault()
  const form = event.target
  const signInData = getFormFields(form)
  api.changePw(signInData)
    .then((response) => {
      ui.onChangePwSuccess(response)
    })
    .catch((response) => {
      ui.onChangePwFail(response)
    })
}

const onSignOut = (event) => {
  event.preventDefault()
  api.signOut()
    .then((response) => {
      ui.onSignOutSuccess(response)
    })
    .catch((response) => {
      ui.onSignOutFail(response)
    })
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePw,
  onSignOut
}
