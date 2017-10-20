'use strict';

const Sequelize = require('sequelize');
const db = require('../index.js');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  image: {
    type: Sequelize.TEXT
  }
});

module.exports = Campus;

const Student = require('./student');

