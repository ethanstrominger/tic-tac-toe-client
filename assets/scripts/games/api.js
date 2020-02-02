'use strict'
// const store = require('./../store.js')
const config = require('./../config.js')
const store = require('./../store.js')

const move = (cell) => {
  const id = $(cell).attr('id')
  const index = id.substr(-1, 1)
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game.id,
    headers: {
      Authorization: `Token  token=${store.user.token}`
    },
    method: 'PATCH',
    data: {
      game: {
        cell: {
          index: index,
          value: store.board.player.toLowerCase()
        },
        over: false
      }
    }
  })
}

const startNewGame = () => {
  console.log('XXXXXXX')
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: `Token  token=${store.user.token}`
    },
    method: 'POST'
  })
}

module.exports = {
  startNewGame,
  move
}
