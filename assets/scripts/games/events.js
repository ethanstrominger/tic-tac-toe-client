'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

const onClick = (event) => {
  event.preventDefault()
  const cell = event.target
  api.move(cell)
    .then(response => {
      ui.onClickSuccess(response, cell)
    })
    .catch(ui.onClickFail)
}

const onStartNewGame = (event) => {
  event.preventDefault()
  api.startNewGame()
    .then(ui.onStartNewGameSuccess)
    .catch(ui.onStartNewGameFail)
}

module.exports = {
  onClick,
  onStartNewGame
}
