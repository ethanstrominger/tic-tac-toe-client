'use strict'
const store = require('./../store')
const calcWinner = require('./calcWinner.js')
const getWinner = calcWinner.getWinner

const okayToClick = (cell) => {
  return $(cell).text() === '' && store.board.winner === 'None'
}

const onClickSuccess = function (response, cell) {
  console.log('Game state', response)
  $(cell).text(store.board.player)
  const isX = (store.board.player === 'x')
  store.board.player = (isX ? 'o' : 'x')
  const winner = getWinner()
  if (winner !== 'None') {
    $('#message').text('Winner is ' + winner)
  }
  store.board.winner = winner
}

const onClickFail = function (response) {
  console.log('***** Fail')
}

const onStartNewGameSuccess = function (response) {
  $('#message').text('Started new game')
  store.game = response.game
}

const onStartNewGameFail = function (response) {
  console.log(response)
  $('#message').text('Failed to start new game')
}

module.exports = {
  okayToClick,
  onClickSuccess,
  onClickFail,
  onStartNewGameSuccess,
  onStartNewGameFail
}
