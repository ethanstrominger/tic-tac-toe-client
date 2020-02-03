'use strict'
const store = require('./../store')
const commonUi = require('./../commonUi.js')
const lodash = require('lodash')
const calcWinner = require('./calcWinner')

const okayToClick = (cell) => {
  return $(cell).text() === '' && store.currentBoard.winner === 'None'
}

const onGetStatsSuccess = (response) => {
  const games = response.games
  const stats = {
    xwins: 0,
    owins: 0,
    ties: 0,
    unfinished: 0
  }
  let message
  games.forEach(game => {
    if (game.over) {
      const winner = calcWinner.getWinner(game.cells)
      if (winner === 'x') {
        stats.xwins++
      } else if (winner === 'o') {
        stats.owins++
      } else {
        stats.ties++
      }
    } else {
      stats.unfinished++
    }
    message = `X won: ${stats.xwins}`
    message = message + ` O won: ${stats.owins}`
    message = message + ` Ties: ${stats.ties}`
    if (stats.unfinished > 0) {
      message = message + ` In Progress: ${stats.unfinished}`
    }
  })
  $('#stats').text(message)
}

const onGetStatsFail = (response) => {
  commonUi.showError('Get stats failed', response)
  console.log('Failed')
}

const onClickSuccess = (response, cell) => {
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
  onStartNewGameFail,
  onGetStatsSuccess,
  onGetStatsFail
}
