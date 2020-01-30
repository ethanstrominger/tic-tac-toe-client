'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')

const onClick = (event) => {
  event.preventDefault()
  const cell = event.target
  console.log(cell)
  // api.signUp(signInData)
  //   .then((response) => {
  //     ui.onSignUpSuccess(response)
  //   })
  //   .catch((response) => {
  //     ui.onSignUpFail(response)
  //   })
}

module.exports = {
  onClick
}
