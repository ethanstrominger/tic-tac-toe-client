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
  const id = $(cell).attr('id')
  const index = id.substr(-1, 1)
  store.board.cellArray[index] = store.board.player
  console.log(store.board.cellArray)
  const isX = (store.board.player === 'x')
  console.log('Was ' + store.board.player)
  store.board.player = (isX ? 'o' : 'x')
  console.log('Now ' + store.board.player)
  const winner = getWinner(store.board.cellArray)
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
