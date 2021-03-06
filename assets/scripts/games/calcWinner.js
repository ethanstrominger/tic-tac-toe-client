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

const getWinner = (cellArray) => {
  let winner = getAnyRowWinner(cellArray)
  if (winner === 'None') {
    winner = getAnyColumnWinner(cellArray)
  }
  if (winner === 'None') {
    winner = getAnyDiaganolWinner(cellArray)
  }
  return winner
}

module.exports = {
  getWinner
}
