const hideScreens = () => {
  $('#stats').hide()
  $('#game-list').hide()
  $('#sign-in-form').hide()
  $('#sign-up-form').hide()
  $('#change-password-form').hide()
  $('#board').hide()
}

const showScreen = (screen) => {
  $(screen).removeAttr('display')
  $(screen).show()
}

const showMessage = (message) => {
  $('#message').css('background-color', 'green')
  $('#message').css('color', 'white')
  $('#message').text(message)
}

const showError = (message, response) => {
  $('#message').css('background-color', 'red')
  $('#message').css('color', 'white')
  $('#message').text(message)
}

module.exports = {
  hideScreens,
  showScreen,
  showMessage,
  showError
}
