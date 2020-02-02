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

module.exports = {
  hideScreens,
  showScreen
}
