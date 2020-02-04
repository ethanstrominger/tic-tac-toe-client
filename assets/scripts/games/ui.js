'use strict'
const store = require('./../store')
const commonUi = require('./../commonUi.js')
const lodash = require('lodash')
const calcWinner = require('./calcWinner')

const okayToClick = (cell) => {
  return $(cell).text() === '' && store.currentBoard.winner === 'None'
}

const restartGame = (event) => {
  console.log('Game hello', event.target)
  const cellIndex = $(event.target).attr('id').substr(9)
  console.log(store.games)
  console.log(cellIndex)
  console.log(store.games[cellIndex])
  commonUi.showMessage('To start game, click on any cell.')
  _setCellsToBlank()
  _initCurrentBoard()
  commonUi.hideScreens()
  $('h1').hide()
  const game = store.games[cellIndex]
  store.currentBoard.player = 'x'
  const cells = game.cells
  const winner = calcWinner.getWinner(cells)
  store.currentBoard.winner = winner
  store.currentBoard.cellArray = cells
  store.game = game
  commonUi.hideScreens()
  commonUi.showScreen('#board')
  let numberOfMoves = 0
  for (let i = 0; i < cells.length; i++) {
    if (cells[i] !== '') {
      numberOfMoves++
    }
    $(`#cell${i}`).text(cells[i])
  }
  store.currentBoard.player = (numberOfMoves % 2 === 0) ? 'x' : 'o'
}

const onGetGameListSuccess = (response) => {
  const games = response.games
  let html = '<table>'
  for (let rowCounter = 0; rowCounter < games.length; rowCounter++) {
    const game = games[rowCounter]
    let phrase
    if (game.over) {
      const winner = calcWinner.getWinner(game.cells)
      if (winner === 'x') {
        phrase = 'X wins'
      } else if (winner === 'o') {
        phrase = 'O wins'
      } else {
        phrase = 'Tie'
      }
    } else {
      phrase = 'In progress'
    }
    html = html + `<tr id=game${game.id}><td><a href="#" class="game-link" id=game-row-${rowCounter}>` +
           `Game: ${game.id}</a></td><td>${phrase}</td></tr>`
  }
  html = html + '</table>'
  console.log('html', html)
  commonUi.showScreen('#list-of-games')
  $('#list-of-games').html(html)
  $('.game-link').on('click', restartGame)
  store.games = games
}

const onGetGameListFail = (response) => {
  commonUi.showError('Game list failed', response)
  // console.log('Failed')
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
  for (let rowCounter = 0; rowCounter < games.length; rowCounter++) {
    const game = games[rowCounter]
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
  }
  message = `X won: ${stats.xwins}`
  message = message + ` O won: ${stats.owins}`
  message = message + ` Ties: ${stats.ties}`
  if (stats.unfinished > 0) {
    message = message + ` In Progress: ${stats.unfinished}`
  }
  commonUi.showScreen('#list-of-games')
  $('#stats').text(message)
  store.games = games
}

const onGetStatsFail = (response) => {
  commonUi.showError('Get stats failed', response)
  // console.log('Failed')
}

const onClickSuccess = (response, cell) => {
  console.log('On Click Success')
  store.currentBoard = lodash.cloneDeep(store.proposedBoard)
  $(cell).text(store.currentBoard.player)
  const isX = (store.currentBoard.player === 'x')
  store.currentBoard.player = (isX ? 'o' : 'x')
  // console.log('Here', store.currentBoard)
  if (store.currentBoard.winner !== 'None') {
    commonUi.showMessage('Winner is ' + store.currentBoard.winner)
  } else if (store.currentBoard.over) {
    commonUi.showMessage('Game is a tie')
  } else {
    commonUi.showMessage(`Now, it is ${store.currentBoard.player}'s turn.`)
  }
}

const onClickFail = function (response) {
  commonUi.showError('Move failed', response)
}

const _initCurrentBoard = () => {
  store.currentBoard =
    { cellArray: ['', '', '', '', '', '', '', '', ''],
      player: 'x',
      winner: 'None'
    }
}

const _setCellsToBlank = () => {
  $('.cell').text('')
}

const onStartNewGameSuccess = function (response) {
  commonUi.showMessage('To start game, click on any cell.')
  store.game = response.game
  _setCellsToBlank()
  _initCurrentBoard()
  commonUi.hideScreens()
  $('h1').hide()
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
  onGetStatsFail,
  onGetGameListSuccess,
  onGetGameListFail
}
