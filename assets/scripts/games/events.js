'use strict'
// const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store')
const lodash = require('lodash')
const calcWinner = require('./calcWinner.js')

const setGameState = (cell) => {
  const id = $(cell).attr('id')
  const index = id.substr(-1, 1)
  store.proposedBoard = lodash.cloneDeep(store.currentBoard)
  console.log(store.proposedBoard)
  store.proposedBoard.cellArray[index] = store.proposedBoard.player
  const winner = calcWinner.getWinner(store.proposedBoard.cellArray)
  store.proposedBoard.winner = winner
  if (store.proposedBoard.winner !== 'None') {
    store.proposedBoard.over = true
  } else {
    const countMovesFunc = (total, cellValue) => total + (cellValue !== '' ? 1 : 0)
    const count = store.proposedBoard.cellArray.reduce(countMovesFunc, 0)
    store.proposedBoard.over = (count === 9)
  }
}

const onGetStats = (event) => {
  event.preventDefault()
  api.getGames()
    .then(ui.onGetStatsSuccess)
    .catch(ui.onGetStatsFail)
}

const onClick = (event) => {
  event.preventDefault()
  const cell = event.target
  setGameState(cell)
  if (ui.okayToClick(cell)) {
    // const over = checkOver(cell)
    api.move(cell)
      .then(response => ui.onClickSuccess(response, cell))
      .catch(ui.onClickFail)
  }
}

const onStartNewGame = (event) => {
  event.preventDefault()
  api.startNewGame()
    .then(ui.onStartNewGameSuccess)
    .catch(ui.onStartNewGameFail)
}

module.exports = {
  onClick,
  onStartNewGame,
  onGetStats
}
