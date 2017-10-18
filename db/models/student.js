'use strict';

const Sequelize = require('sequelize');
const db = require('../index.js');

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
      isUnique: true
    }
  }
});
