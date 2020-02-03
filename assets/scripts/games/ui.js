'use strict'
const store = require('./../store')
const commonUi = require('./../commonUi.js')
const lodash = require('lodash')

const okayToClick = (cell) => {
  return $(cell).text() === '' && store.currentBoard.winner === 'None'
}

const onClickSuccess = function (response, cell) {
  store.currentBoard = lodash.cloneDeep(store.proposedBoard)
  $(cell).text(store.currentBoard.player)
  const isX = (store.currentBoard.player === 'x')
  store.currentBoard.player = (isX ? 'o' : 'x')
  console.log('Here', store.currentBoard)
  if (store.currentBoard.winner !== 'None') {
    commonUi.showMessage('Winner is ' + store.currentBoard.winner)
  }
}

const onClickFail = function (response) {
  commonUi.showError('Move failed', response)
}

const onStartNewGameSuccess = function (response) {
  commonUi.showMessage('Started new game')
  store.game = response.game
  commonUi.hideScreens()
  commonUi.showScreen('#board')
}

const onStartNewGameFail = function (response) {
  commonUi.showError('Failed to start new game', response)
}

module.exports = {
  okayToClick,
  onClickSuccess,
  onClickFail,
  onStartNewGameSuccess,
  onStartNewGameFail
}
