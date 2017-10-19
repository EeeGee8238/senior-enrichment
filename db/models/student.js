'use strict';

const Sequelize = require('sequelize');
const Campus = require('./campus');
const db = require('../index.js');

module.exports = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    validate: {
      isEmail: true,
    }
  }
}, { // could do the reverse of this in campus rather than here on student
  defaultScope: {
    include: [Campus]
  }
});
