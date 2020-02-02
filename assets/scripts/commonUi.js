const hideScreens = () => {
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
  $('#message').text(message)
}

const showError = (message, response) => {
  $('#message').text(message)
}

module.exports = {
  hideScreens,
  showScreen,
  showMessage,
  showError
}
