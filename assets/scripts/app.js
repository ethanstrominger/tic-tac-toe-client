'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const gameEvents = require('./games/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')
const store = require('./store.js')
$(() => {
  store.board.player = 'x'
  $('.cell').on('click', gameEvents.onClick)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('#new-game').on('submit', gameEvents.onStartNewGame)
})
