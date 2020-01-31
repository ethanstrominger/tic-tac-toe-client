'use strict'
const store = require('./../store')

const getCellArray = () => {
  const retArray = []
  for (let i = 0; i < 9; i++) {
    retArray.push($('#cell' + i).text())
  }
  return retArray
}

const getWinnerForValues = (value1, value2, value3) => {
  if (value1 !== '' && value1 === value2 && value2 === value3) {
    return value1
  } else {
    return 'None'
  }
}
const getSingleRowWinner = (cellArray, rowStart) => {
  const value1 = cellArray[rowStart]
  const value2 = cellArray[rowStart + 1]
  const value3 = cellArray[rowStart + 2]
  return getWinnerForValues(value1, value2, value3)
}

const getSingleColumnWinner = (cellArray, colStart) => {
  const value1 = cellArray[colStart]
  const value2 = cellArray[colStart + 3]
  const value3 = cellArray[colStart + 6]
  // console.log ('Col',colStart,'*',value1,'*',value2,'*',value3)
  return getWinnerForValues(value1, value2, value3)
}

const getAnyRowWinner = (cellArray) => {
  let winner = 'None'
  for (let i = 0; i < 3 && winner === 'None'; i++) {
    // console.log('winner a',winner)
    winner = getSingleRowWinner(cellArray, i * 3)
    // console.log('winner x',winner)
  }
  return winner
}

const getAnyColumnWinner = (cellArray) => {
  let winner = 'None'
  for (let i = 0; i < 3 && winner === 'None'; i++) {
    winner = getSingleColumnWinner(cellArray, i)
  }
  return winner
}

const getAnyDiaganolWinner = (cellArray) => {
  let winner = getWinnerForValues(cellArray[0], cellArray[4], cellArray[8])
  if (winner === 'None') {
    winner = getWinnerForValues(cellArray[2], cellArray[4], cellArray[6])
  }
  return winner
}

const getWinner = () => {
  const cellArray = getCellArray()
  let winner = getAnyRowWinner(cellArray)
  if (winner === 'None') {
    winner = getAnyColumnWinner(cellArray)
  }
  if (winner === 'None') {
    winner = getAnyDiaganolWinner(cellArray)
  }
  return winner
}

const onClickSuccess = function (cell) {
  const isX = (store.currentPlayer === 'X')
  $(cell).text(store.currentPlayer)
  store.currentPlayer = (isX ? 'O' : 'X')
  const winner = getWinner()
  if (winner !== 'None') {
    $('#message').text('Winner is ' + winner)
  }
}

const onClickFail = function (response) {
  console.log('***** Fail')
}

module.exports = {
  onClickSuccess,
  onClickFail
}
