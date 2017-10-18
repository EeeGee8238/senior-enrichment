'use strict';
const Student = require ('./student');

const Sequelize = require('sequelize');
const db = require('../index.js');

const Campus = db.define('campus', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isUnique: true
    }
  },
  image: {
    type: Sequelize.STRING
  }
});

Campus.addHook('beforeDestroy', 'removal', (selectedCampus) => {
  return Student.destroy({
    where: {
      campusId: selectedCampus.id
    }
  })
  .catch((error) => console.error(error));
});

module.exports = Campus;
