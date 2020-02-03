'use strict'

let apiUrl
const config = {
  development: 'https://tic-tac-toe-wdi.herokuapp.com',
  production: 'https://tic-tac-toe-wdi-production.herokuapp.com'
}

if (window.location.hostname === 'localhost') {
  apiUrl = config.development
} else {
  apiUrl = config.production
}

module.exports = {
  apiUrl
}
