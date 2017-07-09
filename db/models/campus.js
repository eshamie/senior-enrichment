// have info such as a name and image
// can have many students assigned (may have none)

'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

module.exports = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING,
    validate:{
      isUrl: true,
    }
  }
})
