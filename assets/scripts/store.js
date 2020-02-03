'use strict'

const store = {
  token: undefined,
  user: undefined,
  // currentBoard is set to proposedBoard if call to API is successful
  currentBoard: {
    cellArray: ['', '', '', '', '', '', '', '', ''],
    player: undefined,
    winner: 'None'
  },
  proposedBoard: {}
}

module.exports = store
