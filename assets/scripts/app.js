'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')
const store = require('./store.js')
$(() => {
  store.currentPlayer = 'X'
  const gameEvents = require('./games/events')
  $('.cell').on('click', gameEvents.onClick)
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePw)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
