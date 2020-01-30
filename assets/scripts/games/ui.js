'use strict'
// const store = require('./../store')

const onClickSuccess = function (response) {
  console.log('****** Success')
}

const onClickFail = function (response) {
  console.log('***** Fail')
}

module.exports = {
  onClickSuccess,
  onClickFail
}
