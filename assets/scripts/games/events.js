'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
// const api = require('./api')
// const ui = require('./ui')
const store = require('./../store.js')

const onClick = (event) => {
  event.preventDefault()
  const cell = event.target
  const isX = (store.currentPlayer === 'X')
  store.currentPlayer = (isX ? 'O' : 'X')
  $(cell).text(store.currentPlayer)
  console.log(cell)
  console.log(store.currentPlayer)
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
