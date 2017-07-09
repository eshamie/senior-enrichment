// have profile info (e.g. name and email)
// must be assigned to a campus

'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate:{
      isEmail: true,
    }
  }
})
