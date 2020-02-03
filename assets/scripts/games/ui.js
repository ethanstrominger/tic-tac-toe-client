'use strict'
const store = require('./../store')
const calcWinner = require('./calcWinner.js')
const commonUi = require('./../commonUi.js')
const getWinner = calcWinner.getWinner

const okayToClick = (cell) => {
  return $(cell).text() === '' && store.board.winner === 'None'
}

const onClickSuccess = function (response, cell) {
  console.log('Game state', response)
  $(cell).text(store.board.player)
  const id = $(cell).attr('id')
  const index = id.substr(-1, 1)
  store.board.cellArray[index] = store.board.player
  const isX = (store.board.player === 'x')
  store.board.player = (isX ? 'o' : 'x')
  const winner = getWinner(store.board.cellArray)
  if (winner !== 'None') {
    commonUi.showMessage('Winner is ' + winner)
  }
  store.board.winner = winner
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
