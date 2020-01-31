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
  console.log(value1,value2,value3)
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
  console.log ('Row',rowStart,value1,value2,value3)
  return getWinnerForValues(value1, value2, value3)
}

const getSingleColumnWinner = (cellArray, colStart) => {
  const value1 = cellArray[colStart]
  const value2 = cellArray[colStart + 3]
  const value3 = cellArray[colStart + 6]
  // console.log ('Col',colStart,'*',value1,'*',value2,'*',value3)
  console.log(cellArray)
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
  store.currentPlayer = (isX ? 'O' : 'X')
  $(cell).text(store.currentPlayer)
  console.log(cell)
  console.log(getCellArray())
  console.log(store.currentPlayer)
  console.log('Winner is ' + getWinner())
}

const onClickFail = function (response) {
  console.log('***** Fail')
}

module.exports = {
  onClickSuccess,
  onClickFail
}
