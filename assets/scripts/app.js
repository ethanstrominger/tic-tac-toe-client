'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const gameEvents = require('./games/events')
const authUi = require('./auth/ui')
// const hideShow = require('./games/hide-show')

// use require without a reference to ensure a file is bundled
// require('./example')
const store = require('./store.js')
$(() => {
  store.board.player = 'x'
  $('.cell').on('click', gameEvents.onClick)
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePw)
  $('#sign-up-button').on('click', authUi.gotoSignUpScreen)
  // $('#sign-in-button').on('click', authUi.gotoSignInScreen)
  $('#sign-in-button').on('click', authUi.gotoSignInScreen)
  $('#sign-out-button').on('click', authEvents.onClickSignOut)
  $('#change-password-button').on('click', authUi.gotoChangePasswordScreen)
  $('#play-game-button').on('click', gameEvents.onStartNewGame)
})
